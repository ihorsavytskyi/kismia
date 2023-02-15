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
        navigate("/quiz")
    }

    return (
        <>
            <MainContainer>
                <h1>Наибольшая база анкет для знакомств</h1>
                <Section alignment={"column"}>
                    <Button icon={maleIcon} text={"Я мужчина"} handleClick={handleClick}/>
                    <Button icon={femaleIcon} text={"Я женщина"} handleClick={handleClick}/>
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