import React, { useRef } from "react";

const MovieSearch = ({ onSearch }) => {
    // 값을 인지하기위해 inputRef에 useRef를 대입
    const inputRef = useRef();

    // onSearch값이 MovieSearch로 들어간다.
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);

        console.log(onSearch(value));
    };

    // 인풋 검색 했을 때
    const onKeyPress = (event) => {
        // console.log("인풋 확인");
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    // 버튼 눌렀을 때
    const onClick = () => {
        // console.log("버튼 확인");
        handleSearch();
    };
    return (
        <div className="movie__search">
            <div className="container">
                <input ref={inputRef} type="search" placeholder="검색하기" onKeyPress={onKeyPress} />
                <button type="submit" onClick={onClick}>
                    검색
                </button>
            </div>
        </div>
    );
};

export default MovieSearch;
