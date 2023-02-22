import React from "react";
import {BrowserRouter} from "react-router-dom";
import AnimationPagesTransition from "./components/AnimationPageTransition/AnimationPagesTransition";

import "./App.css";

function App() {

    return (
        <>
            <BrowserRouter>
                    <AnimationPagesTransition />
            </BrowserRouter>
        </>
    );
}

export default App;
