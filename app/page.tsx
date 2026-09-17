const journeySteps = [
  {
    label: "Now",
    title: "BCom Accounting",
    detail: "York University · Co-op stream",
    timing: "Current",
  },
  {
    label: "Next",
    title: "Practical experience",
    detail: "Accounting and tax co-op",
    timing: "Next step",
  },
  {
    label: "Goal",
    title: "CPA designation",
    detail: "Intend to pursue after graduation",
    timing: "Future",
  },
];

const milestones = [
  {
    period: "2022—2024",
    title: "Republic of Korea Navy",
    subtitle: "Interpretation & operational briefing support",
    copy: "Maintained Situation Reports and helped prepare briefing materials for duty-officer review during naval operations.",
  },
  {
    period: "2025",
    title: "Customer service in Toronto",
    subtitle: "Paris Baguette · Opening team",
    copy: "Processed payments and helped Korean-speaking customers understand products, drawing on both languages in everyday service.",
  },
  {
    period: "Today",
    title: "BCom Accounting at York",
    subtitle: "Co-op stream · Tax coursework",
    copy: "Earned an A in Canadian Income Taxation (ADMS 3520) and Advanced Spreadsheets (ADMS 3370).",
  },
  {
    period: "Next",
    title: "An accounting career with a tax focus",
    subtitle: "My next step",
    copy: "I want to apply my studies in an accounting or tax team and intend to pursue the Canadian CPA designation after graduation.",
  },
];

const careerPillars = [
  {
    number: "01",
    title: "Checking the daily numbers",
    copy: "At my family’s deli, I reconciled the till against prior-day cash and store records to identify discrepancies and recording omissions.",
  },
  {
    number: "02",
    title: "Making information clear",
    copy: "In the Navy, I interpreted between Korean and English during vessel repairs with U.S. engineers, helping people with different expertise communicate.",
  },
  {
    number: "03",
    title: "Building practical Excel skills",
    copy: "I applied spreadsheet skills in coursework, quizzes and exams. My Excel toolkit includes PivotTables, data cleaning and scenario analysis.",
  },
];

const skillGroups = [
  {
    code: "Coursework",
    title: "Accounting foundation",
    skills: ["BCom Accounting", "Canadian Income Taxation · A", "ADMS 3520 · York University"],
  },
  {
    code: "Tools",
    title: "Analysis & tools",
    skills: ["Microsoft Excel", "Pivot tables", "Data cleaning", "Scenario analysis"],
  },
  {
    code: "Practice",
    title: "Business operations",
    skills: ["Daily till reconciliation", "POS transactions", "Inventory coordination"],
  },
  {
    code: "People",
    title: "Communication",
    skills: ["Korean-English interpretation", "Operational briefing support", "Customer service"],
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
            <h1 id="hero-title">Understanding the numbers. Working with people.</h1>
            <p className="hero-intro">
              I’m Hyeonjun Park—also Peter—a BCom Accounting co-op student at York University.
              I chose accounting to understand how cash moves through a business.
              Now I’m building toward a career in tax and the Canadian CPA designation.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View my résumé <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#contact">Connect with me</a>
            </div>
          </div>
        </div>

        <div className="journey-lab" aria-label="CPA journey progress overview">
          <div className="lab-heading">
            <div>
              <p>CPA journey</p>
              <span>Where I am headed</span>
            </div>
            <span className="lab-index" aria-hidden="true">HP</span>
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
              <li><span>01</span> Tax coursework</li>
              <li><span>02</span> Applied experience</li>
              <li><span>03</span> Canadian CPA goal</li>
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
          <div><small>Academic foundation</small><strong>York Accounting · Co-op</strong></div>
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
          <h2 id="journey-title">Why accounting. Why tax.</h2>
          <p className="section-lead">
            Working with cash and store records made business feel concrete to me.
            Accounting gives me a way to understand those movements; tax is the area
            I want to explore more deeply through study and practical experience.
          </p>
        </div>

        <div className="journey-layout">
          <aside className="chapter-card">
            <span className="chapter-label">My approach</span>
            <h3>Be careful with the details. Be clear with people.</h3>
            <p>Whether I’m checking a record or explaining information in another language, I value patience, consistency and following through.</p>
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
          <h2 id="experience-title">What I bring to a team.</h2>
          <span>
            My experience comes from a family business, customer service and naval operations.
            Each has given me practical habits to bring into an accounting workplace.
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

      </section>

      <section className="skills-section content-section" id="skills" aria-labelledby="skills-title">
        <div className="skills-heading-row">
          <div className="section-heading compact">
            <p>03 / Skills</p>
            <h2 id="skills-title">A foundation I can build on.</h2>
          </div>
          <p className="skills-intro">
            Academic preparation and transferable skills, with room to keep learning.
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

      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-grid" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <div className="contact-copy">
          <p>04 / Connect</p>
          <h2 id="contact-title">Let’s talk accounting and tax.</h2>
          <span>
            I’d welcome a conversation about accounting and tax co-op opportunities,
            your team’s work, or the lessons that shaped your own CPA path.
          </span>
        </div>
        <div className="contact-card">
          <div className="availability-dot"><i></i> Open to conversations</div>
          <h3>Meet Peter.</h3>
          <p>My résumé has the details of my education and experience. You can reach me on LinkedIn—I’d be glad to connect.</p>
          <div className="contact-meta">
            <span><small>Based in</small>Toronto, Ontario</span>
            <span><small>Languages</small>English + Korean</span>
          </div>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/hyeonjun-park-a50296322/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Hyeonjun Park's LinkedIn profile"
            >
              LinkedIn profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="Hyeonjun Park, back to top">
          <span className="brand-mark" aria-hidden="true">HP</span>
          <span>Hyeonjun Park</span>
        </a>
        <p>Accounting · Tax direction · Toronto</p>
        <small>Hyeonjun Park · Peter</small>
      </footer>
    </main>
  );
}
