import { useState, useEffect } from 'react';
import Logo from './Logo';
import { navLinks, siteData } from '../data/content';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
        style={{
          background: 'rgba(246,243,236,0.86)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between py-4 gap-4 md:gap-6">
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Logo />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--sage-deep)]"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Block - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <span className="block text-[11.5px] font-semibold tracking-wide" style={{ color: 'var(--ink-faint)' }}>
                  Круглосуточно
                </span>
                <a
                  href={siteData.phoneLink}
                  className="font-serif text-[16.5px] font-semibold"
                  style={{ color: 'var(--sage-deep)', fontFamily: "'Fraunces', serif" }}
                >
                  {siteData.phone}
                </a>
              </div>
              <a
                href={siteData.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors duration-200 hover:border-[var(--sage)] hover:bg-[var(--paper)]"
                style={{ color: 'var(--sage-deep)', borderColor: 'var(--line)' }}
              >
                Telegram
              </a>
              <a
                href={siteData.max}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors duration-200 hover:border-[var(--sage)] hover:bg-[var(--paper)]"
                style={{ color: 'var(--sage-deep)', borderColor: 'var(--line)' }}
              >
                MAX
              </a>
              <button
                onClick={onOpenModal}
                className="text-sm font-bold px-5 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--sage)',
                  color: '#F8F5EC',
                  boxShadow: '0 14px 30px -14px rgba(41,52,42,0.55)',
                }}
              >
                Оставить заявку
              </button>
            </div>

            {/* Mobile Right */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href={siteData.phoneLink}
                className="flex items-center justify-center w-10 h-10 rounded-full"
                style={{ background: 'var(--sage)', color: '#fff' }}
              >
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <path d="M4 4c0 8 6 14 14 14l2-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-5-4 2z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center justify-center w-10 h-10"
                aria-label="Меню"
              >
                {menuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 4l14 14M18 4L4 18" stroke="#29342A" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3 6h16M3 11h16M3 16h16" stroke="#29342A" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile contacts bar */}
          <div className="flex md:hidden items-center gap-3 pb-3 -mt-1">
            <a
              href={siteData.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{ color: 'var(--sage-deep)', borderColor: 'var(--line)' }}
            >
              Telegram
            </a>
            <a
              href={siteData.max}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{ color: 'var(--sage-deep)', borderColor: 'var(--line)' }}
            >
              MAX
            </a>
            <button
              onClick={onOpenModal}
              className="ml-auto text-xs font-bold px-4 py-2 rounded-full"
              style={{
                background: 'var(--sage)',
                color: '#F8F5EC',
                boxShadow: '0 8px 20px -10px rgba(41,52,42,0.55)',
              }}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
            aria-label="Закрыть"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4l14 14M18 4L4 18" stroke="#29342A" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--line)' }}>
            <a href={siteData.phoneLink} className="block text-lg font-semibold mb-2" style={{ color: 'var(--sage-deep)', fontFamily: "'Fraunces', serif" }}>
              {siteData.phone}
            </a>
            <span className="text-sm" style={{ color: 'var(--ink-faint)' }}>Круглосуточно</span>
          </div>
        </div>
      )}
    </>
  );
}
