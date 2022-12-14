import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function MoviePop(props) {
    return (
        <article className="card">
            <a target="blank" href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
                {/* (postman send를 누르면 하단에 정보가 나온다.)postman 이미지와 타이틀 뿌려주기 */}
                {/* https://image.tmdb.org/t/p/w500/ 를 붙여줘야 이미지가 나온다. */}
                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} />
                <em>
                    <span className="title">{props.movie.title}</span>
                    <span className="star">★ {props.movie.vote_average}</span>
                    <span className="rank">{props.index + 1}</span>
                </em>
            </a>
        </article>
    );
}

const MovieList = (props) => {
    return (
        <div className="movie__list">
            <div className="container">
                <h3>a popular movie</h3>
                <div className="movieList__inner">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {props.movies.map((movies, index) =>
                            index < 10 ? (
                                <SwiperSlide>
                                    <MoviePop key={index} movie={movies} index={index} />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MovieList;
