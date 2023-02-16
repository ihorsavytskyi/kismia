import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Posts from "../../components/Posts/Posts";
import maleIcon from "../../images/icons/m_icon.svg"
import femaleIcon from "../../images/icons/f_icon.svg"
import { useData } from "../../helpers/DataContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Welcome.scss";
import Section from "../../components/Section/Section";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
// import Image from "../../components/Image/Image";
import headerBg from "../../images/bg.png"

const Welcome = () => {

    const navigate = useNavigate()
    const { data, setValues } = useData()

    console.log(data)
    const handleClick = (value) => {
        console.log(value)
        setValues(value => (
            {
                "gander": value
            }
        ))
        navigate("/kismia/quiz")
    }

    return (
        <>
            <MainContainer pageName={"welcome-page"}>
                <HeadlineContainer>
                    <img className="image" src={headerBg} alt="Headline background"/>
                </HeadlineContainer>
                <Section alignment={"column"}>
                    {/*make component headline*/}
                    <h1>НАйбільша база анкет для знайомств</h1>
                </Section>
                <Section alignment={"column"}>
                    <Button icon={maleIcon} text={"Я чоловік"} handleClick={handleClick}/>
                    <Button icon={femaleIcon} text={"Я жінка"} handleClick={handleClick}/>
                </Section>
                <Section alignment={"column"} gap={20}>
                    <Posts/>
                </Section>

            </MainContainer>
            {/*<Footer/>*/}
        </>

    )
}

export default Welcome