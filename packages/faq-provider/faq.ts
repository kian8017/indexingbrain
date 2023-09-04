export type FAQ = {
  question: string;
  answer: string;
};

export class FAQProvider {
  constructor() {}

  async getFaqs(): Promise<FAQ[]> {
    return [];
  }
}
