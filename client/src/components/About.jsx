import Icon from './Icons';
import SectionTitle from './SectionTitle';

const statIcons = ['graduation', 'code', 'briefcase', 'award'];

export default function About({ profile }) {
  const edu = profile.education[0];
  const info = [
    { icon: 'user', label: 'Name', value: profile.name },
    { icon: 'pin', label: 'Location', value: profile.location },
    { icon: 'graduation', label: 'Studying', value: edu?.degree },
    { icon: 'mail', label: 'Email', value: profile.email },
  ];

  return (
    <section id="about" className="section">
      <SectionTitle index="01" kicker="Get to know me" title="About" highlight="Me" />
      <div className="about-grid">
        <div className="card about-card reveal">
          <p className="lead">{profile.summary}</p>
          <ul className="info-list">
            {info.map((i) => (
              <li key={i.label}>
                <span className="info-icon"><Icon name={i.icon} size={16} /></span>
                <div>
                  <small>{i.label}</small>
                  <span>{i.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="stats">
          {profile.stats.map((s, i) => (
            <div className="card stat reveal" key={s.label} style={{ '--d': `${i * 90}ms` }}>
              <span className="stat-icon"><Icon name={statIcons[i % statIcons.length]} size={22} /></span>
              <strong className="grad-text">{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
