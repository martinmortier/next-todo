import '../styles/globals.css'
import Head from 'next/head'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
