import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Welcome from "../../pages/Welcome/Welcome";
import Quiz from "../../pages/Quiz/Quiz";
import Registration from "../../pages/Registration/Registration";
const AnimationPagesTransition = () => {

    const location = useLocation()
    return (
        <TransitionGroup>
            <CSSTransition
                key = {location.pathname}
                timeout ={300}
                classNames={{
                    enterActive: 'loading',
                    enterDone: 'loaded',
                    exit: 'hide'
                }}>
                <Routes location={location}>
                    <Route path="/kismia" element={<Welcome/>}/>
                    <Route path="/kismia/quiz" element={<Quiz/>}/>
                    <Route path="/kismia/registration" element={<Registration/>}/>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default AnimationPagesTransition