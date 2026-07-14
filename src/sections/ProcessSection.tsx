import { processSteps } from '../data/content';

export default function ProcessSection() {
  return (
    <section id="process" style={{ padding: '78px 0' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Как проходит процедура</span>
          <h2>Спокойно, поэтапно, без спешки</h2>
          <p>Каждый визит строится так, чтобы у вас и у питомца было время попрощаться — без ощущения конвейера.</p>
        </div>

        <div className="timeline">
          {processSteps.map((step) => (
            <div key={step.n} className="tl-step" data-n={step.n}>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: 'var(--sage-deep)' }}>
                {step.title}
              </h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
