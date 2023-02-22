import React from "react";
import MainContainer from "../../components/Layout/MainContainer/MainContainer";
import Footer from "../../components/Layout/Footer/Footer";
import Posts from "../../components/Posts/Posts";
import maleIcon from "../../images/icons/m_icon.svg"
import femaleIcon from "../../images/icons/f_icon.svg"
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Welcome.scss";
import Section from "../../components/Section/Section";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import headerBg from "../../images/bg.png"

const Welcome = () => {

    const navigate = useNavigate()
    const { data, setValues } = useData()

    const handleClick = (value) => {
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
                <Section classes={["column", "title"]}>
                    <h1>Наибольшая база анкет для знакомств</h1>
                </Section>
                <Section classes={["column"]}>
                    <Button icon={maleIcon} text={"Я мужчина"} handleClick={handleClick}/>
                    <Button icon={femaleIcon} text={"Я женщина"} handleClick={handleClick}/>
                </Section>
                <Section classes={["column", "posts"]}>
                    <Posts/>
                </Section>

            </MainContainer>
            <Footer />
        </>

    )
}

export default Welcome