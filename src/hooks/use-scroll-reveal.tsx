import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: false,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    // Hero section
    sr.reveal('.hero-content', { delay: 300 });
    sr.reveal('.hero-image', { delay: 100, origin: 'left' });
    
    // About section
    sr.reveal('.about-image', { delay: 100 });
    sr.reveal('.about-text', { delay: 200 });
    sr.reveal('.about-card', { interval: 200 });

    // Skills section
    sr.reveal('.skills-header', { delay: 100 });
    sr.reveal('.skill-card', { interval: 150 });

    // Projects section
    sr.reveal('.projects-header', { delay: 100 });
    sr.reveal('.project-card', { interval: 200 });

    // Experience section
    sr.reveal('.experience-header', { delay: 100 });
    sr.reveal('.experience-item', { interval: 200 });

    // Contact section
    sr.reveal('.contact-header', { delay: 100 });
    sr.reveal('.contact-info', {  delay: 200 });
    sr.reveal('.contact-form', { delay: 200 });

    return () => {
      sr.destroy();
    };
  }, []);
};
