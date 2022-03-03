import React,{useState} from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';
const Home = (props)=>{

    const [pokemon, setPokemon] = useState([]);

    const catchEmAll = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPokemon(res.data);
        })
        .catch((err)=>console.log(err))
    }

    return(
        <div>
            <h1 style={{color: "red"}}>
                Pokemon
            </h1>
                <button onClick={catchEmAll}>
                    Get Pokemon
                </button>
            <hr/>
            <div>
                {/* {Object.keys(pokemon).map((entry,i)=>(
                    <li key={i}>
                        <p>
                            {pokemon[entry].name}
                        </p>
                    </li>
                ))} */}
                {/* {pokemon}.map(({pokemon.name})=>{
                    <p>
                        {pokemon.name}
                    </p>
                }) */}
                {
                    pokemon?
                <p>
                    {pokemon.name}
                </p>
                :null
                }
            </div>
        </div>
    )
}
export default Home;