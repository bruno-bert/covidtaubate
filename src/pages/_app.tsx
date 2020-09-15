import { AppProps } from 'next/app'
import Head from 'next/head'


import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import axios from 'axios';

import GlobalStyles from 'styles/global'



function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <ReactNotification />
  
      <Head>
        <title>Covid taubaté</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Números do Covid em Taubaté"
        />
         <meta
          name="description"
          content="Números atualizados do Covid em Taubaté"
        />
      </Head>
    

      <GlobalStyles />
      <Component {...pageProps} />
    
    </>
  )
}

export default App
