import React from "react";

export default function MovieCard({movie}) {
    return (
    <div className="movie-item-style-2 movie-item-style-1">
        <img src={movie.Poster == 'N/A' ? 'https://via.placeholder.com/400' : movie.Poster} alt="" />
        <div className="mv-item-infor">
            <h6><a href="#">{movie.Title}</a></h6>
            <p className="rate"><span>{movie.Year}</span> /{movie.Type}</p>
        </div>
    </div>
    );
}