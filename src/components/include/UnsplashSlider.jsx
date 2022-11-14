import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function UnsplashList({ image }) {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${image.id}`}>
                <img src={image.urls.regular} alt={image.urls.alt_description} />
            </a>
        </li>
    );
}

const UnsplashSlider = ({ random }) => {
    return (
        <div className="unsplash__list">
            <div className="container">
                <h3>Unsplash Random Image</h3>
                <div className="unsplashList__inner">
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
                        {random.map((image, index) => (
                            <SwiperSlide>
                                <UnsplashList key={index} image={image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default UnsplashSlider;
