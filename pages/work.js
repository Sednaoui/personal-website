import Head from 'next/head'
import Layout from '../components/layout'

export default function Work() {
    return (
        <Layout>
            <Head>
                <title>Work</title>
            </Head>
            <h1>Work</h1>
            <h2>
                <a href='https://willo.com'>
                    Willo
                </a>
            </h2>
            <p>
                Willo is a start-up working on automating toothbrushing. I build internal tools for the research and development team at Willo to understand data and interact with the toothbrush. Previously I worked on efficacy efforts on hardware design as a mechanical engineer.
            </p>
            <h3>Data Visualization Dashboard</h3>
            <p>
                I built a dashboard for understanding and visualizing hardware components data to improve device functionality. Research and development team used it to enhance the brushing cycle by observing pressure differences across different time points. I wrote algorithms to calculate statistics to convey information for device improvement . I built server side rendered tables to display updated models that project managers used to monitor our deployments. Used Typescript, React, and Express.
            </p>
            <h3>
                Hardware Controller
            </h3>
            <p>
                I built a tool for the research and development team to write programmable brushing cycles. Brushing cycles consisted of commands sent to control components. I integrated a code editor, paired with a no-code command tool and a graph for the medical team to use. I supported the app with i18n given 3 languages. Used Javascript, React and Electron.
            </p>
            <h3>
                Mouthpiece
            </h3>
            <p>
                I worked on mouthpiece design and efficacy. The most challenging part was to design it so that it cleans all teeth simultaneously well, for a pool of diverse mouths. I, along with my team, went through more than 150 design iterations, +1k in-vivo tests, and +20 producers visits to find the right supplier.
            </p>
        </Layout >
    )
}
