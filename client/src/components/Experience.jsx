import Icon from './Icons';
import SectionTitle from './SectionTitle';

function Timeline({ icon, title, items }) {
  return (
    <div className="reveal">
      <h3 className="col-title">
        <span className="skill-icon"><Icon name={icon} size={18} /></span> {title}
      </h3>
      <div className="timeline">
        {items.map((it) => (
          <div className="timeline-item" key={it.heading}>
            <span className="timeline-dot" />
            <div className="card timeline-card">
              {it.meta && <span className="timeline-meta">{it.meta}</span>}
              <h4>{it.heading}</h4>
              <span className="timeline-sub">{it.sub}</span>
              {it.body && <p>{it.body}</p>}
              {it.score && <span className="score">{it.score}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience({ experience, education }) {
  return (
    <section id="experience" className="section">
      <SectionTitle index="04" kicker="My journey" title="Experience &" highlight="Education" />
      <div className="two-col">
        <Timeline
          icon="briefcase"
          title="Internships"
          items={experience.map((e) => ({ heading: e.role, sub: e.company, body: e.description, meta: 'Internship' }))}
        />
        <Timeline
          icon="graduation"
          title="Education"
          items={education.map((e) => ({ heading: e.degree, sub: e.institution, meta: e.period, score: e.score }))}
        />
      </div>
    </section>
  );
}
