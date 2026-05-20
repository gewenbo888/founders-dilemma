import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const TITLE_EN = "The Founder's Dilemma · How China's Emperors Treated the Generals Who Crowned Them";
const TITLE_ZH = "开国者的两难 · 帝王如何对待功臣";
const DESC =
  "A bilingual comparative atlas of how China's founding rulers — Liu Bang, Liu Xiu, Li Shimin, Zhao Kuangyin, Zhu Yuanzhang, and Mao — treated the meritorious generals who won them the empire. Built around one unsettling lens: who dies first decides whether virtue is ever tested.";

export const metadata: Metadata = {
  metadataBase: new URL("https://founders-dilemma.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "founding emperors",
    "meritorious officials",
    "purge of generals",
    "Chinese history",
    "Liu Bang",
    "Han Xin",
    "Liu Xiu",
    "Li Shimin",
    "Xuanwu Gate",
    "Zhao Kuangyin",
    "cup of wine release of military power",
    "Zhu Yuanzhang",
    "Hu Weiyong case",
    "Lan Yu case",
    "Ten Marshals",
    "succession",
    "dynastic politics",
    "鸟尽弓藏",
    "兔死狗烹",
    "开国功臣",
    "诛杀功臣",
    "杯酒释兵权",
    "玄武门之变",
    "胡惟庸案",
    "蓝玉案",
    "十大元帅",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    title: TITLE_EN,
    description:
      "Birds gone, the good bow is stored away. A comparative study of six Chinese founders and the generals who made them — and a darker thesis: apparent virtue is often just untested circumstance.",
    url: "https://founders-dilemma.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_EN,
    description:
      "鸟尽弓藏，兔死狗烹. Six founders, six fates for the generals who won the empire — and the question of who dies first.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#0e0c0a" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://founders-dilemma.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-ink-900 text-bone-100 antialiased">
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
