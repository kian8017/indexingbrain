import FAQClient from "./faq.client";
import request from "./payload";

export default async function FAQServer() {
  const resp = await request("/api/faq", undefined, "GET");
  const QAs = resp.docs.map((d: any) => {
    return {
      id: d.id,
      question: d.question,
      answer: d.answer,
    };
  }) as QA[];
  return <FAQClient questions={QAs} />;
}
