import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import Image1 from "../../images/tabs/tab-1.jpg";
import Image2 from "../../images/tabs/tab-2.jpg";
import Image3 from "../../images/tabs/tab-3.jpg";

function Tab() {
    return (
        <div className="col-md">
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
                <Tab eventKey="first" title="First">
                    <Image src={Image1} alt="image one" />
                            <div className="tab-pane__info">
                                <p> Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                <div className="tab__social-media">
                                    <span className="share">Share</span>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                </Tab>
                <Tab eventKey="second" title="Second">
                <div className="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                <Image src={Image2} alt="image two" />
                            <div className="tab-pane__info">
                                <p> Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                <div className="tab__social-media">
                                    <span className="share">Share</span>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="third" title="Third">
                <div className="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                <Image src={Image3} alt="image three" />
                            <div className="tab-pane__info">
                                <p> Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                                <div className="tab__social-media">
                                    <span className="share">Share</span>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Tab;
