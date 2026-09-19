import Image from "next/image";
import { uiCopy } from "./ui-copy";
import { profileConfig } from "./profile-config";
import { dictionaries, pageCopy, narrative, recognition, currentLearning, type Locale } from "./translations";
import { pageNames, pagePath, type PageName } from "./locale";
import { LanguageSelector, MobileMenu } from "./navigation";

function ContactLinks({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  return <div className="profile-links">
    <a href={profileConfig.linkedin} target="_blank" rel="noopener noreferrer">
      <svg className="link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.35-1.53 2.79-1.53 2.99 0 3.58 1.97 3.58 4.53v5.25Z" /></svg>
      {t.linkedin}
    </a>
    <a href={`mailto:${profileConfig.email}`}>
      <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></svg>
      {t.email}
    </a>
  </div>;
}

function About({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const c = pageCopy[locale];
  const n = narrative[locale];
  const awards = recognition[locale];
  const learning = currentLearning[locale];
  return <>
    <section className="reading-section" id="journey" aria-labelledby="about-title">
      <h1 id="about-title">{c.aboutTitle}</h1>
      <nav className="page-index" aria-label={uiCopy[locale].onThisPage}>
        <a href="#experience">{t.nav[1]}</a><a href="#education">{t.nav[2]}</a><a href="#recognition">{awards.title}</a><a href="#skills">{t.nav[3]}</a>
      </nav>
      <div className="prose">{n.opening.map(p => <p key={p}>{p}</p>)}</div>
    </section>
    <section className="reading-section" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">{n.experienceTitle}</h2><p className="section-note">{n.experienceIntro}</p>
      {[2, 1, 0].map(i => { const item = t.experience[i]; return <article className="story" key={item.organization}>
        <p className="entry-date">{item.dates} · {item.location}</p>
        <h3>{n.chapters[i]}</h3><p className="entry-role">{item.organization} · {item.role}</p>
        <div className="prose">{c.stories[i].map(p => <p key={p}>{p}</p>)}</div>
      </article>; })}
    </section>
    <section className="reading-section" id="education" aria-labelledby="education-title">
      <h2 id="education-title">{t.nav[2]}</h2><h3>York University</h3><p className="entry-role">{t.degree}</p>
      <p className="coursework-label">{t.selected}</p>
      <dl className="detail-rows coursework">{["ADMS 3520", "ADMS 3370"].map((code, i) => <div key={code}><dt>{code}</dt><dd>{t.courses[i]} <span>{t.grade}</span><p className="supporting-copy">{code === "ADMS 3370" ? c.excelCourse : c.taxCourse}</p></dd></div>)}</dl>
    </section>
    <section className="reading-section" aria-labelledby="learning-title">
      <h2 id="learning-title">{learning.title}</h2>
      <p className="entry-date">Udemy · Mike X Cohen · {learning.status}</p>
      <h3><a href="https://www.udemy.com/course/deeplearning_x/" target="_blank" rel="noopener noreferrer">A deep understanding of deep learning (with Python intro)</a></h3>
      <p className="supporting-copy">{learning.text}</p>
    </section>
    <section className="reading-section" id="recognition" aria-labelledby="recognition-title">
      <h2 id="recognition-title">{awards.title}</h2>
      <dl className="detail-rows">
        <div><dt>{awards.scholarships}</dt><dd>International Scholarship of Merit; YU Automatic Entrance Scholarship (2020)</dd></div>
        <div><dt>{awards.service}</dt><dd>{awards.commendation}</dd></div>
      </dl>
    </section>
    <section className="reading-section" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">{t.skillsTitle}</h2>
      <dl className="detail-rows">{t.skills.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </section>
    <section className="reading-section" aria-labelledby="contribution-title"><h2 id="contribution-title">{n.contributionTitle}</h2><p>{n.contribution}</p></section>
  </>;
}

export default function Profile({ locale, page = "home" }: { locale: Locale; page?: PageName }) {
  const t = dictionaries[locale];
  const c = pageCopy[locale];
  const n = narrative[locale];
  const portrait = profileConfig.portrait;
  const ui = uiCopy[locale];
  const navLinks = pageNames.map(key => <a key={key} href={pagePath(locale, key)} aria-current={page === key ? "page" : undefined}>{c.labels[key]}</a>);
  navLinks.push(<a key="contact" href="#contact">{t.nav[5]}</a>);
  return <div id="top">
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header shell">
      <a className="brand" href={pagePath(locale)}>{t.name}<span>{t.portfolio}</span></a>
      <div className="desktop-navigation">
        <nav className="desktop-nav" aria-label={t.primaryNav}>{navLinks}</nav>
        <LanguageSelector locale={locale} page={page} label={t.language} />
      </div>
      <MobileMenu label={t.menu}>
        <nav aria-label={t.mobileNav}>{navLinks}</nav>
        <LanguageSelector locale={locale} page={page} label={t.language} />
      </MobileMenu>
    </header>
    {page !== "home" && <div className="page-return shell"><a className="back-home" href={pagePath(locale)}><span aria-hidden="true">←</span> {c.backHome}</a></div>}
    <main id="main">
      {page === "home" ? <>
        <section className="profile-hero shell" id="journey" aria-labelledby="profile-name">
          <div className="profile-intro">
            <p className="eyebrow">{t.location}</p><h1 id="profile-name">{t.name}</h1>
            <p className="profile-role">{ui.role}</p>
            <p className="hello">{c.hello}</p>
            <div className="home-intro">{n.home.map(p => <p key={p}>{p}</p>)}</div>
            <ContactLinks locale={locale} />
          </div>
          {portrait && <div className="portrait has-image"><Image src={portrait.src} alt={locale === "en" ? portrait.alt : t.name} fill loading="eager" fetchPriority="high" sizes="(max-width: 700px) 180px, (max-width: 1050px) 240px, 280px" /></div>}
        </section>
        <section className="home-topics shell" aria-labelledby="explore-title">
          <h2 id="explore-title">{c.explore}</h2>
          {(["about", "projects", "interests"] as const).map(topic => <article className="topic-row" id={topic === "about" ? "experience" : topic === "interests" ? "beyond" : "projects"} key={topic}>
            <h3>{c.labels[topic]}</h3>
            <div className="topic-copy">
              <p id={topic === "about" ? "education" : undefined}><span id={topic === "about" ? "skills" : undefined}>{topic === "about" ? n.aboutSummary : c.summaries[topic]}</span></p>
              <a className="topic-link" href={pagePath(locale, topic)}>{c.readMore[topic]}</a>
            </div>
          </article>)}
        </section>
      </> : <div className="reading-shell">
        {page === "about" && <About locale={locale} />}
        {page === "interests" && <>
          <header className="page-heading" id="beyond"><h1>{c.interestsTitle}</h1><p>{c.interestsIntro}</p></header>
          <section className="reading-section" id="kumdo" aria-labelledby="kumdo-title"><h2 id="kumdo-title">{t.hobby}</h2><div className="prose"><p>{c.kumdoOrigin}</p>{c.kumdo.map(p => <p key={p}>{p}</p>)}</div></section>
          <section className="reading-section" id="golf" aria-labelledby="golf-title"><h2 id="golf-title">{c.golf}</h2><div className="prose">{c.golfText.map(p => <p key={p}>{p}</p>)}</div></section>
        </>}
        {page === "projects" && <>
          <header className="page-heading" id="projects"><h1>{c.labels.projects}</h1><p>{n.projectsIntro}</p></header>
          {t.projects.map((project, i) => <section className="reading-section project-entry" key={project.title} aria-labelledby={`project-${i}`}><p className="entry-date">{project.status}</p><h2 id={`project-${i}`}>{project.title}</h2><dl className="project-story"><div><dt>{ui.purpose}</dt><dd>{ui.projects[i].purpose}</dd></div><div><dt>{ui.approach}</dt><dd>{project.description}</dd></div><div><dt>{ui.status}</dt><dd>{ui.projects[i].status}</dd></div></dl>{project.tools && <p className="supporting-copy">{project.tools}</p>}</section>)}
        </>}
      </div>}
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-layout">
        <h2 id="contact-title">{c.contactTitle}</h2><div><p>{c.contact}</p><ContactLinks locale={locale} /></div>
      </div></section>
    </main>
    <footer className="site-footer shell"><p>{t.name} <span>· Peter</span></p><ContactLinks locale={locale} /><a href="#top">{t.back}</a></footer>
  </div>;
}
