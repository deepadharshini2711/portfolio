import Icon from './Icons';
import SectionTitle from './SectionTitle';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <SectionTitle index="03" kicker="Things I've built" title="Featured" highlight="Projects" />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card reveal" key={p.title} style={{ '--d': `${i * 120}ms` }}>
            <div className="project-inner">
              <div className="project-top">
                <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="project-year">{p.year}</span>
              </div>
              <span className="project-tag">
                <Icon name={p.tag.toLowerCase().includes('patent') ? 'award' : 'sparkles'} size={14} /> {p.tag}
              </span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips">
                {p.tech.map((t) => (
                  <span className="chip small" key={t}>{t}</span>
                ))}
              </div>
              {p.link && (
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                  View Project <Icon name="external" size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
