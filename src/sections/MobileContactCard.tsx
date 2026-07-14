import { siteData } from '../data/content';

interface MobileContactCardProps {
  onOpenModal: () => void;
}

export default function MobileContactCard({ onOpenModal }: MobileContactCardProps) {
  return (
    <section className="lg:hidden" style={{ padding: '0 0 56px' }}>
      <div className="container">
        <div
          className="rounded-[18px] p-6"
          style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
        >
          <h3
            className="text-[19px] mb-3"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: 'var(--sage-deep)' }}
          >
            Свяжитесь с нами
          </h3>
          <p className="text-[15px] mb-5" style={{ color: 'var(--ink-soft)' }}>
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
              className="text-[16px] font-semibold"
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
      </div>
    </section>
  );
}
