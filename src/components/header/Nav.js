import React, { Component } from 'react'
import logo from '../img/home-logo.png'

export class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <a href='/' className='header-logo'>
                    <img src={logo} />
                </a>

                <ul className='nav-menu'>
                    <li className='nav-item'><a className='nav-link' href='#'>Home</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>About us</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>Our projects</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>Contact</a></li>
                    <li className='nav-item work-with'><a className='nav-link' href='#'>Work with us <i class="fas fa-long-arrow-alt-right"></i></a></li>
                </ul>

            </div>
        )
    }
}

export default Nav
