import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { siteConfig } from "../site-config";
import { dictionaries, localeInfo } from "../translations";
import { resolveLocale } from "../locale";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
type Params = Promise<{ locale?: string[] }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = dictionaries[locale];
  const info = localeInfo[locale];
  return {
    metadataBase: new URL(siteConfig.url), title: t.title, description: t.description,
    keywords: locale === "en" ? ["Hyeonjun Park", "Aspiring CPA", "CPA journey", "Accounting student", "York University", "Toronto accounting", "Accounting and finance", "Internal audit", "Financial analysis"] : undefined,
    authors: [{ name: siteConfig.name, url: siteConfig.url }], creator: siteConfig.name,
    alternates: { canonical: info.path, languages: { en: "/", ko: "/ko/", ja: "/ja/", "zh-Hans": "/zh/", "x-default": "/" } },
    openGraph: { type: "website", locale: info.og, alternateLocale: Object.values(localeInfo).filter(item => item !== info).map(item => item.og), url: info.path, siteName: siteConfig.name, title: t.title, description: t.description },
    twitter: { card: "summary", title: t.title, description: t.description },
    robots: { index: true, follow: true }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const locale = resolveLocale((await params).locale);
  return <html lang={localeInfo[locale].lang}><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>;
}
