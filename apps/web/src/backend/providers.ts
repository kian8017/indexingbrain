import { PayloadFAQProvider } from "faq-provider";

const PAYLOAD_ADDRESS="http://cms:3000";

export const faqProvider = new PayloadFAQProvider(PAYLOAD_ADDRESS);
