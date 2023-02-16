import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Header from "./components/Header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Quiz from "./pages/Quiz/Quiz";
import Registration from "./pages/Registration/Registration";

function App() {
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
