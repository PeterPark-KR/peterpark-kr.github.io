"use client";

import { localeInfo, type Locale, sectionIds } from "./translations";
import { pagePath, type PageName } from "./locale";
import type { MouseEvent } from "react";

export function LanguageSelector({ locale, label, page }: { locale: Locale; label: string; page: PageName }) {
  function retainSection(event: MouseEvent<HTMLAnchorElement>) {
    const link = event.currentTarget;
    const ids = ["top", ...sectionIds, "beyond", "kumdo", "golf"];
    const current = ids.includes(window.location.hash.slice(1)) ? window.location.hash : "";
    link.href = `${link.dataset.path}${current}`;
  }
  return (
    <nav className="language-selector" aria-label={label}>
      {(Object.keys(localeInfo) as Locale[]).map((key) => {
        const language = localeInfo[key];
        return <a key={key} href={pagePath(key, page)} data-path={pagePath(key, page)} hrefLang={language.lang} lang={language.lang} aria-label={language.label} title={language.label} aria-current={locale === key ? "page" : undefined} onClick={retainSection}>{language.code}</a>;
      })}
    </nav>
  );
}

export function MobileMenu({ label, children }: { label: string; children: React.ReactNode }) {
  return <details className="mobile-menu" onClick={(event) => {
    if ((event.target as HTMLElement).closest("a")) event.currentTarget.open = false;
  }}><summary>{label} <span aria-hidden="true">+</span></summary><div className="mobile-menu-panel">{children}</div></details>;
}
