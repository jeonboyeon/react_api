import React, { useRef } from "react";

const UnsplashSearch = ({ onSearch }) => {
    // 값을 인지하기위해 inputRef에 useRef를 대입
    const inputRef = useRef();

    // onSearch값이 MovieSearch로 들어간다.
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);

        console.log(onSearch(value));
    };

    // 인풋 검색 했을 때
    // const onKeyPress = (event) => {
    //     // console.log("인풋 확인");
    //     if (event.key === "Enter") {
    //         handleSearch();
    //     }
    // };

    // 버튼 눌렀을 때
    const onClick = () => {
        // console.log("버튼 확인");
        handleSearch();
    };
    return (
        <div className="movie__search">
            <div className="container">
                <button ref={inputRef} type="submit" onClick={onClick}>
                    black
                </button>
            </div>
        </div>
    );
};

export default UnsplashSearch;
