import { useModal } from './hooks/useModal';
import Header from './components/Header';
import RequestModal from './components/RequestModal';
import HeroSection from './sections/HeroSection';
import MobileContactCard from './sections/MobileContactCard';
import AboutSection from './sections/AboutSection';
import PricingSection from './sections/PricingSection';
import ProcessSection from './sections/ProcessSection';
import CremationSection from './sections/CremationSection';
import ReviewsSection from './sections/ReviewsSection';
import FAQSection from './sections/FAQSection';
import Footer from './sections/Footer';

export default function App() {
  const { isOpen, formState, open, close, setSuccess, setError, reset } = useModal();

  return (
    <div>
      <Header onOpenModal={open} />
      <main>
        <HeroSection onOpenModal={open} />
        <MobileContactCard onOpenModal={open} />
        <AboutSection onOpenModal={open} />
        <PricingSection onOpenModal={open} />
        <ProcessSection />
        <CremationSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
      <RequestModal
        isOpen={isOpen}
        formState={formState}
        onClose={close}
        onSuccess={setSuccess}
        onError={setError}
        onReset={reset}
      />
    </div>
  );
}
