import React from 'react';
import logo from '../../images/logo.png'
import product1 from '../../images/product_1.jpg'
import product2 from '../../images/product_2.jpg'
import product3 from '../../images/product_3.jpg'
import product4 from '../../images/product_4.jpg'
import product5 from '../../images/product_5.jpg'
import product6 from '../../images/product_6.jpg'
import product7 from '../../images/product_7.jpg'
import product8 from '../../images/product_8.jpg'


function Home(props) {
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
                    <li className="li"><a href="home.html" className="a">Home</a></li>
                    <li className="li"><a href="about.html" className="a">Buy</a></li>
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
        <div className={"home_header"}>
            <h1 className={"homepara1"}>The best place to Buy and Sell</h1>
            <p className={"para2"}>The #1 Marketplace for Auction websites and online businesses</p>
            <button className={"btn btn-primary register"}>Register</button>
        </div>
        </div>
            <div className={"auction-product"}>
            <div className={"auction"}>
                <h5>AUCTIONS</h5>
                <h2>Current <span>Auctions</span></h2>
            </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}>$95</strong>
                            <img src={product1} className="card-img-top product" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Pinky <br/>Shoes</h5>
                                    <div className={"name"}>
                                    <span>Shoes</span>
                                    <span>4 bids</span>
                                    </div>
                                    <a href="item-single.html" className="btn btn-bid">Submit a Bid</a>

                                </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}>$30</strong>
                            <img src={product2} className="card-img-top product" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Eye Glass Eye Protector</h5>
                                <div className={"name"}>
                                    <span>Eye Glasses</span>
                                    <span>10 bids</span>
                                </div>
                                <a href="item-single.html" className="btn btn-bid">Submit a Bid</a>

                            </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}>$195</strong>
                            <img src={product3} className="card-img-top product" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Eye Glass Eye Protector</h5>
                                <div className={"name"}>
                                    <span>Clothing</span>
                                    <span>24 bids</span>
                                </div>
                                <a href="item-single.html" className="btn btn-bid">Submit a Bid</a>

                            </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}>$1,995</strong>
                            <img src={product4} className="card-img-top product" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">MacBook 15-Inch Laptop</h5>
                                <div className={"name"}>
                                    <span>Laptop</span>
                                    <span>4 bids</span>
                                </div>
                                <a href="item-single.html" className="btn btn-bid">Submit a Bid</a>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}>$95</strong>
                            <img src={product5} className="card-img-top product" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">iPad</h5>
                                <div className={"name"}>
                                    <span>Electronics</span>
                                    <span>11 bids</span>
                                </div>
                                <a href="item-single.html" className="btn btn-bid">Submit a Bid</a>

                            </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}>$30</strong>
                            <img src={product6} className="card-img-top product" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Shoe Sneakers</h5>
                                <div className={"name"}>
                                    <span>Shoes</span>
                                    <span>4 bids</span>
                                </div>
                                <a href="item-single.html" className="btn btn-bid">Submit a Bid</a>

                            </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}>$195</strong>
                            <img src={product7} className="card-img-top product" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">iMac</h5>
                                <div className={"name"}>
                                    <span>Electronics</span>
                                    <span>224 bids</span>
                                </div>
                                <a href="item-single.html" className="btn btn-bid">Submit a Bid</a>

                            </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}>$1,995</strong>
                            <img src={product8} className="card-img-top product" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">iWatch</h5>
                                <div className={"name"}>
                                    <span>Electronics</span>
                                    <span>194 bids</span>
                                </div>
                                <a href="item-single.html" className="btn btn-bid">Submit a Bid</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;