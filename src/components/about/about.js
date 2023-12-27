import React from 'react';
import hero1 from "../../images/hero_1.jpg"

function About(props) {
    return (
        <div>
            <div className={"about"}>
                <div className={"about_img"}>
                    <img src={hero1} className={"about_img1"}/>
                </div>
                <div className={"about_content"}>
                    <div className={"auction head-how"}>
                        <h5>ABOUT?</h5>
                        <h2>About <span>Us</span></h2>
                    </div>
                    <div className={"support"}>
                        <div>
                            <h3>Fast Support</h3>
                            <span>It's lightning-fast customer support, ensuring that inquiries are satisfying user experience.</span>
                        </div>
                        <div>
                            <h3>Happy Customers</h3>
                            <span>Our Auction Website Delights Customers with Unique Finds and Seamless Bidding Experiences!</span>
                        </div>
                        <div>
                            <h3>24/7 Support</h3>
                            <span>Experience peace of mind with our auction website's 24/7 support!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;