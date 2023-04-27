import Navbar from '<leitel>/components/Navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router
  let showNavbar = true

  if (pathname === '/red-mujeres') {
    showNavbar = false
  }

  return (
    <main>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </main>
  )
}
