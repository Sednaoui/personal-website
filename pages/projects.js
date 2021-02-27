import Head from 'next/head'
import Layout from '../components/layout'

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projcts</title>
            </Head>
            <h1>Projects that I am proud of</h1>
            <div>
                <h2>
                    <a href='https://edasty.com'>
                        Edasty
                    </a>
                </h2>
                <p>
                    I founded Edasty with a vision to engage young people to develop their thinking, their voices, and their identities, especially to those who are not able to access a quality education.
                </p>
                <p>
                    What made the school attractive to high school students from around the world are its playful learning methods and its peer interactions. Students were matched together based on interests in small groups of 4 in discord channels. Lessons consisted of topics chosen based on students’ passions. I worked with 2 teachers, and we on-boarded a total of 75 students over the course of 8 months.
                </p>
                <p>
                    A lot of the vision of school is inspired on the work of <a href="http://lifelongkindergarten.net/">Lifelong Kindergarten</a> at MIT media lab.
                </p>
            </div>
            <div>
                <h2>
                    <a href='https://web.iit.edu/career-services/career-coaches/peer-coaches'>
                        Peer Career Coach Program
                    </a>
                </h2>
                <p>
                    I helped create the peer career coach program at IIT meant to give students the confidence to apply for their dream roles and solve the problems they cared most about.
                </p>
            </div>
            <div>
                <h2>
                    <a href='https://docs.google.com/document/d/19WLGVSS63kAXlUhbEiMcXVvHJtvtnU8Ks4aQWI7gL4E/edit?usp=sharing'>
                        Storing Energy in Sand
                    </a>
                </h2>
                <p>
                    I worked on a new approach to grid-scale energy storage that relies on sand. Our solution is to store electricity as heat in high temperature sand for days, or even weeks, until it’s needed.
                </p>
            </div>
            <div>
                <h2>
                    <a href="https://sites.google.com/iit.edu/iit-motorsports/home">
                        Electric Racing Car
                    </a>
                </h2>
                <p>
                    I built the powertrain for the 2018 <a href="https://sites.google.com/iit.edu/iit-motorsports/the-car?authuser=0">IIT electric car</a> of 2018 with my classmates and peers
                </p>
            </div>
            <div>
                <h2>
                    <a href="https://drive.google.com/file/d/0Bx3ODdepwB-wQnVnRVFpTWx4dVE/view?usp=sharing">
                        Active Cooling Battery
                    </a>
                </h2>
                <p>
                    I created a solution for the super-charging problem in electric vehicles that allows the temperature to be low enough to prevent damage to the battery.
                </p>
            </div>
        </Layout >
    )
}
