import React from "react";

// div 4개를 mainInfo에 저장
const mainInfo = [
    {
        text: "When you",
    },
    {
        text: "have faults,",
    },
    {
        text: "do not fear",
    },
    {
        text: "of abandon them",
    },
];

const MainText = ({text}) => {
    return <div>{text}</div>;
};

const MainCont = () => {
    return (
        <section className="cont__main">
            <div className="container">
                <div className="main__inner">
                    <div>
                        {/* mainInfo에 저장된 text를 가져온다. */}
                        {mainInfo.map((text) => (
                            <MainText text={text.text} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainCont;
