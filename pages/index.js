import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'

const name = 'Marc Sednaoui'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <p>As peter pan sang: <em>"I won't grow up"</em></p>
        </>
      </header>
      <section className={utilStyles.headingMd}>
        <p>
          Email: sed [at] protonmail [dot] com
        </p>
        <p>
          <a href="https://github.com/Sednaoui" target="_blank" rel="noopener noreferrer">sednaoui</a> on Github <a href="https://twitter.com/@marcsednaoui" target="_blank" rel="noopener noreferrer">@marcsednaoui</a> on Twitter
        </p>
      </section>
    </Layout >
  )
}
