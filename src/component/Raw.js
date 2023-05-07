import React, { useEffect, useState } from "react";
import "./Raw.css";
import axios from "../api/axios";

function Raw({ title, url, isLargeImg = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const res = await axios.get(url);
            setMovies(res.data.results);
            return res;
        }
        getMovies();
    }, [url])

    return (
        <div className="raw">
            <h2 className="movie_title">{title}</h2>
            <div className="movie_posters">
                {
                    movies.map((movie) => {
                        return (
                            <img key={movie.id} className={`movie_poster ${isLargeImg && "movie_poster_large"}`} src={`https://www.themoviedb.org/t/p/original/${isLargeImg ? movie.poster_path : movie.backdrop_path}`} alt="movie_poster_img" />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Raw;
