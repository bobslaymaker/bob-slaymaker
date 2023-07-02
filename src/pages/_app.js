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

  return (<div className='' style={{width: "100vw", height: "100vh", color: `${isNight ? "white" : "black"}`, background: `${isNight ? "black" : "white"}`}}>
      <Component {...pageProps}/>
  </div>

  )


}
