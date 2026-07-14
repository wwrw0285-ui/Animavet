import { pricingData } from '../data/content';

interface PricingSectionProps {
  onOpenModal: () => void;
}

export default function PricingSection({ onOpenModal }: PricingSectionProps) {
  return (
    <section id="prices" className="band-soft" style={{ padding: '78px 0' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Стоимость</span>
          <h2>Цена зависит от веса и состояния животного</h2>
          <p>Ниже — ориентировочные тарифы на усыпление и кремацию. Точную стоимость назовёт врач после короткого разговора по телефону.</p>
        </div>

        {/* Price Table with horizontal scroll on mobile */}
        <div className="price-table-wrapper">
          <table
            className="w-full min-w-[640px]"
            style={{
              borderCollapse: 'separate',
              borderSpacing: 0,
              background: 'var(--paper)',
            }}
          >
            <thead>
              <tr>
                <th
                  className="sticky left-0 z-10 text-left p-4 font-serif text-[15px] font-semibold"
                  style={{
                    background: 'var(--sage-tint)',
                    color: 'var(--sage-deep)',
                    borderBottom: '1px solid var(--line)',
                    fontFamily: "'Fraunces', serif",
                  }}
                >
                  Вес животного
                </th>
                <th
                  className="text-left p-4 font-serif text-[15px] font-semibold"
                  style={{
                    background: 'var(--sage-tint)',
                    color: 'var(--sage-deep)',
                    borderBottom: '1px solid var(--line)',
                    fontFamily: "'Fraunces', serif",
                  }}
                >
                  Усыпление
                </th>
                <th
                  className="text-left p-4 font-serif text-[15px] font-semibold"
                  style={{
                    background: 'var(--sage-tint)',
                    color: 'var(--sage-deep)',
                    borderBottom: '1px solid var(--line)',
                    fontFamily: "'Fraunces', serif",
                  }}
                >
                  Индивидуальная кремация
                </th>
                <th
                  className="text-left p-4 font-serif text-[15px] font-semibold"
                  style={{
                    background: 'var(--sage-tint)',
                    color: 'var(--sage-deep)',
                    borderBottom: '1px solid var(--line)',
                    fontFamily: "'Fraunces', serif",
                  }}
                >
                  Общая кремация
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, i) => (
                <tr
                  key={i}
                  className="transition-colors duration-200 hover:bg-[#FBF7EE]"
                >
                  <td
                    className="sticky left-0 z-10 p-4 text-sm"
                    style={{
                      background: 'var(--paper)',
                      color: 'var(--ink)',
                      borderBottom: i < pricingData.length - 1 ? '1px solid var(--line)' : 'none',
                    }}
                  >
                    {row.weight}
                  </td>
                  <td
                    className="p-4 text-sm font-bold"
                    style={{
                      color: 'var(--gold-deep)',
                      borderBottom: i < pricingData.length - 1 ? '1px solid var(--line)' : 'none',
                    }}
                  >
                    {row.euthanasia}
                  </td>
                  <td
                    className="p-4 text-sm font-bold"
                    style={{
                      color: 'var(--gold-deep)',
                      borderBottom: i < pricingData.length - 1 ? '1px solid var(--line)' : 'none',
                    }}
                  >
                    {row.individual}
                  </td>
                  <td
                    className="p-4 text-sm font-bold"
                    style={{
                      color: 'var(--gold-deep)',
                      borderBottom: i < pricingData.length - 1 ? '1px solid var(--line)' : 'none',
                    }}
                  >
                    {row.common}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Price Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          <div
            className="p-4 rounded-[14px]"
            style={{ background: 'var(--paper)', border: '1px dashed var(--line)' }}
          >
            <b className="block mb-1.5 font-serif font-semibold text-[15px]" style={{ color: 'var(--sage-deep)', fontFamily: "'Fraunces', serif" }}>
              Цены на усыпление
            </b>
            <span className="text-[13.5px]" style={{ color: 'var(--ink-soft)' }}>
              Рассчитываются индивидуально, в зависимости от состояния животного
            </span>
          </div>
          <div
            className="p-4 rounded-[14px]"
            style={{ background: 'var(--paper)', border: '1px dashed var(--line)' }}
          >
            <b className="block mb-1.5 font-serif font-semibold text-[15px]" style={{ color: 'var(--sage-deep)', fontFamily: "'Fraunces', serif" }}>
              Урна включена
            </b>
            <span className="text-[13.5px]" style={{ color: 'var(--ink-soft)' }}>
              Стоимость урны уже входит в цену индивидуальной кремации
            </span>
          </div>
          <div
            className="p-4 rounded-[14px]"
            style={{ background: 'var(--paper)', border: '1px dashed var(--line)' }}
          >
            <b className="block mb-1.5 font-serif font-semibold text-[15px]" style={{ color: 'var(--sage-deep)', fontFamily: "'Fraunces', serif" }}>
              Животные свыше 50 кг
            </b>
            <span className="text-[13.5px]" style={{ color: 'var(--ink-soft)' }}>
              Стоимость рассчитывается отдельно, уточняйте по телефону
            </span>
          </div>
        </div>

        {/* Callout Fee */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-7 rounded-[18px] p-6 md:p-7"
          style={{ background: 'var(--sage-deep)', color: '#EFEADC' }}
        >
          <div>
            <h4
              className="text-[19px] mb-1.5"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: '#fff' }}
            >
              Стоимость выезда ветеринара
            </h4>
            <p className="text-[14.5px] m-0" style={{ color: '#C9D0C2' }}>
              С 9:00 до 21:00 — 500 ₽ · с 21:00 до 9:00 — 1000 ₽ (в пределах города). Выезд в Ленинградскую область — индивидуально.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0"
            style={{ background: 'var(--gold)', color: '#2E2312' }}
          >
            Вызвать ветеринара
          </button>
        </div>
      </div>
    </section>
  );
}
