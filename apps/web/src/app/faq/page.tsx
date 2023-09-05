import { faqProvider } from "@/backend/providers";


export default async function FAQ() {
  const faqs = await faqProvider.getFAQs();

  const faqElements = faqs.map(f => {
    return (
      <div key={f.question} className="collapse bg-neutral/80">
        <input type="radio" name="faq" />
        <div className="collapse-title">
          <span>{f.question}</span>
        </div>
        <div className="collapse-content">
          <span className="text-secondary">{f.answer}</span>
        </div>
      </div>
    );
  })

  return (
    <div className="space-y-2 max-w-4xl mx-auto">
      <h1>Frequently Asked Questions</h1>
      {faqElements}
    </div>
  );
}
