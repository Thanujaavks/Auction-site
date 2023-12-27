import React from 'react';
import product1 from '../../images/product_1.jpg'
import product2 from '../../images/product_2.jpg'
import product3 from '../../images/product_3.jpg'
import product4 from '../../images/product_4.jpg'
import product5 from '../../images/product_5.jpg'
import product6 from '../../images/product_6.jpg'
import product7 from '../../images/product_7.jpg'
import product8 from '../../images/product_8.jpg'
import Navigation from "../navigation/navigation";


function Home(props) {
    return (
        <div>
            <Navigation/>


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
            <div className={"how"}>
                <div className={"auction head-how"}>
                    <h5>How?</h5>
                    <h2>How <span>It works</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}></strong>
                            <div className="card-body content">
                                <h5 className="card-title">Register</h5>
                                <div className={"how-work name"}>
                                    <span>Sign up easily to access our auction platform and start your bidding journey.</span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}></strong>
                            <div className="card-body content">
                                <h5 className="card-title">Buy or Bid</h5>
                                <div className={"how-work name"}>
                                    <span>Explore the items available for auction and decide whether to make a direct purchase or place a bid.</span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}></strong>
                            <div className="card-body content">
                                <h5 className="card-title">Submit a bid</h5>
                                <div className={"how-work name"}>
                                    <span>Participate actively by entering your bid for the item you're interested in acquiring.</span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col product_card">
                        <div className="card h-100 product-content">
                            <strong className={"price"}></strong>
                            <div className="card-body content">
                                <h5 className="card-title">Win</h5>
                                <div className={"how-work name"}>
                                    <span>Experience the excitement of winning an auction and securing the item at the best possible price.</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;