import HamburgerMenu from '@/components/hamburgerMenu'
import DarkModeToggle from '@/components/DarkModeToggle'
import '@/styles/globals.css'
import { useDarkMode } from '@/hooks/useDarkMode'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bob Slaymaker',
    jobTitle: 'Writer & Filmmaker',
    url: 'https://www.many-hands.us',
  };

  return (
    <>
      <Head>
        <title>Bob Slaymaker - Writer & Filmmaker</title>
        <meta name="description" content="Writer-Filmmaker. Selected Short Scripts, Stories, Poems & Latest Film." />
        <meta property="og:title" content="Bob Slaymaker - Writer & Filmmaker" />
        <meta property="og:site_name" content="Bob Slaymaker" />
        <meta property="og:url" content="https://www.many-hands.us" />
        <meta name="twitter:title" content="Bob Slaymaker - Writer & Filmmaker" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      
      <div className={`min-h-screen w-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200 dark-font`}>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <HamburgerMenu />
        <Component {...pageProps} />
      </div>
    </>
  )
}