import Profile from "../profile";
import { locales, pageNames, pagePath, resolveRoute } from "../locale";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap(locale => pageNames.map(page => ({ locale: pagePath(locale, page).split("/").filter(Boolean) })));
}
export default async function Page({ params }: { params: Promise<{ locale?: string[] }> }) {
  const { locale, page } = resolveRoute((await params).locale);
  return <Profile locale={locale} page={page} />;
}
