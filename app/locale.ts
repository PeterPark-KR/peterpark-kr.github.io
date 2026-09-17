import { notFound } from "next/navigation";
import { type Locale } from "./translations";

export function resolveLocale(segments?: string[]): Locale {
  if (!segments?.length) return "en";
  if (segments.length === 1 && ["ko", "ja", "zh"].includes(segments[0])) return segments[0] as Locale;
  notFound();
}
