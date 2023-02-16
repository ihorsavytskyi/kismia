import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Questions from "../../components/Questions/Questions";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
const Quiz = () => {
    return (
        <MainContainer>
            <Questions />
            <Section>
                <Text
                    textAlign={"center"}
                    content={"Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов"}/>
            </Section>
        </MainContainer>
    )
}

export default Quiz