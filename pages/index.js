import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
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
          <Image
            priority
            src="/images/profile_picture.jpg"
            className={utilStyles.borderCircle}
            height={187.5}
            width={250}
            alt="Smiling photograph"
          />
          <p>As peter pan sang: <em>"I won't grow up"</em></p>
        </>
      </header>
      <section className={utilStyles.headingMd}>
        <p>
          Email: marcsednaoui [at] gmail [dot] com
        </p>
        <p>
          <a href="https://github.com/Sednaoui">sednaoui</a> on Github <a href="https://twitter.com/@marcsednaoui">@marcsednaoui</a> on Twitter
        </p>
      </section>
    </Layout >
  )
}
