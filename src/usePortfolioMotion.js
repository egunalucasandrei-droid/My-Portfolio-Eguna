import { useLayoutEffect } from 'react';

export default function usePortfolioMotion(view, filter) {
  useLayoutEffect(() => {
    const main = document.querySelector('main');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!main || !Element.prototype.animate || !window.IntersectionObserver) return;
    const running = new Set();
    let disposed = false;
    const reduced = () => preference.matches && !(import.meta.env.DEV && document.documentElement.dataset.motionPreview === 'enabled');
    const animate = (element, frames, delay = 0, duration = 700) => {
      if (disposed || reduced() || !element) return;
      const animation = element.animate(frames, {
        duration, delay, easing: 'cubic-bezier(0.25, 0.65, 0.3, 1)', fill: 'backwards',
      });
      running.add(animation);
      animation.finished.then(() => running.delete(animation), () => running.delete(animation));
    };
    const reveal = (element, delay = 0) => animate(element, [
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ], delay);
    const hero = () => {
      main.querySelectorAll('[data-hero]').forEach(element => {
        const portrait = element.dataset.hero === 'portrait';
        animate(element, [
          { opacity: 0, transform: portrait ? 'scale(0.88)' : 'translateY(30px)' },
          { opacity: 1, transform: portrait ? 'scale(1)' : 'translateY(0)' },
        ], Number(element.dataset.delay || 0), 800);
      });
      if (view === 'home') reveal(main.querySelector('[data-about]'), 850);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const target = entry.target;
        if (target.hasAttribute('data-timeline-line')) {
          animate(target, [{ transform: 'scaleY(0)', opacity: 0 }, { transform: 'scaleY(1)', opacity: 1 }], 0, 1000);
        } else {
          const siblings = [...target.parentElement.children];
          const stagger = target.matches('.project-card, .tech-category, [data-timeline-entry]') ? Math.min(siblings.indexOf(target) * 100, 250) : 0;
          reveal(target, stagger);
          if (target.hasAttribute('data-timeline-entry')) {
            animate(target.querySelector('[data-timeline-marker]'), [{ opacity: 0, scale: '0.5' }, { opacity: 1, scale: '1' }], stagger + 100, 500);
          }
        }
      });
    }, { threshold: 0.04, rootMargin: '0px 0px -64px 0px' });
    const sections = new Set(main.querySelectorAll('[data-reveal], .project-card, .gear-card, .tech-category, [data-timeline-entry], [data-timeline-line]'));
    main.querySelectorAll('h2').forEach(heading => {
      const section = heading.closest('section, .rounded-xl');
      if (section && !section.hasAttribute('data-about')) sections.add(section);
    });
    sections.forEach(element => element.setAttribute('data-motion-target', ''));
    const observe = () => { if (!reduced()) sections.forEach(section => observer.observe(section)); };
    const stop = () => { running.forEach(animation => animation.cancel()); running.clear(); };
    const focus = event => {
      // Do not move a mouse target between pointer-down and pointer-up.
      if (!event.target.matches(':focus-visible')) return;
      running.forEach(animation => {
        if (animation.effect.target.contains(event.target)) animation.cancel();
      });
    };
    const change = () => { observer.disconnect(); stop(); observe(); };
    const replay = event => {
      observer.disconnect(); stop();
      if (event.detail === 'hero') { window.scrollTo({ top: 0, behavior: 'instant' }); hero(); }
      observe();
    };
    hero(); observe();
    if (view !== 'home') reveal(main.querySelector('h1')?.parentElement);
    preference.addEventListener('change', change);
    main.addEventListener('focusin', focus);
    if (import.meta.env.DEV) window.addEventListener('portfolio:replay-motion', replay);
    return () => {
      disposed = true; observer.disconnect(); stop();
      sections.forEach(element => element.removeAttribute('data-motion-target'));
      preference.removeEventListener('change', change);
      main.removeEventListener('focusin', focus);
      window.removeEventListener('portfolio:replay-motion', replay);
    };
  }, [view, filter]);
}
