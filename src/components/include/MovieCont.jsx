import React from "react";

function MovieItem(props) {
    return (
        <li>
            <a href="/">
                {/* <img src="" alt="" /> */}
                <span>{props.movie.title}</span>
            </a>
        </li>
    );
}

const MovieCont = (props) => {
    return (
        <section className="cont__movie">
            <div className="container">
                <div className="movie__inner">
                    <ul>
                        {props.movies.map((movies, index) => (
                            <MovieItem key={index} movie={movies} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MovieCont;
