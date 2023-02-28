import React from "react";
import style from "../HeadlineContainer/HeadlineContainer.module.scss";

const Image = ({...props}) => {
    return (
        <img className={style.image} src={props.src} alt={props.alt} width={props.width} height={props.height} styles={{

        }}/>
    )
}

export default Image