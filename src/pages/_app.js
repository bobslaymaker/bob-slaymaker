import HamburgerMenu from '@/components/hamburgerMenu'
import DarkModeToggle from '@/components/DarkModeToggle'
import '@/styles/globals.css'
import { useDarkMode } from '@/hooks/useDarkMode'

export default function App({ Component, pageProps }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen w-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200 dark-font`}>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HamburgerMenu />
      <Component {...pageProps} />
    </div>
  )
}