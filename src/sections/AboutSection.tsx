import { indications } from '../data/content';

interface AboutSectionProps {
  onOpenModal: () => void;
}

function IndicationItem({ text }: { text: string }) {
  return (
    <div
      className="flex items-start gap-3.5 p-4 rounded-[14px]"
      style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
    >
      <span className="dot mt-1.5" />
      <span className="text-[15px]" style={{ color: 'var(--ink)' }}>{text}</span>
    </div>
  );
}

export default function AboutSection({ onOpenModal }: AboutSectionProps) {
  return (
    <section id="about" style={{ padding: '78px 0' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start">
          {/* Left Column */}
          <div>
            <span className="eyebrow">Зачем это нужно</span>
            <h2
              className="mt-3.5 mb-4"
              style={{
                fontSize: 'clamp(26px, 3.4vw, 36px)',
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                color: 'var(--sage-deep)',
                lineHeight: 1.18,
              }}
            >
              Помощь, когда лечение уже бессильно
            </h2>
            <p className="mb-4" style={{ color: 'var(--ink-soft)' }}>
              Усыпление и кремация — это не медицинская неудача, а способ избавить питомца от боли, когда возможности ветеринарии исчерпаны. Решение всегда даётся тяжело, и в этот момент важно не остаться с ним один на один.
            </p>
            <p className="mb-4" style={{ color: 'var(--ink-soft)' }}>
              Служба AnimaVet работает в Санкт-Петербурге и Ленинградской области. Мы выезжаем на дом в любое время суток, чтобы прощание прошло в спокойной, привычной для животного обстановке — без очередей и лишнего стресса.
            </p>
            <p className="mb-6" style={{ color: 'var(--ink-soft)' }}>
              Перед процедурой врач проводит осмотр и честно объясняет ситуацию. Решение принимаете вы — мы лишь помогаем сделать его максимально бережно.
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--gold)',
                color: '#2E2312',
              }}
            >
              Бесплатная консультация по телефону
            </button>
          </div>

          {/* Right Column */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontSize: '19px',
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                color: 'var(--sage-deep)',
              }}
            >
              Когда стоит задуматься об усыплении
            </h3>
            <div className="flex flex-col gap-3.5">
              {indications.map((item, i) => (
                <IndicationItem key={i} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
