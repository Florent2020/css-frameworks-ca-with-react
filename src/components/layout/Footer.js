import React from 'react'

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer__item--social-media">
                        <i className="fa fa-vimeo" aria-hidden="true"></i>
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                    <div className="footer__item--email">
                        <p>hello@yay.com</p>
                        <p>Copyright 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
