import React from 'react'

function InfoPage() {
    return (
        <>

                    <div className="col-md-6 order-md-2 contact--info">
                        <div className="info">
                            <div className="info__item info__item--email">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span>hello@yay.com</span>
                            </div>
                            <div className="info__item info__item--phone">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span>123 456 7890</span>
                            </div>
                            <div className="info__item info__item--address">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span className="address">
                                    <span>123 Street Home</span>
                                    <span>Somewhere</span>
                                    <span>Some City</span>
                                    <span>10000</span>
                                </span>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default InfoPage
