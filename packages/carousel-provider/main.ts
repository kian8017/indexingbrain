export type Image = {
	width: number;
	height: number;
	url: string;
}

export type Slide = {
	nickname: string;
	handwritten: Image;
	typed: Image;
};

export interface CarouselProvider {
	getSlides(): Promise<Slide[]>;
};

export class PayloadCarouselProvider implements CarouselProvider {
	private payloadAddress: string;

	constructor(addr) {
		this.payloadAddress = addr;
	}

	async getSlides(): Promise<Slide[]> {
		const resp = await this._sendRequest("/api/carousel-pairs");
		const rawSlides = (await resp.json()).docs;
		return rawSlides.map(rs => {
			return {
				nickname: rs.nickname,
				handwritten: {
					height: rs.handwrittenImage.height,
					width: rs.handwrittenImage.width,
					url: this.payloadAddress + rs.handwrittenImage.url,
				},
				typed: {
					height: rs.typedImage.height,
					width: rs.typedImage.width,
					url: this.payloadAddress + rs.typedImage.url,
				},
			} as Slide;
		});
	}

	async _sendRequest(partialUrl): Promise<Response> {
		const fullUrl = this.payloadAddress + partialUrl;
		return await fetch(fullUrl);
	}
}
