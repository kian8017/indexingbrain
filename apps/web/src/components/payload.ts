class PayloadFetch {
  private payloadHost: string;
  private authToken: string;
  private isLoggedIn: boolean;

  constructor(payloadHost: string) {
    this.payloadHost = payloadHost;
    this.authToken = "";
    this.isLoggedIn = false;
  }

  async _sendRequest(partialUrl: string, body: any, method: string = "POST") {
    return await fetch(this.payloadHost + partialUrl, {
      method,
      headers: {
        "content-type": "application/json",
        authorization: this.isLoggedIn ? `JWT ${this.authToken}` : "",
      },
      body: JSON.stringify(body),
      cache: "no-cache",
    });
  }

  async login() {
    const resp = await this._sendRequest("/api/users/login", {
      email: process.env.PAYLOAD_EMAIL!,
      password: process.env.PAYLOAD_PASSWORD!,
    });

    if (resp.status !== 200) {
      throw new Error("unable to login");
    } else {
      const body = await resp.json();
      if (body.token !== undefined) {
        this.authToken = body.token;
        this.isLoggedIn = true;
      }
    }
  }

  async request(partialUrl: string, body: any, method: string) {
    let resp = await this._sendRequest(partialUrl, body, method);
    if (resp.status === 403) {
      console.log("forbidden, logging in");
      await this.login();
      resp = await this._sendRequest(partialUrl, body, method);
      if (resp.status !== 200) {
        throw new Error("login failed");
      }
    }
    return await resp.json();
  }
}

const Payload = new PayloadFetch(process.env.NEXT_PUBLIC_PAYLOAD_ADDRESS!);

const request = Payload.request.bind(Payload);
export default request;
