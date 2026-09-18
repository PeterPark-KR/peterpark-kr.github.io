import type { MetadataRoute } from "next";
import { locales, pageNames, pagePath } from "./locale";
import { localeInfo } from "./translations";
import { siteConfig } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageNames.flatMap(page => locales.map(locale => ({
    url: `${siteConfig.url}${pagePath(locale, page)}`,
    changeFrequency: "monthly" as const,
    alternates: { languages: {
      ...Object.fromEntries(locales.map(key => [localeInfo[key].lang, `${siteConfig.url}${pagePath(key, page)}`])),
      "x-default": `${siteConfig.url}${pagePath("en", page)}`,
    } },
  })));
}
