import { useState } from 'react';
import ProjectCard from './ProjectCard';

const categories = ['All Videos', 'Short-Form Videos', 'Hotel & Resort Promotions', 'AI-Assisted Video Editing', 'Social Media Content', 'Film & Vlogs'];
const featuredTitles = ['Short-Form Video Edits Folder', 'eBay-to-Amazon Business Story', 'Hotel & Resort Promotions', 'AI-Assisted Video Editing'];

export default function VideoPortfolio({ projects, theme, compact = false }) {
  const [category, setCategory] = useState('All Videos');
  const videos = projects.filter(project => project.category === 'video');
  const visibleVideos = compact
    ? featuredTitles.map(title => videos.find(project => project.title === title)).filter(Boolean)
    : videos.filter(project => category === 'All Videos' || project.videoCategories?.includes(category));

  return (
    <div>
      {!compact && (
        <div aria-label="Video categories" className="mb-6 flex flex-wrap gap-2">
          {categories.map(label => <button key={label} type="button" aria-pressed={category === label} onClick={() => setCategory(label)} className={`min-h-9 rounded-md border px-3 py-2 text-xs font-medium transition-colors ${category === label ? theme === 'dark' ? 'border-white bg-white text-black' : 'border-black bg-black text-white' : theme === 'dark' ? 'border-zinc-800 bg-zinc-950 text-white hover:border-zinc-500' : 'border-zinc-200 bg-white text-black hover:border-zinc-400'}`}>{label}</button>)}
        </div>
      )}
      {visibleVideos.length ? (
        <div className={`grid auto-rows-fr grid-cols-1 gap-4 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {visibleVideos.map(project => <ProjectCard key={project.title} project={project} theme={theme} compact={compact} headingLevel={compact ? 'h3' : 'h2'} />)}
        </div>
      ) : (
        <div role="status" className={`rounded-lg border p-6 text-sm leading-relaxed ${theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'}`}>
          <p className="font-semibold">No videos shared in this category yet.</p>
          <p className="mt-2 opacity-75">Browse All Videos to see my available editing work.</p>
        </div>
      )}
    </div>
  );
}
