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
                    content={"З метою підібрати Вам ідеальну пару, Ви маєте відповісти на декілька питань"}/>
            </Section>
        </MainContainer>
    )
}

export default Quiz