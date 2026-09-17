import Profile from "../profile";
import { resolveLocale } from "../locale";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: [] }, { locale: ["ko"] }, { locale: ["ja"] }, { locale: ["zh"] }];
}
export default async function Page({ params }: { params: Promise<{ locale?: string[] }> }) {
  return <Profile locale={resolveLocale((await params).locale)} />;
}
