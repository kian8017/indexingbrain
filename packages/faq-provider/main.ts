export type FAQ = {
	question: string;
	answer: string;
};

export interface FAQProvider {
	getFAQs(): Promise<FAQ[]>;
};

export class PayloadFAQProvider implements FAQProvider {
	private payloadAddress: string;

	constructor(addr) {
		this.payloadAddress = addr;
	}

	async getFAQs() {
		const resp = await this._sendRequest("/api/faq");
		const rawFaqs = (await resp.json()).docs;
		return rawFaqs.map(rf => {
			return {
				question: rf.question,
				answer: rf.answer,
			};
		});
	}

	async _sendRequest(partialUrl): Promise<Response> {
		const fullUrl = this.payloadAddress + partialUrl;
		return await fetch(fullUrl);
	}
}
