const journeySteps = [
  {
    label: "Now",
    title: "BCom Accounting",
    detail: "York University · Core knowledge · Growth",
    timing: "Current",
  },
  {
    label: "Next",
    title: "Practical experience",
    detail: "Accounting · Finance · Business impact",
    timing: "In progress",
  },
  {
    label: "Goal",
    title: "CPA designation",
    detail: "Competency · Trust · Professional impact",
    timing: "Future",
  },
];

const milestones = [
  {
    period: "2022—2024",
    title: "Republic of Korea Navy",
    subtitle: "Military Linguist & Operations Specialist",
    copy: "Coordinated information under pressure, maintained precise documentation, and learned to communicate clearly across teams.",
  },
  {
    period: "2024",
    title: "A new chapter in Toronto",
    subtitle: "International student · New environment",
    copy: "Moved to Canada and continued my accounting education at York University, building confidence in a new academic and professional environment.",
  },
  {
    period: "Today",
    title: "BCom Accounting at York",
    subtitle: "Fourth year · Building depth",
    copy: "Deepening my foundation through accounting, finance, business law, strategy, and hands-on Excel work.",
  },
  {
    period: "Next",
    title: "Practical experience → CPA",
    subtitle: "From knowledge to contribution",
    copy: "Seeking opportunities where careful analysis, sound judgment, and service can create real business value.",
  },
];

const careerPillars = [
  {
    number: "01",
    title: "Pressure into precision",
    copy: "My Navy experience taught me to stay composed, protect the quality of information, and follow through when the stakes are real.",
  },
  {
    number: "02",
    title: "Complexity into clarity",
    copy: "Working in both Korean and English helps me bridge perspectives and communicate technical information with greater care.",
  },
  {
    number: "03",
    title: "Learning into impact",
    copy: "I approach accounting as more than reporting: it is a way to understand decisions, improve processes, and build trust.",
  },
];

const skillGroups = [
  {
    code: "ACCT",
    title: "Accounting foundation",
    skills: ["Financial accounting", "Managerial accounting", "Cost analysis", "Business law"],
  },
  {
    code: "DATA",
    title: "Analysis & tools",
    skills: ["Microsoft Excel", "Pivot tables", "Data cleaning", "Scenario analysis"],
  },
  {
    code: "BIZ",
    title: "Business perspective",
    skills: ["Corporate finance", "Business strategy", "Performance analysis", "Research"],
  },
  {
    code: "COMM",
    title: "Communication",
    skills: ["English", "Korean", "Written reporting", "Cross-team coordination"],
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Hyeonjun Park, home">
          <span className="brand-mark" aria-hidden="true">HP</span>
          <span>Hyeonjun Park</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#journey">Journey</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className="nav-launch" href="#contact" aria-label="Go to contact section">
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            <a href="#journey">Journey</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="plot-marks left-plot" aria-hidden="true">
            <span className="plot-axis"></span>
            <span className="plot-arc arc-one"></span>
            <span className="plot-arc arc-two"></span>
            <i className="plot-square"></i>
            <small>43.7731° N<br />79.3250° W</small>
          </div>

          <div className="hero-content">
            <p className="eyebrow">York University <span>•</span> BCom Accounting <span>•</span> Toronto</p>
            <h1 id="hero-title">Building my path to the CPA—and a career that moves people forward.</h1>
            <p className="hero-intro">
              I’m Hyeonjun, a fourth-year Accounting student documenting the lessons,
              projects, and milestones shaping my journey into accounting and finance.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#journey">
                Explore my journey <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#contact">Connect with me</a>
            </div>
          </div>
        </div>

        <div className="journey-lab" aria-label="CPA journey progress overview">
          <div className="lab-heading">
            <div>
              <p>CPA journey</p>
              <span>Progress dashboard</span>
            </div>
            <span className="lab-index">04</span>
          </div>

          <div className="progress-panel">
            <div className="progress-line" aria-hidden="true"></div>
            {journeySteps.map((step, index) => (
              <article className="progress-step" key={step.label}>
                <span className={`progress-node node-${index + 1}`} aria-hidden="true"></span>
                <div className="step-copy">
                  <p>{step.label}</p>
                  <h2>{step.title}</h2>
                  <span>{step.detail}</span>
                </div>
                <small>{step.timing}</small>
              </article>
            ))}
          </div>

          <aside className="focus-panel" aria-label="Current focus areas">
            <h2>Current focus</h2>
            <ul>
              <li><span>01</span> CPA pathway</li>
              <li><span>02</span> Applied experience</li>
              <li><span>03</span> Accounting + finance</li>
            </ul>
          </aside>

          <div className="lab-coordinate" aria-hidden="true">
            <span>N 43.7731</span>
            <span>W 79.3250</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Professional highlights">
        <article>
          <span className="proof-index">01</span>
          <div><small>Professional direction</small><strong>Aspiring CPA</strong></div>
          <span className="proof-plus" aria-hidden="true">+</span>
        </article>
        <article>
          <span className="proof-index">02</span>
          <div><small>Communication</small><strong>Bilingual: English + Korean</strong></div>
          <span className="proof-plus" aria-hidden="true">+</span>
        </article>
        <article>
          <span className="proof-index">03</span>
          <div><small>Foundation</small><strong>ROK Navy operations experience</strong></div>
          <span className="proof-plus" aria-hidden="true">+</span>
        </article>
        <a className="scroll-cue" href="#journey">
          <span className="mouse-shape" aria-hidden="true"><i></i></span>
          <span>Scroll to<br />explore</span>
          <b aria-hidden="true">↓</b>
        </a>
      </section>

      <section className="journey-section content-section" id="journey" aria-labelledby="journey-title">
        <div className="section-heading">
          <p>01 / The journey</p>
          <h2 id="journey-title">A foundation built on discipline, curiosity, and forward motion.</h2>
          <p className="section-lead">
            My path has crossed countries, disciplines, and high-pressure environments.
            Each chapter has strengthened the same habits: learn carefully, communicate clearly,
            and keep moving toward work that matters.
          </p>
        </div>

        <div className="journey-layout">
          <aside className="chapter-card">
            <span className="chapter-label">Current chapter</span>
            <strong>04</strong>
            <h3>Student → Professional</h3>
            <p>Fourth-year BCom Accounting student at York University, preparing for the transition from classroom knowledge to practical experience.</p>
            <div className="chapter-meta">
              <span>Toronto, Canada</span>
              <span>CPA direction</span>
            </div>
          </aside>

          <div className="timeline" aria-label="Career and education timeline">
            {milestones.map((milestone) => (
              <article className="timeline-item" key={milestone.period + milestone.title}>
                <div className="timeline-period"><span>{milestone.period}</span></div>
                <div className="timeline-copy">
                  <p>{milestone.subtitle}</p>
                  <h3>{milestone.title}</h3>
                  <span>{milestone.copy}</span>
                </div>
                <b aria-hidden="true">↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="experience-heading">
          <p>02 / Experience</p>
          <h2 id="experience-title">Experience beyond the balance sheet.</h2>
          <span>
            The strongest part of my foundation was built before any spreadsheet: in environments
            that required reliability, adaptability, and respect for the people depending on my work.
          </span>
        </div>

        <div className="pillar-grid">
          {careerPillars.map((pillar) => (
            <article key={pillar.number}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
              <i aria-hidden="true"></i>
            </article>
          ))}
        </div>

        <blockquote>
          <span aria-hidden="true">“</span>
          <p>I want to become the kind of professional people can trust with both the numbers and the decisions behind them.</p>
        </blockquote>
      </section>

      <section className="skills-section content-section" id="skills" aria-labelledby="skills-title">
        <div className="skills-heading-row">
          <div className="section-heading compact">
            <p>03 / Skills</p>
            <h2 id="skills-title">A toolkit built for modern accounting.</h2>
          </div>
          <p className="skills-intro">
            Technical foundations, practical tools, and a business mindset—developed through coursework,
            self-directed learning, and real operating experience.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article key={group.code}>
              <div className="skill-card-head">
                <span>{group.code}</span>
                <small>0{index + 1}</small>
              </div>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="current-track" aria-label="Current development priorities">
          <div>
            <p>Current development track</p>
            <h3>From strong fundamentals to practical contribution.</h3>
          </div>
          <ol>
            <li><span>01</span> Complete BCom</li>
            <li><span>02</span> Gain applied experience</li>
            <li><span>03</span> Progress toward CPA</li>
          </ol>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-grid" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <div className="contact-copy">
          <p>04 / Connect</p>
          <h2 id="contact-title">Let’s build the next chapter.</h2>
          <span>
            I’m open to conversations about accounting and finance opportunities—especially internal audit,
            advisory, banking, and analytical roles where trust and judgment matter.
          </span>
        </div>
        <div className="contact-card">
          <div className="availability-dot"><i></i> Open to conversations</div>
          <h3>Students, mentors, and professionals are always welcome.</h3>
          <p>Connect through the professional profile or résumé where you found this page. I’d be glad to exchange perspectives and learn from your experience.</p>
          <div className="contact-meta">
            <span><small>Based in</small>Toronto, Ontario</span>
            <span><small>Languages</small>English + Korean</span>
          </div>
          <div style={{ display: "grid", gap: "12px" }}>
            <a
              className="button button-primary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button"
              href="https://www.linkedin.com/in/hyeonjun-park-a50296322/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Hyeonjun Park's LinkedIn profile"
              style={{
                border: "1px solid var(--cobalt)",
                background: "var(--white)",
                boxShadow: "none",
                color: "var(--cobalt)",
              }}
            >
              LinkedIn profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="Hyeonjun Park, back to top">
          <span className="brand-mark" aria-hidden="true">HP</span>
          <span>Hyeonjun Park</span>
        </a>
        <p>Aspiring CPA · Accounting + Finance · Toronto</p>
        <small>Building the journey, one milestone at a time.</small>
      </footer>
    </main>
  );
}