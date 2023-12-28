import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero from '../../images/hero_1.jpg'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function Client(props) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel className={"slide"}>
            <Carousel.Item className={"client_slide"}>
                {/*<ExampleCarouselImage text="First slide" />*/}
                <img src={hero} className={"slide_img"}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="Second slide" />*/}
                <img src={hero} className={"slide_img"}/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="Third slide" />*/}
                <img src={hero} className={"slide_img"} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Client;