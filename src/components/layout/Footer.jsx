import React from "react";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footer__inner">
            <div>
                <h3>email</h3>
                <a href="mailto:jeon__jiho@naver.com">jeon__jiho@naver.com</a>
            </div>
            <div>
            <h3>kakao</h3>
                <a href="/">Jeon Jiho</a>
            </div>
            <div>
                <h3>social</h3>
                <ul>
                    <li>
                        <a href="/">youtube</a>
                    </li>
                    <li>
                        <a href="/">instagram</a>
                    </li>
                    <li>
                        <a href="/">figma</a>
                    </li>
                    <li>
                        <a href="/">github</a>
                    </li>
                    <li>
                        <a href="/">blog</a>
                    </li>
                </ul>
            </div>
            </div>
    
        </footer>
    );
};

export default Footer;
