import logo from './logo.svg';
import './App.css';
import Home from "./components/home/home";
import Navigation from "./components/navigation/navigation";
import {Route, Routes} from "react-router-dom";
import Buy from "./components/buy/buy";
import About from "./components/about/about";
import Client from "./components/client/client";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path="/buy" element={<Buy/>}/>
            </Routes>
            <About/>
            <Client/>
        </div>
    );
}

export default App;
