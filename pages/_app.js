import NProgress from 'nprogress'
import Router from 'next/router'
import '../styles/globals.css'
import '../styles/nprogress.css'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
