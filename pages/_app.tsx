import "../styles/styles.css"
import styles from "../styles/Home.module.css"
import Layout from "../components/Layout/Layout"
import { url } from "inspector"

import Flower from "../components/Icons/Flower"

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="layout">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
