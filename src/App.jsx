import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Section = ({ children, className = "" }) => (
  <section className={`min-h-screen w-full snap-start flex flex-col justify-center relative overflow-hidden py-16 lg:py-0 ${className}`}>
    {children}
  </section>
);

function App() {
  return (
    <div className="h-screen w-full bg-white font-sans text-slate-900 selection:bg-ajp-200 selection:text-ajp-900 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />

      <Section><Hero /></Section>
      <Section className="bg-white"><Process /></Section>
      <Section className="bg-white"><Services /></Section>
      <Section className="bg-slate-50"><Testimonials /></Section>
      <Section className="bg-slate-50"><FAQ /></Section>
      <Section className="bg-slate-900"><CTA /></Section>

      <section className="snap-start">
        <Footer />
      </section>

      <FloatingWhatsApp />
    </div>
  );
}
export default App;
