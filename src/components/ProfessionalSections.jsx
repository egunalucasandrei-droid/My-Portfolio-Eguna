const services = [
  {
    title: 'Full-Stack Web Development',
    icon: 'code',
    description: 'Building responsive, functional web applications with modern frontend and backend technologies.',
  },
  {
    title: 'API & Database Integration',
    icon: 'database',
    description: 'Connecting applications with APIs, databases, and authentication services to support reliable functionality.',
  },
  {
    title: 'Short-Form Video Editing',
    icon: 'video',
    description: 'Creating engaging short-form videos, promotional content, and attention-grabbing hooks for social media.',
  },
  {
    title: 'AI Integration & Automation',
    icon: 'workflow',
    description: 'Integrating AI-powered services into applications and creative workflows to improve functionality and productivity.',
  },
];

const featuredWork = [
  {
    company: 'NOLTA Court Booking Website',
    icon: 'code',
    description: 'Developed and released a full-stack court booking platform focused on simplifying sports facility scheduling, court availability, and online reservations.',
  },
  {
    company: 'New Beginnings Creator Network',
    icon: 'video',
    description: 'Produced short-form promotional videos for hotels and resorts, researched destination highlights, created attention-grabbing hooks, and used AI-assisted editing tools to support content production.',
  },
];

const iconPaths = {
  code: 'm8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 18',
  database: 'M20 6c0 2-4 3-8 3S4 8 4 6s4-3 8-3 8 1 8 3Zm0 0v12c0 2-4 3-8 3s-8-1-8-3V6m0 6c0 2 4 3 8 3s8-1 8-3',
  video: 'M3 7h18v14H3zM3 7l3-5h15v5M9 2l-3 5m9-5-3 5m-2 4 6 3-6 3z',
  workflow: 'M3 3h6v6H3zm12 12h6v6h-6zM6 9v6a3 3 0 0 0 3 3h6m3-9V3m-3 3h6',
};

function CapabilityIcon({ name }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 opacity-80"><path d={iconPaths[name]} /></svg>;
}

function SectionCard({ id, title, theme, children }) {
  return (
    <section aria-labelledby={id} className={`min-w-0 rounded-xl border p-5 md:p-6 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
      <h2 id={id} className="mb-4 text-base font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default function ProfessionalSections({ theme, experience, noltaProject }) {
  // Reuse employment details so featured dates stay consistent with the timeline.
  const workEntries = featuredWork.flatMap(work => {
    const role = experience.find(entry => entry.company === work.company);
    return role ? [{ ...role, ...work, project: work.company === noltaProject?.title ? noltaProject : undefined }] : [];
  });

  return (
    <>
      <SectionCard id="what-i-do-heading" title="What I Do" theme={theme}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map(service => (
            <article key={service.title} className={`min-w-0 rounded-lg border p-3 transition-colors ${theme === 'dark' ? 'border-zinc-800 hover:border-zinc-600' : 'border-zinc-200 hover:border-zinc-400'}`}>
              <CapabilityIcon name={service.icon} />
              <h3 className="mt-2 text-[0.8rem] font-semibold leading-snug tracking-tight">{service.title}</h3>
              <p className="mt-1.5 text-[0.7rem] leading-relaxed opacity-85">{service.description}</p>
            </article>
          ))}
        </div>
      </SectionCard>

      <SectionCard id="featured-work-heading" title="Featured Work" theme={theme}>
        <div className={`divide-y ${theme === 'dark' ? 'divide-zinc-800' : 'divide-zinc-200'}`}>
          {workEntries.map(work => (
            <article key={work.company} className="flex min-w-0 items-start gap-3 py-4 first:pt-0 last:pb-0">
              <div className="pt-0.5"><CapabilityIcon name={work.icon} /></div>
              <div className="min-w-0">
                <h3 className="text-[0.8rem] font-semibold leading-snug tracking-tight">{work.project?.link ? <a href={work.project.link} target="_blank" rel="noopener noreferrer" aria-label={`Live Website: ${work.company} (opens in a new tab)`} className="underline-offset-4 hover:underline">{work.company}</a> : work.company}</h3>
                <p className="mt-1 text-[0.7rem] font-medium">{work.title}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-[0.6rem] font-mono">{work.period}</span>
                  {work.project?.status && <span className={`rounded border px-1.5 py-0.5 text-[0.6rem] font-medium ${theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300'}`}>{work.project.status}</span>}
                </div>
                <p className="mt-2 text-[0.65rem] leading-relaxed opacity-75">{work.location}</p>
                <p className="mt-2 text-[0.7rem] leading-relaxed">{work.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionCard>
    </>
  );
}
