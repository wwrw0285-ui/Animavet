import { siteData } from '../data/content';

interface HeroSectionProps {
  onOpenModal: () => void;
}

function FactCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-[14px]"
      style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
    >
      <div className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold-deep)' }}>
        {icon}
      </div>
      <div>
        <b className="block text-sm font-bold mb-0.5" style={{ color: 'var(--sage-deep)' }}>
          {title}
        </b>
        <span className="text-[13px]" style={{ color: 'var(--ink-faint)' }}>
          {desc}
        </span>
      </div>
    </div>
  );
}

function ContactCard({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div
      className="rounded-[18px] p-7 hidden lg:block"
      style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
    >
      <h3
        className="text-[19px] mb-3"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: 'var(--sage-deep)' }}
      >
        Свяжитесь с нами
      </h3>
      <p className="text-[15px] mb-6" style={{ color: 'var(--ink-soft)' }}>
        Вы можете позвонить по указанному номеру или оставить заявку.
      </p>

      <button
        onClick={onOpenModal}
        className="w-full py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5 mb-4"
        style={{
          background: 'var(--sage)',
          color: '#F8F5EC',
          boxShadow: '0 14px 30px -14px rgba(41,52,42,0.55)',
        }}
      >
        Оставить заявку
      </button>

      <div className="text-center mb-4">
        <a
          href={siteData.phoneLink}
          className="text-[15px] font-semibold"
          style={{ color: 'var(--sage-deep)', fontFamily: "'Fraunces', serif" }}
        >
          {siteData.phone}
        </a>
      </div>

      <div className="flex items-center justify-center gap-3">
        <a
          href={siteData.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-4 py-2 rounded-full border transition-colors duration-200 hover:border-[var(--sage)] hover:bg-[var(--paper)]"
          style={{ color: 'var(--sage-deep)', borderColor: 'var(--line)' }}
        >
          Telegram
        </a>
        <a
          href={siteData.max}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-4 py-2 rounded-full border transition-colors duration-200 hover:border-[var(--sage)] hover:bg-[var(--paper)]"
          style={{ color: 'var(--sage-deep)', borderColor: 'var(--line)' }}
        >
          MAX
        </a>
      </div>
    </div>
  );
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden" style={{ padding: '88px 0 70px' }}>
      {/* Anima Glow */}
      <span
        className="anima-glow"
        style={{
          width: '520px',
          height: '520px',
          top: '-220px',
          right: '-140px',
        }}
      />

      <div className="container">
        <div className="flex gap-12 items-start">
          {/* Main Content */}
          <div className="relative z-[1] max-w-[760px] flex-1">
            <span className="eyebrow">Санкт-Петербург и Ленинградская область</span>

            <h1
              className="mt-4 mb-5"
              style={{
                fontSize: 'clamp(34px, 5vw, 52px)',
                lineHeight: 1.08,
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                color: 'var(--sage-deep)',
              }}
            >
              Гуманное усыпление и кремация животных — дома, спокойно, с заботой
            </h1>

            <p className="text-lg mb-8 max-w-[560px]" style={{ color: 'var(--ink-soft)' }}>
              Когда лечение больше не помогает, мы берём на себя всё остальное: приезжаем в любое время суток, проводим процедуру бережно и без спешки, организуем кремацию и возвращаем прах.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3.5 mb-10">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--sage)',
                  color: '#F8F5EC',
                  boxShadow: '0 14px 30px -14px rgba(41,52,42,0.55)',
                }}
              >
                Оставить заявку
              </button>
              <a
                href="#prices"
                onClick={(e) => { e.preventDefault(); document.querySelector('#prices')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[15px] border transition-all duration-200 hover:bg-[var(--paper)]"
                style={{ color: 'var(--sage-deep)', borderColor: 'var(--line)' }}
              >
                Смотреть цены
              </a>
            </div>

            {/* Fact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[720px]">
              <FactCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M11 6.5V11l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                }
                title="Круглосуточно"
                desc="Выезд в любое время дня и ночи"
              />
              <FactCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 18l3-9 4 6 3-11 4 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                title="Эвтаназия дома"
                desc="Кремация в лаборатории"
              />
              <FactCard
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 3v16M3 11h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                }
                title="Выезд от 500 ₽"
                desc="По городу, без скрытых доплат"
              />
            </div>
          </div>

          {/* Contact Card - Desktop only */}
          <div className="flex-shrink-0 w-[300px] pt-4">
            <ContactCard onOpenModal={onOpenModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
