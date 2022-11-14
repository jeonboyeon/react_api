import React from "react";
import { useState, useEffect } from "react";

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashSearch from "../include/UnsplashSearch";
import Contact from "../layout/Contact";

const Unsplash = () => {
    const [images, setImages] = useState([]);
    const [random, setRandom] = useState([]);

    const search = (query) => {
        fetch(
            `https://api.unsplash.com/search/photos?client_id=yUuip_GEw4U1sYhLDqId_eKSJ93wm_K6PTA00IRj0E8&query=${query}&count=30`
        )
            .then((response) => response.json())
            .then((result) => setImages(result.results))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch(
            "https://api.unsplash.com/photos/random?client_id=yUuip_GEw4U1sYhLDqId_eKSJ93wm_K6PTA00IRj0E8&query=vintage&count=30"
        )
            .then((response) => response.json())
            .then((result) => setImages(result))
            .catch((error) => console.log(error));

        fetch(
            "https://api.unsplash.com/photos/random?client_id=yUuip_GEw4U1sYhLDqId_eKSJ93wm_K6PTA00IRj0E8&query=&count=10"
        )
            .then((response) => response.json())
            .then((result) => setRandom(result))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["Unsplash", "reference api"]} />
                <UnsplashSlider random={random} />
                <UnsplashSearch onSearch={search} />
                <UnsplashBtn />
                <UnsplashCont images={images} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Unsplash;
