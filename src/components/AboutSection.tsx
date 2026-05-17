import { aboutSection } from "@/data/about";

function AboutTitle({ id, label }: { id: string; label: string }) {
  return (
    <h2 id={id} className="about-title" aria-label={label}>
      <svg className="about-title-svg" viewBox="0 0 1030 230" aria-hidden="true" focusable="false">
        <text x="20" y="210" textLength="1000" lengthAdjust="spacingAndGlyphs">
          {label}
        </text>
      </svg>
    </h2>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="about-cover" aria-labelledby="about-title">
      <div className="about-heading-group">
        <AboutTitle id="about-title" label={aboutSection.title} />
        <span className="about-mobile-brand about-mobile-brand-tedx" aria-hidden="true">
          {aboutSection.tedxLabel}
        </span>

        <div className="about-brand-row" aria-hidden="true">
          <span className="about-brand about-brand-ted">{aboutSection.tedLabel}</span>
          <span className="about-brand about-brand-connector">{aboutSection.connectorLabel}</span>
          <span className="about-brand about-brand-tedx">{aboutSection.tedxLabel}</span>
        </div>
      </div>

      <div className="about-copy-grid" aria-label="About TED and TEDx">
        {aboutSection.copyBlocks.map((block) => (
          <article key={block.id} className={`about-copy-block about-copy-${block.id}`}>
            {block.id === "ted" ? (
              <span className="about-mobile-divider" aria-hidden="true">
                {aboutSection.connectorLabel}
              </span>
            ) : null}
            <h3 className="sr-only">{block.label}</h3>
            {block.id === "ted" ? (
              <span className="about-mobile-brand about-mobile-brand-ted" aria-hidden="true">
                {block.label}
              </span>
            ) : null}
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
