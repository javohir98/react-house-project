import React, { Component } from 'react'
import Banner from './Banner'
import Nav from './Nav'
import { Switch, Route } from 'react-router-dom'
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
                
                <Switch>
                    <Route exact path="/">
                        <Nav />
                        <Banner bgImg={bannerImg} />
                    </Route>
                    <Route>
                        <Nav />
                        <div className='nav-other'>
                        </div>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default index
