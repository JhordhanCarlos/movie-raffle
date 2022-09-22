import React, { useState } from 'react';
import { Container, Content } from './styles';
import axios from 'axios';
import { FiFilm, FiPlus } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";

export function Header () {
    const [searchText, setSearchText] = useState("");
    const [dados, setDados] = useState([]);

    function addToQueue (id) {
        console.log(id)
    }
    const getSearch = async () =>{
        
        if(searchText.trim() !== ""){
            const API_KEY = process.env.REACT_APP_API_KEY;
            const url = `http://www.omdbapi.com/?s="${searchText}"&apikey=${API_KEY}`;
            let {data} = await axios.get(url)
            let [...Search] = data.Search
            setDados(Search)
        } 
      }

    return (
        <Container>
            <Content>
                <h1 style={{"display": "flex", "color": "#FFF"}}>
                <FiFilm size={24} style={{"margin": "5px"}}/> 
                    Movie Raffle
                </h1>
                <input type="text" id="movie-search" onBlur={(e) => setSearchText(e.target.value)}/>
                <button type="button" onClick={getSearch}>
                    <HiOutlineSearch size={20} margin={5}/>
                </button>
                <div>
                    {
                        dados.map((dado) => 
                            <tr key={dado.imdbId}>
                                <td><img src={dado.Poster} alt=""/></td>
                                <td><h2>{dado.Title}</h2></td>
                                <td><label>{dado.Year}</label></td>
                                <td><label>{dado.Type}</label></td>
                                <td><button onClick={addToQueue(dado.imdbId)}><FiPlus size={24} /></button></td>
                            </tr>
                        )
                    }  
                </div>
            </Content>
        </Container>
    )
}