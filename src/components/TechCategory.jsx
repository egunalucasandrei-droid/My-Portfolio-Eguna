const paths = {
  'Programming Languages': 'm8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 18',
  'Front-End Development': 'M3 4h18v13H3zM8 21h8m-4-4v4',
  'Back-End Development': 'M3 3h18v7H3zm0 11h18v7H3zM7 6h.01M7 17h.01',
  'Databases & Authentication': 'M20 6c0 2-4 3-8 3S4 8 4 6s4-3 8-3 8 1 8 3Zm0 0v12c0 2-4 3-8 3s-8-1-8-3V6m0 6c0 2 4 3 8 3s8-1 8-3',
  'API & Security': 'm8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 18',
  'Cybersecurity & Application Security': 'M12 3 4 6v6c0 4 4 7 8 9 4-2 8-5 8-9V6l-8-3Zm-4 9 3 3 5-6',
  'Development & Deployment': 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M9 8l6 4-6 4Z',
  'Testing & Developer Tools': 'M3 4h18v13H3zM8 21h8m-4-4v4',
  'Design & Video Editing': 'M4 4h16v16H4zM9 4v16m6-16v16M4 9h5m6 0h5M4 15h5m6 0h5',
  'AI Integration': 'M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8 2 2M6 18l2-2m8-8 2-2M9 9h6v6H9z',
};

export default function TechCategory({ section, theme, compact = false }) {
  const Heading = compact ? 'h3' : 'h2';
  return (
    <div className="min-w-0">
      <Heading className={`flex items-center gap-2 font-semibold tracking-tight ${compact ? 'mb-2 text-[0.65rem] leading-4 uppercase tracking-wider' : 'mb-3 text-base'}`}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0 opacity-70"><path d={paths[section.category]} /></svg>
        {section.label ?? section.category}
      </Heading>
      <ul className={`flex flex-wrap ${compact ? 'gap-1.5' : 'gap-2'}`}>
        {section.tools.map(tech => <li key={tech} title={section.toolLabels?.[tech] ? tech : undefined} className={`max-w-full rounded border font-medium transition-colors ${compact ? 'px-2 py-1 text-[0.6875rem] leading-4' : 'px-3 py-1.5 text-[0.8rem]'} ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900 text-white hover:border-zinc-600' : 'border-zinc-200 bg-zinc-50 text-black hover:border-zinc-400'}`}>{section.toolLabels?.[tech] ?? tech}</li>)}
      </ul>
    </div>
  );
}
