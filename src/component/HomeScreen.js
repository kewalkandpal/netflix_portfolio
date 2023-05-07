import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Raw from "./Raw";
import queries from "../api/request";

function HomeScreen(){
    return(
        <div className="home_screen">
            <Navbar />
            <Banner />
            <Raw title="Netflix Originals" url={queries.netflixOriginal} isLargeImg />
            <Raw title="Trending Movies" url={queries.trendingMoviesAllweek} />
            <Raw title="Top Rated Movies" url={queries.topRatedMovies} />
            <Raw title="Action Movies" url={queries.actionMovies} />
            <Raw title="Horror Movies" url={queries.horrorMovies} />
            <Raw title="Comedy Movies" url={queries.comedyMovies} />
            <Raw title="Romance Movies" url={queries.romanceMovies} />
            <Raw title="Documentries" url={queries.documentries} />
        </div>
    )
};

export default HomeScreen;