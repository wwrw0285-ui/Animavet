import Logo from '../components/Logo';
import { footerLinks, siteData } from '../data/content';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--sage-deep)', color: '#CDD4C4', padding: '60px 0 28px' }}>
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 pb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
        >
          {/* Column 1: Logo + Description */}
          <div>
            <Logo light />
            <p className="text-sm mt-3.5 max-w-[280px]" style={{ color: '#9FAA92' }}>
              Гуманное усыпление и кремация животных в Санкт-Петербурге и Ленинградской области. Работаем круглосуточно.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4
              className="text-[15.5px] mb-4"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: '#F1EEE3' }}
            >
              Разделы
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="transition-colors duration-200 hover:text-white"
                  style={{ color: '#B9C2AA' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h4
              className="text-[15.5px] mb-4"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: '#F1EEE3' }}
            >
              Контакты
            </h4>
            <div className="flex flex-col gap-2.5 text-[14.5px]" style={{ color: '#D6DBCB' }}>
              <a href={siteData.phoneLink} className="hover:text-white transition-colors duration-200">
                {siteData.phone}
              </a>
              <a href={`mailto:${siteData.email}`} className="hover:text-white transition-colors duration-200">
                {siteData.email}
              </a>
              <span>Санкт-Петербург и Ленинградская область</span>
              <span>Круглосуточно, без выходных</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6"
        >
          <span className="text-[12.5px]" style={{ color: '#8B9680' }}>
            &copy; 2026 AnimaVet. Все права защищены.
          </span>
          <div className="flex gap-4 text-[12.5px]" style={{ color: '#8B9680' }}>
            <a href="#" className="hover:text-white transition-colors duration-200">Пользовательское соглашение</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
