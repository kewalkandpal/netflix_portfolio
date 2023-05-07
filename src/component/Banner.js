import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../api/axios";
import queries from "../api/request";

function Banner() {
    const [banner,setBanner] = useState([]);

    function strSplit(str,upto) {
        return str?.length > upto ? `${str.substr(0,upto-1)}...` : str;
    }

    useEffect(()=>{
        async function fetchMovies(){
            const res = await axios.get(queries.netflixOriginal);
            setBanner(res.data.results[Math.floor(Math.random() * res.data.results.length-1)]);
            return res;
        }
        fetchMovies();
    },[]);
    return (
        <header className="banner" style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original/${banner?.backdrop_path}")`,backgroundSize:"cover",backgroungPosition:"center center",backgroundRepeat:"no-repeat"}}>
            <div className="banner_containts">
                <h1 className="banner_title">{banner?.title || banner?.original_title || banner?.original_name}</h1>
                <div className="banner_btns">
                    <button>Play</button>
                    <button>My list</button>
                </div>
                <div className="banner_detail">{strSplit(banner?.overview,150)}
                </div>
            </div>
            <div className="banner_effect" />
        </header>
    )
};

export default Banner;