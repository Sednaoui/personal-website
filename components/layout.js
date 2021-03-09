import React, { useMemo } from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { resolve } from 'url'

export const siteTitle = 'Marc Sednaoui';

export const BaseLink = ({ href, as, ...rest }) => {

    const newAs = useMemo(() => {
        let baseURI_as = as || href

        // make absolute url relative
        // when displayed in url bar
        if (baseURI_as.startsWith('/')) {
            //  for static html compilation
            baseURI_as = '.' + href
            // <IPFSLink href="/about"> => <a class="jsx-2055897931" href="./about">About</a>

            // on the client
            if (typeof document !== 'undefined') {
                baseURI_as = resolve(document.baseURI, baseURI_as).href
                // => <a href="https://gateway.ipfs.io/ipfs/Qm<hash>/about">About</a>
            }
        }
        return baseURI_as
    }, [as, href])

    return <Link {...rest} href={href} as={newAs} />
}

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
                <BaseLink href="/">
                    <a className={styles.backToHomeItem}>
                        Home{' '}
                    </a>
                </BaseLink>
                <BaseLink href="/about">
                    <a className={styles.backToHomeItem}>
                        About{' '}
                    </a>
                </BaseLink>
                <BaseLink href="/projects">
                    <a className={styles.backToHomeItem}>
                        Projects{' '}
                    </a>
                </BaseLink>
                <BaseLink href="/work">
                    <a className={styles.backToHomeItem}>
                        Work{' '}
                    </a>
                </BaseLink>
                <BaseLink href="/books">
                    <a className={styles.backToHomeItem}>
                        Books{' '}
                    </a>
                </BaseLink>
            </div>
            <main>{children}</main>
        </div>
    )
}
