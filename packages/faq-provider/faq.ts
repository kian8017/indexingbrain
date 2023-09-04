export type FAQ = {
  question: string;
  answer: string;
};
export async function getFaqs(): Promise<FAQ[]> {
  return [];
}
