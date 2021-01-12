import "../styles/styles.css"
import styles from "../styles/Home.module.css"

import Layout from "../components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
