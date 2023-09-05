import { PayloadFAQProvider } from "faq-provider";
import { PayloadCarouselProvider } from "carousel-provider";

const PAYLOAD_ADDRESS = process.env.PAYLOAD_ADDRESS;
if (PAYLOAD_ADDRESS === undefined) {
  throw new Error("PAYLOAD_ADDRESS is undefined");
}

export const faqProvider = new PayloadFAQProvider(PAYLOAD_ADDRESS);
export const carouselProvider = new PayloadCarouselProvider(PAYLOAD_ADDRESS);
