import "@/styles/globals.css";
import Menu from "@/components/menu";
import { ProfilePage, WithContext } from 'schema-dts';
import { Metadata } from "next";
import Head from 'next/head'
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'でじこんちゃん - 東京都市大学デジタルコンテンツ研究会',
  description: '東京都市大学デジタルコンテンツ研究会の公式ヴァーチャルコンシェルジュの「でじこんちゃん」です！',
  keywords: ['でじこんちゃん', '東京都市大学', 'デジタルコンテンツ研究会', 'TCU', '山下マナト', 'デジコン', 'ginkiha', 'tcu-dc', 'デジコンちゃん', 'AI', 'でじこんちゃんAI'],
  authors: [{name: '山下マナト', url: 'https://manapuraza.com'}],
  creator: '山下マナト', 
  publisher: '山下マナト',
  openGraph: {
    title: 'でじこんちゃん - 東京都市大学デジタルコンテンツ研究会',
    description: '東京都市大学デジタルコンテンツ研究会の公式ヴァーチャルコンシェルジュの「でじこんちゃん」です！！！',
    url: 'https://dc-chan.vercel.app',
    siteName: 'でじこんちゃん - 東京都市大学デジタルコンテンツ研究会',
    images: [
      {
        url: 'https://dc-chan.vercel.app/ogp.jpg',
        width: 600,
        height: 600,
        alt: 'でじこんちゃん - 東京都市大学デジタルコンテンツ研究会',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'favicon.ico',
    },
  },
  twitter: {
    card: 'app',
    title: 'でじこんちゃん - About',
    description: '東京都市大学デジタルコンテンツ研究会の公式ヴァーチャルコンシェルジュの「でじこんちゃん」です！！！！',
    creator: '@tcu_dc',
    images: {
      url: 'https://dc-chan.vercel.app/ogp.jpg',
      alt: 'dc-chan',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2024-07-10T20:30:00-05:00",
    "dateModified": "2024-07-10T20:53:00-05:00",
    "mainEntity": {
      "@type": "Person",
      "name": "でじこんちゃん（Digicon-chan）",
      "alternateName": "tcu_dc_bot22",
      "identifier": "https://tcu-dc.net",
      "url": "https://tcu-dc.net",
      "description": "東京都市大学デジタルコンテンツ研究会の公式ヴァーチャルコンシェルジュ / Tokyo City University Digital Content Study Society's official virtual concierge",
      "image": "https://dc-chan.vercel.app/ogp.jpg",
      "sameAs": [
        "https://tcu-dc.net",
        "https://manapuraza.com",
        "https://twitter.com/tcu_dc",
      ]
    }
  };

  return (
        <html lang="ja">
          <Head>
            <title>でじこんちゃん</title>
          </Head>
          <head>
            <Script
              id="json-ld"
              key="json-ld"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </head>

          <body >
            <main>{children}</main>
            <nav className='nav'>
              <Menu />
            </nav>
            <footer>© 2024 でじこんちゃん / Designed by <Link href="https://manapuraza.com">ヤマシタマナト</Link></footer>
          </body>
        </html>
  );
}
