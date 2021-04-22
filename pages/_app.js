import '../styles/globals.css'
import Head from 'next/head'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { frFR } from '@material-ui/core/locale';
const theme = createMuiTheme({

}, frFR);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    </div>
  )
}

export default MyApp
