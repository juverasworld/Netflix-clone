import { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    console.log(movies);
    const base_url = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="row">
            <h2>{title}</h2>
            {movies.map((movie) => (
                <img
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}

                    alt={movie.name} />
            ))}
        </div>
    );
}

export default Row;