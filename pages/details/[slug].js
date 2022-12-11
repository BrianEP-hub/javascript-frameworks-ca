import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import axios from 'axios';
import { BASE_URL, URL_KEY } from '../api/api';
import Image from 'next/image';

//param from url, display atleast 3 props from the item
export default function Detail({ game }) {
  return (
    <Layout>
      <Heading title={game.name} />
      <div>
        <h1>{game.name}</h1>
        <Image
          src={game.background_image}
          alt={game.name}
          height="250"
          width="350"
        />
        <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + URL_KEY);
    console.log(response.data);
    const games = response.data.results;

    const paths = games.map(game => ({
      params: { slug: game.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}/${params.slug}${URL_KEY}`;

  let game = null;

  try {
    const response = await axios.get(url);
    game = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { game: game },
  };
}
