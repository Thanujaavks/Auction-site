import React from 'react';
import hero from '../../images/hero_1.jpg'
import person1 from '../../images/person_1.jpg'
import person2 from '../../images/person_2.jpg'
import person3 from '../../images/person_3.jpg'
import person4 from '../../images/person_4.jpg'


// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function Client(props) {

    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className={"slide_color"}>
                        <div className="carousel-item active">
                            <span>TESTIMONIALS</span>
                            <h2>Happy Clients</h2>
                            <div className={"slide_content"}>
                                <div>
                                    <div className={"client_img"}>
                                        <img src={person1} className={"client_img1"}/>
                                        <div>
                                            <h4>Allison Holmes</h4>
                                            <h5>Designer</h5>
                                        </div>
                                    </div>
                                    <div className={"client_intro"}>
                                        <p>
                                            “I've been using this auction website for years, and I've never been
                                            disappointed. The variety of items available is impressive, and I've managed
                                            to add some unique pieces to my collection. The user-friendly interface and
                                            secure payment options make it my go-to platform for all things auctions.”
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={"client_img"}>
                                        <img src={person1} className={"client_img1"}/>
                                        <div>
                                            <h4>Allison Holmes</h4>
                                            <h5>Designer</h5>
                                        </div>
                                    </div>
                                    <div className={"client_intro"}>
                                        <p>
                                            “I've been using this auction website for years, and I've never been
                                            disappointed. The variety of items available is impressive, and I've managed
                                            to add some unique pieces to my collection. The user-friendly interface and
                                            secure payment options make it my go-to platform for all things auctions.”
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h5>add</h5>
                    </div>
                    <div className="carousel-item">
                        <h3>avda</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;