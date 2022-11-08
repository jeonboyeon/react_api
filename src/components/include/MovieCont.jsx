import React from "react";

function MovieItem(props) {
    return (
        <li>
            <a target="blank" href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
                {/* (postman send를 누르면 하단에 정보가 나온다.)postman 이미지와 타이틀 뿌려주기 */}
                {/* https://image.tmdb.org/t/p/w500/ 를 붙여줘야 이미지가 나온다. */}
                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} />
                <em>
                    <span className="title">{props.movie.title}</span>
                    <span className="star">{props.movie.vote_average}</span>
                </em>
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
