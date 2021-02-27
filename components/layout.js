import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Pesonal website'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta
                    name="description"
                    content="Marc Sednaoui personal website"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>
                        Home{' '}
                    </a>
                </Link>
                <Link href="/projects">
                    <a>
                        Projects{' '}
                    </a>
                </Link>
                <Link href="/work">
                    <a>
                        Work{' '}
                    </a>
                </Link>
                <Link href="/books">
                    <a>
                        Books{' '}
                    </a>
                </Link>
            </div>
            <main>{children}</main>
        </div>
    )
}
