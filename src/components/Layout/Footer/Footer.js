import React from "react";
import {Link} from "react-router-dom";
import "./Footer.scss"
const Footer = () => {
    return (
        <footer>
            <nav className="footer-navigation">
                <Link className="footer-navigation-item" to={"/about-project"}>О проекте</Link>
                <Link className="footer-navigation-item" to={"/support"}>Поддержка</Link>
                <Link className="footer-navigation-item" to={"/about-us"}>О нас</Link>
            </nav>
        </footer>
    )
}

export default Footer