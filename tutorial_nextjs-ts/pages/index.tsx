import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
          //Link passes the href onto the next element; auto adds the anchor tag around the next element
import Link from 'next/link'
import Image from 'next/image'
import imageLoader from '../imageLoader'
import styles from '../styles/Home.module.css'
import { GetCharacterResults, Character } from '../types'

const Home: NextPage<{ characters: Character[] }> = ({characters}) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      DB: {process.env.NEXT_PUBLIC_DB_CONNECT}
      {characters.map((character) => {
        return <div key={character.id}>
          <Link href={`/characters/${character.id}`}>
            <h3>{character.name}</h3>
          </Link>
        <Image
          loader={imageLoader}
          unoptimized
          src={character.image}
          alt={character.name}
          width="200"
          height="200"
        />
        </div>
      })}
    </div>
  )
}

//used to build a static website
export const getStaticProps:GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters:results,
    },
  };
}

export default Home;