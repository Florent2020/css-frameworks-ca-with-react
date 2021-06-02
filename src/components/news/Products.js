import React from 'react';
import Image from 'react-bootstrap/Image';
import Image1 from "../../images/news/news-1.png";
import Image2 from "../../images/news/news-2.png";
import Image3 from "../../images/news/news-3.png";
import Image4 from "../../images/news/news-4.png";
import Image5 from "../../images/news/news-5.png";
import Image6 from "../../images/news/news-6.png";
import Image7 from "../../images/news/news-7.png";
import Image8 from "../../images/news/news-8.png";

function Products() {
    return (
        <div>
             <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card product">
                            <Image src={Image1} className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">Nunc porttitor vel</h5>
                            <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                            <a href="/" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card product">
                            <Image src={Image2} className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">Nunc porttitor vel</h5>
                            <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                            <a href="/" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card product">
                            <Image src={Image3} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Nunc porttitor vel</h5>
                                <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                                <a href="/" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card product">
                            <Image src={Image4} className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">Nunc porttitor vel</h5>
                            <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                            <a href="/" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card product">
                            <Image src={Image5} className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">Nunc porttitor vel</h5>
                            <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                            <a href="/" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card product">
                            <Image src={Image6} className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">Nunc porttitor vel</h5>
                            <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                            <a href="/" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card product">
                            <Image src={Image7} className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">Nunc porttitor vel</h5>
                            <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                            <a href="/" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card product">
                            <Image src={Image8} className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">Nunc porttitor vel</h5>
                            <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                            <a href="/" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Products
