"use client";
type FAQClientProps = {
  questions: QA[];
};

export default function FAQClient(props: FAQClientProps) {
  const questionElements = props.questions.map((q) => {
    return (
      <div key={q.id} className="collapse bg-neutral/80">
        <input type="radio" name="faq" />
        <div className="collapse-title">
          <span>{q.question}</span>
        </div>
        <div className="collapse-content">
          <span className="text-secondary">{q.answer}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="space-y-2 mx-auto">
      <h1>Frequently Asked Questions</h1>
      {questionElements}
    </div>
  );
}
