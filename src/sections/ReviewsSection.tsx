import { reviews } from '../data/content';

function ReviewCard({ quote, name, city, initial }: typeof reviews[0]) {
  return (
    <div
      className="rounded-[18px] p-6 md:p-7 flex flex-col gap-4"
      style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
    >
      <p className="text-[14.5px] leading-relaxed" style={{ color: 'var(--ink)' }}>
        <span
          className="block text-[30px] leading-none mb-1"
          style={{ color: 'var(--gold)', fontFamily: "'Fraunces', serif" }}
        >
          &ldquo;
        </span>
        {quote}
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-serif font-semibold text-[14px]"
          style={{
            background: 'var(--sage-tint)',
            color: 'var(--sage-deep)',
            fontFamily: "'Fraunces', serif",
          }}
        >
          {initial}
        </div>
        <div>
          <b className="block text-sm" style={{ color: 'var(--sage-deep)' }}>{name}</b>
          <span className="text-[12.5px]" style={{ color: 'var(--ink-faint)' }}>{city}</span>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ padding: '78px 0' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Отзывы</span>
          <h2>Что говорят владельцы животных</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
