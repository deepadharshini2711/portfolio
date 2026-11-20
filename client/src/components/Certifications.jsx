import Icon from './Icons';
import SectionTitle from './SectionTitle';

export default function Certifications({ certifications, achievements }) {
  return (
    <section id="certifications" className="section">
      <SectionTitle index="05" kicker="Recognition" title="Certifications &" highlight="Achievements" />
      <div className="achievements">
        {achievements.map((a, i) => (
          <div className="achievement reveal" key={a} style={{ '--d': `${i * 100}ms` }}>
            <span className="trophy"><Icon name="trophy" size={26} /></span>
            <p>{a}</p>
          </div>
        ))}
      </div>
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <div className="card cert-card reveal" key={c.name} style={{ '--d': `${(i % 3) * 80}ms` }}>
            <span className="cert-icon"><Icon name="award" size={20} /></span>
            <div>
              <h4>{c.name}</h4>
              <span className="muted">{c.issuer}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
