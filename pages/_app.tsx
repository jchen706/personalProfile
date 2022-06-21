import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false
import Head  from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>

        <link rel="shortcut icon" href="/favicon.ico" />

  
    </Head>
    {/* <Script src="https://kit.fontawesome.com/d720c6445a.js"></Script> */}

  <Component {...pageProps} />
  </>
  )
}

export default MyApp
