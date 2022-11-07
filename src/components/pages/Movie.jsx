import React from "react";

import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=5edfaf2cd56ea579475475637230644d&query=marvel")
            .then((response) => response.json())
            // .then((result) => console.log(result.results))
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <Header />
            <Contents>
                <Title title={["movie", "reference API"]} />
                <MovieCont movies={movies} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Movie;
