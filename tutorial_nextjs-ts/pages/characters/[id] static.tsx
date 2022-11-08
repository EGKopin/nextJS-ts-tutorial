//Starts at 16:00 in video
import { Character, GetCharacterResults } from "../../types";
import Image from "next/image";
import imageLoader from "../../imageLoader";

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

//When we build our page, this function is going to run, and will run through all the characters and create some params with the char id. We will use the output of this function to render  our static paths/a static page for each character in this array
export async function getStaticPaths(){
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const { results }:GetCharacterResults = await res.json();

    //returning a new object; paths needs to be an array
    return{
        paths: results.map((character) => {

            //return a new object with one property, params
            return  { params: {id: String(character.id)}};
        }),
        fallback: false
    }
}

//this will make a network request to the API based on the ID from our function on 23
export async function getStaticProps({params}:{ params: {id: String}}) {
    const res = await fetch
    (`https://rickandmortyapi.com/api/character/${params.id}`
    );
    const character = await res.json();


    return {
        props:{
            character
        }
    }
}

export default CharacterPage