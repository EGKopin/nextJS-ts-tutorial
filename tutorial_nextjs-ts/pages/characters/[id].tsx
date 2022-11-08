//Starts at 16:00 in video
import { Character } from "../../types";
import Image from "next/image";
//in order to use the context.query.id, import useRouter
import { useRouter } from "next/router";
import imageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import styles from '../../styles/Character.module.css'

//this is our ACTUAL function that runs with the info from the props
function CharacterPage({character}:{ character: Character }) {
    //instantiate router; has lots of methods including query, so can get the id
    const router = useRouter();

    return <div className={styles.container}>Character Page
    <h1>{character.name}</h1>
    <Image 
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200"
        height="200"
    />
    </div>
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage){
    return <Layout>{page}</Layout>
}

//Get rid of getstatic paths

//update to serversideprops; changed to anon function to make typing easier; Typings from the anon function gives some typings to context
export const getServerSideProps:GetServerSideProps = async (context) => {
    const res = await fetch
    (`https://rickandmortyapi.com/api/character/${context.query.id}`
    );
    const character = await res.json();
    return {
        props:{
            character
        }
    }
}

export default CharacterPage