import "./App.css"
import axios from "./axios"
import React, { useState, useEffect } from "react";
import requests from "./Requests"
const Banner = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + "..." : string
    }
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            )
            return request
        }
        fetchData();
    }, []);
    console.log(movie)
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>
            <div className="banner__content">
                <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner--buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;