import React, {useEffect, useState} from "react";
import MainContainer from "../../components/Layout/MainContainer/MainContainer";
import Questions from "../../components/Questions/Questions";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import headerBg from "../../images/bg.png";
import "./Quiz.scss"
import {CSSTransition} from "react-transition-group";
import {motion as m} from "framer-motion";
const Quiz = () => {

    const [isPageLoaded, setPageLoaded] = useState(false)
    console.log(isPageLoaded)

    useEffect(() => {
        console.log(isPageLoaded)
        setPageLoaded(true)
    }, [])

    return (
        // <m.div initial={{ opacity: 0 }}
        //             animate={{ opacity: 1 }}
        //             transition={{ duration: 0.75 }}>
        <CSSTransition
            timeout={300}

            appear
        >

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
       {/*</m.div>*/}
        </CSSTransition>
    )
}

export default Quiz