import React from "react";
import headerBg from "../../images/bg.png"
import style from "./Header.module.scss"
const Header = () => {
    return (
        <header>
            <img className={style.image} src={headerBg} alt="Headline background"/>
        </header>
    )
}

export default Header