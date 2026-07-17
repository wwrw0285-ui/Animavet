import { useState, useCallback, useEffect, useRef } from 'react';
import { siteData } from '../data/content';

interface RequestModalProps {
  isOpen: boolean;
  formState: 'form' | 'success' | 'error';
  onClose: () => void;
  onSuccess: () => void;
  onError: () => void;
  onReset: () => void;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').replace(/^8/, '7');
  if (!digits) return '';
  if (digits.length === 1) return '+7';
  let result = '+7';
  if (digits.length > 1) result += ' (' + digits.slice(1, 4);
  if (digits.length >= 4) result += ')';
  if (digits.length > 4) result += ' ' + digits.slice(4, 7);
  if (digits.length > 7) result += '-' + digits.slice(7, 9);
  if (digits.length > 9) result += '-' + digits.slice(9, 11);
  return result;
}

function getRawPhone(formatted: string): string {
  return formatted.replace(/\D/g, '');
}

export default function RequestModal({ isOpen, formState, onClose, onSuccess, onError, onReset }: RequestModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [animal, setAnimal] = useState('');
  const [comment, setComment] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const resetForm = useCallback(() => {
    setName('');
    setPhone('');
    setAnimal('');
    setComment('');
    setHoneypot('');
    setPhoneError('');
    onReset();
  }, [onReset]);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(resetForm, 300);
  }, [onClose, resetForm]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    const rawPhone = getRawPhone(phone);

    if (rawPhone.length < 10) {
      setPhoneError("Введите корректный номер телефона");
      return;
    }

    setPhoneError("");
    setSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("access_key", "51e32a3a-fcc4-487a-91c9-8369e2d79940");
      formData.append("subject", "Новая заявка с сайта AnimaVet");
      formData.append("from_name", "AnimaVet");
      formData.append("email", "noreply@animavet.site");

      formData.append("name", name);
      formData.append("phone", rawPhone);
      formData.append("animal", animal);
      formData.append("message", comment);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        setName("");
        setPhone("");
        setAnimal("");
        setComment("");
        setHoneypot("");
        setPhoneError("");

        onSuccess();
      } else {
        console.error(data);
        onError();
      }
    } catch (error) {
      console.error(error);
      onError();
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div ref={overlayRef} className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-[var(--bg-soft)]"
          aria-label="Закрыть"
          style={{ position: 'absolute', right: '16px', top: '16px' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 3l12 12M15 3L3 15" stroke="var(--ink-faint)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Form State */}
        {formState === 'form' && (
          <>
            <h3
              className="text-xl mb-1"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: 'var(--sage-deep)' }}
            >
              Оставить заявку
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--ink-faint)' }}>
              Специалист свяжется с вами после обработки заявки.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Honeypot - hidden */}
              <div className="hidden">
                <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="form-group">
                <label className="form-label">Имя</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Телефон *</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    setPhone(formatted);
                    if (formatted) setPhoneError('');
                  }}
                  required
                />
                {phoneError && <p className="text-xs mt-1.5" style={{ color: '#c44' }}>{phoneError}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Вид животного</label>
                <select
                  className="form-input"
                  value={animal}
                  onChange={(e) => setAnimal(e.target.value)}
                  style={{ appearance: 'auto' }}
                >
                  <option value="">Выберите вид</option>
                  <option value="Кошка">Кошка</option>
                  <option value="Собака">Собака</option>
                  <option value="Другое">Другое</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Комментарий</label>
                <textarea
                  className="form-input"
                  placeholder="Дополнительная информация"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'var(--sage)',
                  color: '#F8F5EC',
                  boxShadow: '0 14px 30px -14px rgba(41,52,42,0.55)',
                }}
              >
                {submitting ? 'Отправка...' : 'Оставить заявку'}
              </button>

              <p className="text-xs text-center mt-4" style={{ color: 'var(--ink-faint)' }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </>
        )}

        {/* Success State */}
        {formState === 'success' && (
          <div className="text-center py-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: 'var(--sage-tint)' }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l5 5 11-11" stroke="var(--sage)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="text-[22px] mb-3"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: 'var(--sage-deep)' }}
            >
              Заявка принята
            </h3>
            <p className="text-[15px] mb-8" style={{ color: 'var(--ink-soft)' }}>
              Мы получили вашу заявку.<br />
              Специалист свяжется с вами после её обработки.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--sage)',
                color: '#F8F5EC',
                boxShadow: '0 14px 30px -14px rgba(41,52,42,0.55)',
              }}
            >
              Закрыть
            </button>
          </div>
        )}

        {/* Error State */}
        {formState === 'error' && (
          <div className="text-center py-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: '#FDE8E8' }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 8v7M14 19h.01" stroke="#c44" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3
              className="text-[22px] mb-3"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: 'var(--sage-deep)' }}
            >
              Ошибка отправки
            </h3>
            <p className="text-[15px] mb-3" style={{ color: 'var(--ink-soft)' }}>
              Не удалось отправить заявку.
            </p>
            <p className="text-sm mb-8" style={{ color: 'var(--ink-faint)' }}>
              Пожалуйста, позвоните напрямую:<br />
              <a href={siteData.phoneLink} className="font-semibold" style={{ color: 'var(--sage-deep)' }}>
                {siteData.phone}
              </a>
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => onReset()}
                className="px-6 py-3 rounded-full font-bold text-[15px] border transition-all duration-200 hover:bg-[var(--paper)]"
                style={{ color: 'var(--sage-deep)', borderColor: 'var(--line)' }}
              >
                Попробовать снова
              </button>
              <button
                onClick={handleClose}
                className="px-6 py-3 rounded-full font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--sage)',
                  color: '#F8F5EC',
                  boxShadow: '0 14px 30px -14px rgba(41,52,42,0.55)',
                }}
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
