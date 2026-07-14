import { useState } from 'react';
import { faqData } from '../data/content';

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-q" onClick={onClick}>
        <span>{q}</span>
        <span className="plus">+</span>
      </div>
      <div className="faq-a" style={{ maxHeight: isOpen ? '260px' : '0' }}>
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="band-soft" style={{ padding: '78px 0' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Вопросы и ответы</span>
          <h2>Часто спрашивают</h2>
        </div>

        <div className="max-w-[820px]">
          {faqData.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
