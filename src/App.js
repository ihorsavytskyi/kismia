import React, {useState,useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Quiz from "./pages/Quiz/Quiz";
import Registration from "./pages/Registration/Registration";
import "./App.css";

function App() {

    // const [scrollTop, setScrollTop] = useState(0);

    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         setScrollTop(window.scrollY);
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/kismia" element={<Welcome/>}/>
                    <Route path="/kismia/quiz" element={<Quiz/>}/>
                    <Route path="/kismia/registration" element={<Registration/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
