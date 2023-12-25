import React from 'react';
import logo from "../../images/logo.png";
import Buy from "../buy/buy";

function Navigation(props) {
    return (
        <div>
            <nav>
                <div className={"nav_bar"}>
                    <div className="nav_container">

                        <ul className="nav_content">
                            <div className={"nav_logo"}>
                                <img src={logo}/>
                            </div>
                            <li className="li"><a href="home.html" className="a">Home</a></li>
                            <li className="li"><a href={Buy} className="a">Buy</a></li>
                            <li className="li"><a href="about.html" className="a">Sell</a></li>
                            <li className="li"><a href="about.html" className="a">Services</a></li>
                            <li className="li"><a href="service.html" className="a"> About</a></li>
                            <li className="li"><a href="project.html" className="a">Contact</a></li>
                            <div className={"signin"}>
                                <li><a href={""} className={"a b"}> Sign in/Register</a></li>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;