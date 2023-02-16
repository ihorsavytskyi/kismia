import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Questions from "../../components/Questions/Questions";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import headerBg from "../../images/bg.png";
const Quiz = () => {
    return (
        <MainContainer pageName={"quiz-page"}>
            <HeadlineContainer>
                <img className="image" src={headerBg} alt="Headline background"/>
            </HeadlineContainer>
            <Section>
                <Questions />
            </Section>
            <Section>
                <Text
                    textAlign={"center"}
                    content={"Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов"}/>
            </Section>
        </MainContainer>
    )
}

export default Quiz