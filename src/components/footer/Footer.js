import React from 'react'
import logo from '../img/home-logo.png'

function Footer() {
    return (
        <footer>
            <div className='footer__inner'>
                <div className='footer_title'>
                    <h1>Make your dreams a <span>reality</span></h1>
                    <button className='btn btn-org'><a>Work with us </a><i class="fas fa-long-arrow-alt-right"></i></button>
                </div>
                <div className='footer__bottom'>
                    <div className='footer-logo'>
                        <img src={logo} />
                        <ul>
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                    <div className='footer-links'>
                        <h3>Column Heading</h3>
                        <ul>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                        </ul>
                    </div>
                    <div className='footer-links'>
                        <h3>Column Heading</h3>
                        <ul>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                        </ul>
                    </div>
                    <div className='footer-links'>
                        <h3>Column Heading</h3>
                        <ul>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                            <li>Link goes here</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
