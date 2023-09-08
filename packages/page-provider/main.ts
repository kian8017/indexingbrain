import RenderPayloadDocument from "./renderer";
import ReactDOMServer from "react-dom/server";

import { fetch } from "cross-fetch";

export type Page = {
  title: string;
  body: string;
};

export interface PageProvider {
  getPage(slug: string): Promise<Page | null>;
}

export class PayloadPageProvider implements PageProvider {
  private payloadAddress: string;

  constructor(addr: string) {
    this.payloadAddress = addr;
  }

  async getPage(slug: string): Promise<Page | null> {
    const resp = await this._sendRequest(
      `/api/pages?where[slug][equals]=${slug}`
    );
    const pages = (await resp.json()).docs;
    if (pages.length !== 1) {
      return null;
    }

    const page = pages[0];
    const content = RenderPayloadDocument({ nodes: page.content });
    return {
      title: page.title,
      body: ReactDOMServer.renderToString(content),
    };
    /*
    try {
      const resp = await this._sendRequest("/api/faq");
      const rawFaqs = (await resp.json()).docs;
      return rawFaqs.map((rf: any) => {
        return {
          question: rf.question,
          answer: rf.answer,
        };
      });
    } catch (err) {
      console.error("FAQ FETCH ERROR", err);
      return [];
    }
    */
  }

  async _sendRequest(partialUrl: string): Promise<Response> {
    const fullUrl = this.payloadAddress + partialUrl;
    return await fetch(fullUrl, {
      cache: "no-cache",
    });
  }
}
