import Head from 'next/head'
import Layout from '../components/layout'

import styles from '../styles/utils.module.css'
import { BaseLink } from '../components/layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <h1>About</h1>
            <img
                src="./images/profile_picture_cropped.jpg"
                width={160}
                height={160}
                className={styles.borderCircle}
            />
            <p>
                My name is Marc Sednaoui. I grew up in Alexandria, Egypt, and I currently live in Paris. I studied engineering at Illinois Tech in Chicago. Now, I am looking to build on top of cryptocurrencies.   
            </p>
            <p>
                I ask questions about how humans learn from their environment, how science and technology are progressing and how communities are formed.
            </p>
            <p>
                The problem I think about the most is how to <b>unlock hidden human potential</b>. Talent is everywhere, opportunity is not. I want to provide the exposure needed for adolescents to find their “spark”. While nature (genes) is a factor in forming our character, our genes and our environment interact. We are ever evolving creatures, even during our lifetime. I want to take a bet on the unknowns, the ones that our society failed. I want to find the ones that are curious enough to develop their passions, but not fortunate enough with the resources. I want to find the lost minds.
            </p>
            <p>
                I am obsessed with technological innovation. I get excited about crypto, defi, emerging carbon removal technologies, machine learning, brain machine interface, gen tech, and privacy focused applications.
            </p>
            <p>
                I enjoy spending my time with family and friends, reading philosophy, hiking in the mountains, going to the ocean, skateboarding, playing football, riding my bicycle, and listening to a wide range of music genres, from Dua Lipa to <a href="https://open.spotify.com/artist/52lsD82iOqGtyfEMqWgk4f">Um kalthoum</a>
            </p>
        </Layout >
    )
}
