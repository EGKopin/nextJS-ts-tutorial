//Starts at 16:00 in video
import { Character, GetCharacterResults } from "../../types";
import Image from "next/image";
import imageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";

//this is our ACTUAL function that will run after the async ones
function CharacterPage({character}:{
    character: Character
}) {
return <div>Character Page
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