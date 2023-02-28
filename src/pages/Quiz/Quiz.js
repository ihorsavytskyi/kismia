import React from "react";
import MainContainer from "../../components/Layout/MainContainer/MainContainer";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
import {QuizProvider} from "../../context/QuizContext";
import headerBg from "../../images/bg.png";
import "./Quiz.scss"
import Question from "../../components/Question/Question";


const Quiz = () => {

    return (
        <QuizProvider>
            <MainContainer pageName={"quiz-page"}>
                <HeadlineContainer>
                    <img className="image" src={headerBg} alt="Headline background"/>
                </HeadlineContainer>
                <Section classes={["column"]}>
                    <Question />
                    <Text
                        textAlign={"center"}
                        content={"Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов"}/>
                </Section>
            </MainContainer>
        </QuizProvider>
    )
}

export default Quiz