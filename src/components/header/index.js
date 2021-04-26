import React, { Component } from 'react'
import Banner from './Banner'
import Nav from './Nav'
import bannerImg from '../img/banner.jpg'

export class index extends Component {

    state = {
        scrolled: false
    }

    handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 100 ){
          this.setState({scrolled: true})
        }
        else{
            this.setState({scrolled: false})
        }
      }

      

    render() {
        window.addEventListener('scroll',this.handleScroll)
        return (
            <div className={this.state.scrolled ? 'header header--sticky' : 'header'}>
               <Nav /> 
               <Banner bgImg={bannerImg} />
            </div>
        )
    }
}

export default index
