import React from "react";
import MainContainer from "../../components/Layout/MainContainer/MainContainer";
import Footer from "../../components/Layout/Footer/Footer";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import Section from "../../components/Section/Section";
import Form from "../../components/Form/Form";
import Text from "../../components/Text/Text";
import headerBg from "../../images/bg.png";
import "./Registration.scss"

const Registration = () => {

    return (
        <>
            <MainContainer pageName={"registration-page"}>
                <HeadlineContainer>
                    <img className="image" src={headerBg} alt="Headline background"/>
                </HeadlineContainer>
                <Section classes={["column", "title"]}>
                    <h1 className="title">Создать анкету</h1>
                    <Text
                        textAlign={"center"}
                        content={"Быстрая регистрация, чтоби перейти к общению"}/>
                </Section>
                <Section classes={["column", "register-form"]}>
                   <Form />
                </Section>
            </MainContainer>
            <Footer/>
        </>

    )
}

export default Registration