import React from "react";
import MainContainer from "../../components/Layout/MainContainer/MainContainer";
import Questions from "../../components/Questions/Questions";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import headerBg from "../../images/bg.png";
import "./Quiz.scss"
// import {motion as m} from "framer-motion";
const Quiz = () => {
    return (
        // <m.div
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     transition={{ duration: 0.75 }}>
        <MainContainer pageName={"quiz-page"}>
            <HeadlineContainer>
                <img className="image" src={headerBg} alt="Headline background"/>
            </HeadlineContainer>
            <Section classes={["column"]}>
                <Questions />
                <Text
                    textAlign={"center"}
                    content={"Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов"}/>
            </Section>
        </MainContainer>
        // </m.div>
    )
}

export default Quiz