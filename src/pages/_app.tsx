import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DataProvider } from '../utils/dataContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
    </>
  )
}

export default MyApp
