import HamburgerMenu from '@/components/hamburgerMenu'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isNight, setIsNight] = useState()

  useEffect(() => {
    var hours = (new Date()).getHours()
    if (hours >= 6 && hours < 18) {
      setIsNight(false)
      return
    }
    setIsNight(true)
  }, [])

  return (<div className='full-height' style={{width: "100vw",}}>
    <HamburgerMenu />
      <Component {...pageProps}/>
  </div>

  )


}
