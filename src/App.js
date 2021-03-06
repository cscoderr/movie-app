import React, { useEffect, useState } from "react";

import Header from './components/Header';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import MovieCardWrapper from './components/MovieCardWrapper';

const API_URL = 'http://www.omdbapi.com?apiKey=3a163704'; 

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loader, setLoader] = useState(false);

    const searchMovies = async(query) => {
        setLoader(true);
        const response = await fetch(`${API_URL}&s=${query}`);
        const data = await response.json();
        setLoader(false);
        setMovies(data.Search);
    }

    const searchChangeHandler = (value) => {
        searchMovies(value);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);
    return (
        <div>
            <Header value={searchQuery} onSearchChange={setSearchQuery} onSearchClick={() => searchMovies(searchQuery)}/> 
            <Hero />

            {loader ? 
                <div className="page-single">
                    <div className="container">
                        <div className="row ipad-width">
                            <div className="col-md-12">
                                   <center><img src="images/fancybox_loading.gif"/></center> 
                            </div>
                        </div>
                    </div>
                </div>
                : (<MovieCardWrapper>
                {
                    movies?.length > 0 
                    ?
                      movies.map((movie, index) => (<MovieCard key={index} movie={movie} />))
                        
                    : (
                        <div className="col-sm-12">
                           <center><h1>No Movie available</h1></center>
                        </div>
                    )
                }
            </MovieCardWrapper>)}
        </div>
    );
}

export default App;