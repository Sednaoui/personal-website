import Head from 'next/head'
import Layout from '../components/layout'

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Books</title>
            </Head>
            <h1>Books</h1>
            <div>
                <h3>
                    Some of my favourite books, in no particular order
                </h3>
                <ul>
                    <li>
                        <a href="https://www.amazon.com/Leonardo-Vinci-Walter-Isaacson/dp/1501139150">Leonardo da Vinci</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Zero_to_One">Zero to One</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/The_Gene%3A_An_Intimate_History">The Gene: An Intimate History</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Thinking%2C_Fast_and_Slow">Thinking Fast and Slow</a>
                    </li>
                    <li>
                        <a href="https://mitpress.mit.edu/books/deep-learning-revolution">The Deep Learning Revolution</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/The_Origin_of_the_Family,_Private_Property_and_the_State">The Origin of the Family, Private Property and the State</a>
                    </li>
                    <li>
                        <a href="https://www.goodreads.com/book/show/15793107-paris-reborn">Paris Reborn</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Children_of_Gebelawi">Children of Gebelawi (أولاد حارتنا)</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Great_Expectations">Great Expectation </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Crime_and_Punishment">Crime and Punishment</a>
                    </li>
                </ul>
            </div>
        </Layout >
    )
}
