import Layout from '../components/Layout';
import Heading from '../components/Heading';
import axios from 'axios';
import { BASE_URL, URL_KEY } from './api/api';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Card } from 'react-bootstrap';

//show the array of items from api call here
export default function Home({ games }) {
  return (
    <Layout>
      <Heading title="Home" />
      <div className={styles.container}>
        {games.map(game => {
          return (
            <div className={styles.card} key={game.slug}>
              <a href={`details/${game.slug}`}>
                <h3>{game.name}</h3>
              </a>
              <Image
                src={game.background_image}
                alt={game.name}
                height="150px"
                width="350px"
              />
              <p>Released: {game.released}</p>
              <p>Rating: {game.rating}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let games = [];

  try {
    const resp = await axios.get(BASE_URL + URL_KEY);
    console.log(resp.data);

    games = resp.data.results;
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      games: games,
    },
  };
}
