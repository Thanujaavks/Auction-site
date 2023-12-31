import React from 'react';
import logo from "../../images/logo.png";
import Buy from "../buy/buy";
import {Link} from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <div className={"homecontainer"}>
            <nav>
                <div className={"nav_bar"}>
                    <div className="nav_container">

                        <ul className="nav_content">
                            <div className={"nav_logo"}>
                                <img src={logo}/>
                            </div>
                            <li className="li"><a className="a">Home</a></li>
                            <li className="li"><Link to="/buy" className="a">Buy</Link></li>
                            <li className="li"><a className="a">Sell</a></li>
                            <li className="li"><a className="a">Services</a></li>
                            <li className="li"><a  className="a"> About</a></li>
                            <li className="li"><a  className="a">Contact</a></li>
                            <div className={"signin"}>
                                <li><a href={""} className={"a b"}> Sign in/Register</a></li>
                            </div>
                        </ul>
                        <div className={"home_header"}>
                            <h1 className={"homepara1"}>The best place to Buy and Sell</h1>
                            <p className={"para2"}>The #1 Marketplace for Auction websites and online businesses</p>
                            <button className={"btn btn-primary register"}>Register</button>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
}

export default Navigation;