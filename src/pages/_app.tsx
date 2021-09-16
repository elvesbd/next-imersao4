import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/theme';
import { CssBaseline } from '@material-ui/core';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jsstyles = document.querySelector('#jss-server-side');
    jsstyles?.parentElement?.removeChild(jsstyles);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp
