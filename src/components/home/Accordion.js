import React from "react";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Image1 from "../../images/tabs/tab-1.jpg";
import Image2 from "../../images/tabs/tab-2.jpg";
import Image3 from "../../images/tabs/tab-3.jpg";


function AccordionPage() {
    return (
        <>


                <Accordion defaultActiveKey="0" className="d-md-none">
                    <Card className="first">
                        <Card.Header className="firstt">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            First
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <div className="card-body">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>
                                <Image src={Image1} alt="image one" />
                                <div className="tab__social-media">
                                    <span className="share">Share</span>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="second">
                        <Card.Header className="secondd">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Second
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <div className="card-body">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>
                                <Image src={Image2} alt="image two" />
                                <div className="tab__social-media">
                                    <span className="share">Share</span>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="third">
                        <Card.Header className="thirdd">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Third
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <div className="card-body">
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </p>
                                <Image src={Image3} alt="image three" />
                                <div className="tab__social-media">
                                    <span className="share">Share</span>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
        </>
    )
}

export default AccordionPage;


