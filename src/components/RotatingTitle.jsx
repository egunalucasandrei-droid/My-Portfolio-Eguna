export default function RotatingTitle() {
  return <span className="rotating-title" aria-label="Full-Stack Developer, Video Editor, AI-Assisted Content Creator">
    {['Full-Stack Developer', 'Video Editor', 'AI-Assisted Content Creator'].map((title, index) => <span key={title} aria-hidden="true" style={{ '--title-delay': `${index * 4}s` }}>{title}</span>)}
  </span>;
}
