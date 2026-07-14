import { cremationData } from '../data/content';

function CremCard({
  featured,
  tag,
  title,
  text,
  features,
}: {
  featured?: boolean;
  tag: string;
  title: string;
  text: string;
  features: string[];
}) {
  return (
    <div
      className="rounded-[18px] p-7 md:p-8"
      style={{
        background: featured ? 'transparent' : 'var(--paper)',
        border: '1px solid var(--line)',
        boxShadow: featured ? 'var(--shadow)' : 'none',
      }}
    >
      <span
        className="inline-block font-serif font-bold text-[15px] px-3.5 py-1.5 rounded-full mb-3"
        style={{
          background: featured ? 'rgba(198,154,85,0.22)' : 'var(--gold-soft)',
          color: featured ? 'var(--gold-soft)' : 'var(--gold-deep)',
          fontFamily: "'Fraunces', serif",
        }}
      >
        {tag}
      </span>
      <h3
        className="text-[22px] mb-2.5"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          color: featured ? '#fff' : 'var(--sage-deep)',
        }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] mb-4"
        style={{ color: featured ? '#C9D0C2' : 'var(--ink-soft)' }}
      >
        {text}
      </p>
      <ul className="flex flex-col gap-2.5 mt-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[14.5px]" style={{ color: featured ? '#D6DBCB' : 'var(--ink-soft)' }}>
            <span className="dot mt-1.5" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CremationSection() {
  return (
    <section id="cremation" className="band-sage" style={{ padding: '78px 0' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">После процедуры</span>
          <h2 style={{ color: '#F1EEE3' }}>Индивидуальная или общая кремация</h2>
          <p style={{ color: '#C9D0C2' }}>
            Мы бережно упаковываем тело животного и организуем перевозку в крематорий. Все этапы фиксируются и учитываются.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CremCard
            featured
            tag={cremationData.individual.tag}
            title={cremationData.individual.title}
            text={cremationData.individual.text}
            features={cremationData.individual.features}
          />
          <CremCard
            tag={cremationData.common.tag}
            title={cremationData.common.title}
            text={cremationData.common.text}
            features={cremationData.common.features}
          />
        </div>
      </div>
    </section>
  );
}
