import Image from "next/image";
import { profileConfig } from "./profile-config";
import { dictionaries, sectionIds, type Locale } from "./translations";
import { LanguageSelector, MobileMenu } from "./navigation";

export default function Profile({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const portrait = profileConfig.portrait;
  const links = <div className="profile-links">
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">{t.resume} <span aria-hidden="true">↗</span></a>
    <a href={profileConfig.linkedin} target="_blank" rel="noopener noreferrer">{t.linkedin} <span aria-hidden="true">↗</span></a>
    <a href={`mailto:${profileConfig.email}`}>{t.email} <span aria-hidden="true">↗</span></a>
  </div>;
  const navLinks = sectionIds.map((id, i) => <a key={id} href={`#${id}`}>{t.nav[i]}</a>);
  return <div id="top">
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header shell">
      <a className="brand" href="#top">{t.name}<span>{t.portfolio}</span></a>
      <div className="desktop-navigation">
        <nav className="desktop-nav" aria-label={t.primaryNav}>{navLinks}</nav>
        <LanguageSelector locale={locale} label={t.language} />
      </div>
      <MobileMenu label={t.menu}>
        <nav aria-label={t.mobileNav}>{navLinks}</nav>
        <LanguageSelector locale={locale} label={t.language} />
      </MobileMenu>
    </header>
    <main id="main">
      <section className="profile-hero shell" aria-labelledby="profile-name">
        <div className="profile-intro">
          <p className="eyebrow">{t.location}</p>
          <h1 id="profile-name">{t.name}</h1>
          <p className="profile-subtitle">{t.subtitle}</p>
          <p className="profile-statement">{t.statement}</p>
          <p className="profile-note">{t.note}</p>
          {links}
        </div>
        <div className={`portrait${portrait ? " has-image" : ""}`} aria-hidden={portrait ? undefined : true}>
          {portrait && <Image src={portrait.src} alt={locale === "en" ? portrait.alt : t.name} fill sizes="(max-width: 700px) 300px, (max-width: 1050px) 270px, 330px" />}
        </div>
      </section>
      <div className="profile-body shell">
        <section className="profile-section" id="journey" aria-labelledby="about-title">
          <h2 id="about-title">{t.nav[0]}</h2>
          <div className="section-content about-copy">{t.about.map((p, i) => <p key={i} className={i === 0 ? "lead" : undefined}>{p}</p>)}</div>
        </section>
        <section className="profile-section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">{t.nav[1]}</h2>
          <div className="section-content">{t.experience.map((item) => <article className="experience-entry" key={item.organization}>
            <p className="entry-date">{item.dates}</p><div><h3>{item.organization}</h3><p className="entry-role">{item.role}</p><p className="entry-location">{item.location}</p><p>{item.description}</p></div>
          </article>)}</div>
        </section>
        <section className="profile-section" id="education" aria-labelledby="education-title">
          <h2 id="education-title">{t.nav[2]}</h2>
          <div className="section-content"><h3>York University</h3><p className="entry-role">{t.degree}</p><p className="coursework-label">{t.selected}</p>
            <dl className="detail-rows coursework">{["ADMS 3520", "ADMS 3370"].map((code, i) => <div key={code}><dt>{code}</dt><dd>{t.courses[i]} <span>{t.grade}</span></dd></div>)}</dl>
            <p className="supporting-copy">{t.courseworkNote}</p>
          </div>
        </section>
        <section className="profile-section" id="skills" aria-labelledby="skills-title">
          <h2 id="skills-title">{t.skillsTitle}</h2>
          <div className="section-content"><dl className="detail-rows">{t.skills.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
        </section>
        <section className="profile-section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">{t.nav[4]}</h2>
          <div className="section-content">{t.projects.map((project) => <article className="project-entry" key={project.title}><p className="entry-date">{project.status}</p><h3>{project.title}</h3><p>{project.description}</p>{project.tools && <p className="supporting-copy">{project.tools}</p>}</article>)}</div>
        </section>
        <section className="profile-section" id="beyond" aria-labelledby="beyond-title">
          <h2 id="beyond-title">{t.beyond}</h2><div className="section-content interests"><h3>{t.hobby}</h3><p>{t.hobbyText}</p></div>
        </section>
      </div>
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-layout">
        <h2 id="contact-title">{t.nav[5]}</h2><div><p className="contact-intro">{t.contactIntro}</p><p>{t.contactText}</p><a className="email-link" href={`mailto:${profileConfig.email}`}>{profileConfig.email}</a>{links}</div>
      </div></section>
    </main>
    <footer className="site-footer shell"><p>{t.name} <span>· Peter</span></p><p>{t.footer}</p><a href="#top">{t.back} <span aria-hidden="true">↑</span></a></footer>
  </div>;
}
