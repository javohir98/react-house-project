import React, { Component } from 'react'
import logo from '../img/home-logo.png'
import { Link } from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <Link to='/' className='header-logo'>
                    <img src={logo} />
                </Link>

                <ul className='nav-menu'>
                    <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/about-us'>About us</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/gallery'>Our gallery</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/contact'>Contact</Link></li>
                    <li className='nav-item work-with'><Link className='nav-link' to='/cooperation'>Work with us <i class="fas fa-long-arrow-alt-right"></i></Link></li>
                </ul>

            </div>
        )
    }
}

export default Nav
