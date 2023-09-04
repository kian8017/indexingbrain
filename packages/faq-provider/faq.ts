export type FAQ = {
  question: string;
  answer: string;
};

export interface FAQProvider {
  getFaqs(): Promise<FAQ[]>;
}

export class PayloadFAQProvider implements FAQProvider {
  constructor() {}

  async getFaqs(): Promise<FAQ[]> {
    return [];
  }
}
