import { notFound } from "next/navigation";
import { type Locale, localeInfo } from "./translations";

export const pageNames = ["home", "about", "interests", "projects"] as const;
export type PageName = typeof pageNames[number];
export const locales = Object.keys(localeInfo) as Locale[];

export function pagePath(locale: Locale, page: PageName = "home") {
  return `${localeInfo[locale].path}${page === "home" ? "" : `${page}/`}`;
}

export function resolveRoute(segments: string[] = []): { locale: Locale; page: PageName } {
  const parts = [...segments];
  const first = parts[0];
  const locale: Locale = first === "ko" || first === "ja" || first === "zh" ? parts.shift() as Locale : "en";
  const page = parts.shift() ?? "home";
  if (parts.length || !pageNames.includes(page as PageName) || (page === "home" && segments.includes("home"))) notFound();
  return { locale, page: page as PageName };
}
