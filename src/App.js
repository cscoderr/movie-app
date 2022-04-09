import React, { useEffect } from "react";

import Header from './components/Header';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import MovieCardWrapper from './components/MovieCardWrapper';

const API_URL = 'http://www.omdbapi.com?apiKey=3a163704'; 

const App = () => {

    const searchMovies = async(query) => {
        const response = await fetch(`${API_URL}&s=${query}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('batman');
    }, []);
    return (
        <div>
            <Header /> 
            <Hero />
            <MovieCardWrapper>
                <MovieCard />
            </MovieCardWrapper>
        </div>
    );
}

export default App;