import { useEffect, useState } from 'react';

export default function MotionDebug() {
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [outlines, setOutlines] = useState(false);
  const [cards, setCards] = useState(false);
  const [preview, setPreview] = useState(false);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('motion-debug-outlines', outlines);
    document.documentElement.classList.toggle('motion-debug-cards', cards);
    return () => document.documentElement.classList.remove('motion-debug-outlines', 'motion-debug-cards');
  }, [outlines, cards]);
  if (!new URLSearchParams(location.search).has('motionDebug')) return null;
  const replay = scope => window.dispatchEvent(new CustomEvent('portfolio:replay-motion', { detail: scope }));
  const togglePreview = () => {
    const enabled = !preview;
    setPreview(enabled);
    if (enabled) document.documentElement.dataset.motionPreview = 'enabled';
    else delete document.documentElement.dataset.motionPreview;
    replay('hero');
  };
  return <aside aria-label="Motion debug controls" className="motion-debug-panel">
    <details open>
      <summary>Motion preview · development only</summary>
      <p>Source: Vite development server<br />URL: {location.origin}<br />Workspace: {import.meta.env.PORTFOLIO_ROOT}<br />Reduced motion: {reduced ? 'ON' : 'OFF'}<br />Entrance effects: {reduced && !preview ? 'DISABLED by browser preference' : 'ENABLED'}</p>
      {reduced && <p>Your browser requests reduced motion. Enable Animation effects in Windows Accessibility → Visual effects, or explicitly enable this temporary local preview below.</p>}
      <button aria-pressed={preview} onClick={togglePreview}>{preview ? 'Use browser motion preference' : 'Enable motion for this local preview'}</button>
      <button onClick={() => replay('hero')}>Replay hero</button>
      <button onClick={() => replay('sections')}>Replay sections</button>
      <button aria-pressed={outlines} onClick={() => setOutlines(value => !value)}>Outline animated elements</button>
      <button aria-pressed={cards} onClick={() => setCards(value => !value)}>Preview card hover</button>
      <p>Replay sections, then scroll. The local preview option temporarily overrides reduced motion for testing. It resets on reload and is absent from production.</p>
    </details>
  </aside>;
}
