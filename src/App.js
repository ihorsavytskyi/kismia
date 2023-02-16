import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Quiz from "./pages/Quiz/Quiz";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <>
      <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
                <Route path="/registration" element={<Registration/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
