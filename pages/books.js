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
                        <a href="https://www.amazon.com/Leonardo-Vinci-Walter-Isaacson/dp/1501139150" target="_blank" rel="noopener noreferrer">Leonardo da Vinci</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Zero_to_One" target="_blank" rel="noopener noreferrer">Zero to One</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/The_Gene%3A_An_Intimate_History" target="_blank" rel="noopener noreferrer">The Gene: An Intimate History</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Thinking%2C_Fast_and_Slow" target="_blank" rel="noopener noreferrer">Thinking Fast and Slow</a>
                    </li>
                    <li>
                        <a href="https://mitpress.mit.edu/books/deep-learning-revolution" target="_blank" rel="noopener noreferrer">The Deep Learning Revolution</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/The_Origin_of_the_Family,_Private_Property_and_the_State" target="_blank" rel="noopener noreferrer">The Origin of the Family, Private Property and the State</a>
                    </li>
                    <li>
                        <a href="https://www.goodreads.com/book/show/15793107-paris-reborn" target="_blank" rel="noopener noreferrer">Paris Reborn</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Children_of_Gebelawi" target="_blank" rel="noopener noreferrer">Children of Gebelawi (أولاد حارتنا)</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Great_Expectations" target="_blank" rel="noopener noreferrer">Great Expectation </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Crime_and_Punishment" target="_blank" rel="noopener noreferrer">Crime and Punishment</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/On_the_Genealogy_of_Morality" target="_blank" rel="noopener noreferrer">On the Genealogy of Morality</a>
                    </li>
                </ul>
            </div>
        </Layout >
    )
}
