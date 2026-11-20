import Icon from './Icons';
import SectionTitle from './SectionTitle';
import { getSkillIcon } from '../skillIcons';

const iconFor = (category) => {
  const c = category.toLowerCase();
  if (c.includes('java')) return 'coffee';
  if (c.includes('web')) return 'globe';
  if (c.includes('backend')) return 'server';
  if (c.includes('mern')) return 'layers';
  if (c.includes('database')) return 'database';
  if (c.includes('fundamental')) return 'cpu';
  if (c.includes('tool')) return 'tool';
  return 'code';
};

function SkillTile({ name }) {
  const { Icon: Logo, color } = getSkillIcon(name);
  return (
    <div className="skill-tile" style={color ? { '--brand': color } : undefined} title={name}>
      <span className="skill-logo"><Logo size={22} /></span>
      <span className="skill-name">{name}</span>
    </div>
  );
}

export default function Skills({ skills }) {
  const all = [...new Set(skills.flatMap((g) => g.items))];

  return (
    <section id="skills" className="section">
      <SectionTitle index="02" kicker="What I work with" title="Technical" highlight="Skills" />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...all, ...all].map((name, i) => {
            const { Icon: Logo, color } = getSkillIcon(name);
            return (
              <span className="marquee-item" key={i} style={color ? { '--brand': color } : undefined}>
                <Logo size={26} /> {name}
              </span>
            );
          })}
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <div className="card skill-card reveal" key={group.category} style={{ '--d': `${(i % 4) * 80}ms` }}>
            <div className="skill-head">
              <span className="skill-icon"><Icon name={iconFor(group.category)} size={20} /></span>
              <h3>{group.category}</h3>
            </div>
            <div className="skill-tiles">
              {group.items.map((item) => (
                <SkillTile key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
