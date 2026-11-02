import { thumbnailFor } from '../media';

export default function ProjectCard({ project, theme, compact = false, headingLevel = 'h3' }) {
  const Heading = headingLevel;
  const action = project.actionLabel || (project.category === 'web' ? 'Live Demo' : project.category === 'uiux' ? 'View Design' : (project.linkText || 'Watch Video'));

  return (
    <article data-project={project.title} className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border transition-colors ${theme === 'dark' ? 'border-zinc-800 bg-zinc-950 hover:border-zinc-600' : 'border-zinc-200 bg-white hover:border-zinc-400'}`}>
      {project.img ? (
        <div className={`aspect-video overflow-hidden border-b ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-zinc-50'}`}>
          <img src={thumbnailFor(project.img)} alt={project.imageAlt || `${project.title} ${project.isVideo ? 'video thumbnail' : 'project screenshot'}`} width="640" height="360" loading="lazy" decoding="async" className={`h-full w-full object-center transition-transform duration-300 ${project.imageFit === 'contain' ? 'object-contain' : `${project.isVideo ? 'object-cover' : 'object-contain'} motion-safe:group-hover:scale-[1.025]`}`} />
        </div>
      ) : (
        <div className={`flex aspect-video flex-col justify-center gap-2 border-b p-4 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-zinc-50'}`}>
          <span className="text-[0.65rem] font-mono uppercase tracking-wider">{project.type}</span>
          <span className="text-lg font-semibold tracking-tight">{project.shortName || project.title}</span>
        </div>
      )}
      <div className={`flex grow flex-col ${compact ? 'p-3.5' : 'p-5'}`}>
        <Heading className={`${compact ? 'text-[0.8rem]' : 'text-base'} font-semibold leading-snug tracking-tight`}>{project.title}</Heading>
        {project.videoCategories && <p className="mt-1 text-[0.6rem] font-medium opacity-75">{project.videoCategories.join(' · ')}</p>}
        {project.role && <p className="mt-1 text-[0.65rem] font-medium opacity-75">{project.role}</p>}
        {project.status && project.link && <span className={`mt-2 self-start rounded border px-1.5 py-0.5 text-[0.6rem] font-medium ${theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300'}`}>{project.status}</span>}
        <p className={`mt-2 leading-relaxed ${compact ? 'text-[0.7rem] line-clamp-3' : 'text-[0.8rem]'}`}>{project.desc}</p>
        {!!project.tech?.length && (
          <ul aria-label={`${project.title} technologies`} className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map(tech => <li key={tech} className={`rounded border px-2 py-0.5 text-[0.6rem] font-medium ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-zinc-50'}`}>{tech}</li>)}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4 text-[0.7rem] font-semibold">
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${action}: ${project.title} (opens in a new tab)`} className="inline-flex min-h-9 items-center gap-1 underline-offset-4 hover:underline">{action}<svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12 12 4M4 4h8v8" /></svg></a>}
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub: ${project.title} (opens in a new tab)`} className="inline-flex min-h-9 items-center gap-1 underline-offset-4 hover:underline">GitHub<svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12 12 4M4 4h8v8" /></svg></a>}
          {!project.link && !project.github && <span className="inline-flex min-h-9 items-center text-[0.65rem] font-medium opacity-75">{project.status || 'No public link available'}</span>}
        </div>
      </div>
    </article>
  );
}
