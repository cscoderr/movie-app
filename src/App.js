import React, { useEffect, useState } from "react";

import Header from './components/Header';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import MovieCardWrapper from './components/MovieCardWrapper';

const API_URL = 'http://www.omdbapi.com?apiKey=3a163704'; 

const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async(query) => {
        const response = await fetch(`${API_URL}&s=${query}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('batman');
    }, []);
    return (
        <div>
            <Header /> 
            <Hero />
            <MovieCardWrapper>
                {movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
            </MovieCardWrapper>
        </div>
    );
}

export default App;