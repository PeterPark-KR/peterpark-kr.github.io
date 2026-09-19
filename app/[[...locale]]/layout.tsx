import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { siteConfig } from "../site-config";
import { dictionaries, localeInfo, pageCopy } from "../translations";
import { resolveRoute, pagePath, locales } from "../locale";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
type Params = Promise<{ locale?: string[] }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, page } = resolveRoute((await params).locale);
  const t = dictionaries[locale];
  const info = localeInfo[locale];
  const title = page === "home" ? t.title : `${pageCopy[locale].labels[page]} | ${t.name}`;
  const description = page === "home" ? t.description : pageCopy[locale].descriptions[page];
  const path = pagePath(locale, page);
  const languages = Object.fromEntries(locales.map(key => [localeInfo[key].lang, pagePath(key, page)]));
  return {
    metadataBase: new URL(siteConfig.url), title, description,
    keywords: locale === "en" ? ["Hyeonjun Park", "Aspiring CPA", "CPA journey", "Accounting student", "York University", "Toronto accounting", "Accounting and finance", "Internal audit", "Financial analysis"] : undefined,
    authors: [{ name: siteConfig.name, url: siteConfig.url }], creator: siteConfig.name,
    alternates: { canonical: path, languages: { ...languages, "x-default": pagePath("en", page) } },
    openGraph: { type: "website", locale: info.og, alternateLocale: Object.values(localeInfo).filter(item => item !== info).map(item => item.og), url: path, siteName: siteConfig.name, title, description },
    twitter: { card: "summary", title, description },
    robots: { index: true, follow: true }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = resolveRoute((await params).locale);
  return <html lang={localeInfo[locale].lang}><body className={`${geistSans.variable} antialiased`}>{children}</body></html>;
}
