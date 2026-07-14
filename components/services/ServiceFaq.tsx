import '@/styles/components/service-faq.scss'

export interface FaqItem {
  question: string
  answer: string
}

interface ServiceFaqProps {
  faqs: FaqItem[]
}

export default function ServiceFaq({ faqs }: ServiceFaqProps) {
  return (
    <section className="service-faq" aria-labelledby="faq-heading">
      <div className="service-faq__inner">
        <p className="service-faq__label" aria-hidden="true">
          // FREQUENTLY ASKED
        </p>
        <h2 className="service-faq__heading" id="faq-heading">
          Common Questions
        </h2>
        <dl className="service-faq__list" role="list">
          {faqs.map((faq, i) => (
            <div key={i} className="service-faq__item" role="listitem">
              <details className="service-faq__details">
                <summary className="service-faq__question">
                  <span className="service-faq__question-text">{faq.question}</span>
                  <span className="service-faq__icon" aria-hidden="true" />
                </summary>
                <dd className="service-faq__answer">
                  <p>{faq.answer}</p>
                </dd>
              </details>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
