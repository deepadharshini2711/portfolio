export default function SectionTitle({ index, kicker, title, highlight }) {
  return (
    <div className="section-head">
      <span className="kicker">
        <b>{index}</b> {kicker}
      </span>
      <h2>
        {title} <span className="grad-text">{highlight}</span>
      </h2>
    </div>
  );
}
