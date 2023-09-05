export type FAQ = {
	question: string;
	answer: string;
};

export interface FAQProvider {
	getFAQs(): Promise<FAQ[]>;
};

export class PayloadFAQProvider implements FAQProvider {
	private payloadAddress: string;

	constructor(addr: string) {
		this.payloadAddress = addr;
	}

	async getFAQs(): Promise<FAQ[]> {
		const resp = await this._sendRequest("/api/faq");
		const rawFaqs = (await resp.json()).docs;
		return rawFaqs.map((rf: any) => {
			return {
				question: rf.question,
				answer: rf.answer,
			};
		});
	}

	async _sendRequest(partialUrl: string): Promise<Response> {
		const fullUrl = this.payloadAddress + partialUrl;
		return await fetch(fullUrl);
	}
}
