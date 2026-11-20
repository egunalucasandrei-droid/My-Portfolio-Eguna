import { useState } from 'react';
import { gear, gearCategories, featuredGear } from '../gear';

const paths = {
  desktop: 'M5 3h14v18H5zM8 7h8M8 11h8M9 17h.01',
  laptop: 'M4 4h16v12H4zM2 20h20l-2-4H4l-2 4Z',
  keyboard: 'M2 6h20v12H2zM5 10h.01M8 10h.01M11 10h.01M14 10h.01M17 10h2M5 14h.01M8 14h8m3 0h.01',
  mouse: 'M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0V9Zm6-6v6M6 10h12',
  iem: 'M8 4a4 4 0 1 0 0 8h1V7H8m8-3a4 4 0 1 1 0 8h-1V7h1M9 12v4a3 3 0 0 0 6 0v-4m-3 7v3',
  headset: 'M4 14v-3a8 8 0 0 1 16 0v3M4 12H2v7h4v-7H4Zm16 0h2v7h-4v-7h2Zm0 7c0 2-3 3-6 3h-2',
  microphone: 'M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0V5Zm-3 6v1a6 6 0 0 0 12 0v-1m-6 7v4m-4 0h8',
  phone: 'M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm3 3h4m-2 14h.01',
};

function GearImage({ item, theme, compact = false }) {
  const [failed, setFailed] = useState(false);
  return <div className={`gear-image relative flex shrink-0 items-center justify-center overflow-hidden ${compact ? 'h-12 w-12 rounded-md' : 'aspect-[16/10] w-full rounded-t-lg'} ${theme === 'dark' ? 'bg-zinc-900 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
    {item.image && !failed ? <img src={item.image} alt={item.imageAlt || item.name} width="640" height="400" loading="lazy" decoding="async" className="h-full w-full object-contain p-3" onError={() => setFailed(true)} /> : <div role="img" aria-label={`${item.name}: photo pending verification`} className="flex flex-col items-center gap-3 p-2">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={compact ? 'h-6 w-6' : 'h-14 w-14'}><path d={paths[item.icon]} /></svg>
      {!compact && <span className="text-[0.65rem]">Photo pending</span>}
    </div>}
  </div>;
}

export function GearPreview({ theme, onViewAll }) {
  return <section aria-labelledby="gear-preview-heading" className={`rounded-xl border p-5 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 id="gear-preview-heading" className="text-[0.9rem] font-bold tracking-tight">Gear &amp; Setup</h2>
      <button onClick={onViewAll} className="inline-flex min-h-9 shrink-0 items-center gap-1 text-[0.65rem] font-semibold transition-opacity hover:opacity-75">View All Gear <span aria-hidden="true">→</span></button>
    </div>
    <ul className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
      {featuredGear.map(item => <li key={item.id} className={`gear-preview-item flex min-w-0 items-center gap-2 rounded-lg border p-2 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
        <GearImage item={item} theme={theme} compact />
        <div className="min-w-0"><h3 className="text-[0.7rem] font-semibold leading-snug">{item.name}</h3><p className="mt-1 text-[0.6rem] opacity-65">{item.category}</p></div>
      </li>)}
    </ul>
  </section>;
}

export function GearPage({ theme }) {
  return <div className="space-y-8">
    {gearCategories.map(category => {
      const items = gear.filter(item => item.category === category);
      const single = items.length === 1;
      return <section key={category} aria-label={category}>
        <h2 className="mb-4 text-base font-semibold tracking-tight">{category}</h2>
        <div className={`grid grid-cols-1 gap-4 ${single ? '' : items.length === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}>
          {items.map((item, index) => <article key={item.id} data-gear={item.id} className={`gear-card flex min-w-0 overflow-hidden rounded-lg border ${single ? 'flex-col sm:flex-row' : 'flex-col'} ${items.length === 3 && index === 2 ? 'sm:col-span-2 sm:flex-row lg:col-span-1 lg:flex-col' : ''} ${theme === 'dark' ? 'border-zinc-800 bg-zinc-950 hover:border-zinc-600' : 'border-zinc-200 bg-white hover:border-zinc-400'}`}>
            <div className={single ? 'sm:w-1/3' : items.length === 3 && index === 2 ? 'sm:w-1/2 lg:w-auto' : ''}><GearImage item={item} theme={theme} /></div>
            <div className="flex grow flex-col p-5">
              <h3 className="text-sm font-semibold leading-snug tracking-tight">{item.name}</h3>
              {item.specs && <ul aria-label={`${item.name} specifications`} className="mt-3 flex flex-wrap gap-1.5">{item.specs.map(spec => <li key={spec} className={`rounded border px-2 py-1 text-[0.65rem] ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-zinc-50'}`}>{spec}</li>)}</ul>}
              <p className="mt-3 text-xs leading-relaxed opacity-80">{item.description}</p>
            </div>
          </article>)}
        </div>
      </section>;
    })}
  </div>;
}
