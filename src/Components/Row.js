import React, { Component, useState, useEffect } from "react";
import axios from '../axios';
import "../css/Row.css";

const imgUrl = "https://image.tmdb.org/t/p/original/";

function Row ({ title, fetchUrl, isLargedRow }) {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
           // console.log(request);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
        // prazdne [], spusti sa raz a druhy krat uz nenacita nove
    }, [fetchUrl]);

    //console.table(movies);
    //  console.log(movies);


    return (
        <div className="row">
            <h2> {title} </h2>

            <div className={`row-posters {$isLargeRow && "row-poster-large"}`}> 
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className="row-poster"
                        src={`${imgUrl}${isLargedRow ? movie.poster_path : movie.backdrop_path}`}  // url obrazka + path z api
                        alt={movie.name} 
                    />
                ))}
            </div>

        </div>
    );
}


export default Row;