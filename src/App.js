import logo from './logo.svg';
import './App.css';
import Home from "./components/home/home";
import Navigation from "./components/navigation/navigation";
import {Route, Routes} from "react-router-dom";
import Buy from "./components/buy/buy";
import About from "./components/about/about";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path="/buy" element={<Buy/>}/>
            </Routes>
            <About/>
        </div>
    );
}

export default App;
