import { useState } from 'react';
import { sendMessage } from '../api';
import Icon from './Icons';
import SectionTitle from './SectionTitle';

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });
    try {
      const res = await sendMessage(form);
      setStatus({ type: 'success', text: res.message });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const items = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: 'pin', label: 'Location', value: profile.location },
  ];

  return (
    <section id="contact" className="section">
      <SectionTitle index="06" kicker="Say hello" title="Get In" highlight="Touch" />
      <div className="contact-wrap reveal">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>
            I'm open to Java Trainer, Technical Trainer and Full Stack Developer roles. Have a question or an
            opportunity? My inbox is always open.
          </p>
          {items.map((i) => {
            const Tag = i.href ? 'a' : 'div';
            return (
              <Tag className="info-tile" key={i.label} href={i.href}>
                <span className="skill-icon"><Icon name={i.icon} size={18} /></span>
                <div>
                  <small>{i.label}</small>
                  <span>{i.value}</span>
                </div>
              </Tag>
            );
          })}
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="field">
            <input id="name" name="name" placeholder=" " value={form.name} onChange={onChange} required />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="field">
            <input id="email" name="email" type="email" placeholder=" " value={form.email} onChange={onChange} required />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="field">
            <textarea id="message" name="message" rows="5" placeholder=" " value={form.message} onChange={onChange} required />
            <label htmlFor="message">Your Message</label>
          </div>
          <button className="btn primary full" type="submit" disabled={loading}>
            {loading ? 'Sending...' : <>Send Message <Icon name="send" size={18} /></>}
          </button>
          {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
        </form>
      </div>
    </section>
  );
}
