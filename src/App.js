import React, { Component } from 'react'
import './App.scss'
import ChoicePlace from './components/ChoicePlace'
import Footer from './components/footer/Footer'
import GoodHandsLeft from './components/GoodHandsLeft'
import GoodHandsRight from './components/GoodHandsRight'
import Header from './components/header'
import InfoBanner from './components/InfoBanner'
import Quote from './components/Quote'
import { Switch, Route } from 'react-router-dom'
import AboutUs from './components/pages/AboutUs'
import OurProjects from './components/pages/OurProjects'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/'>
            <GoodHandsLeft />
            <ChoicePlace />
            <GoodHandsRight />
            <InfoBanner />
            <Quote />
          </Route>
          <Route path='/about-us'>
            <AboutUs />
          </Route>
          <Route path='/gallery'>
            <OurProjects/>
          </Route>
        </Switch>        
        <Footer />
        {/* <div style={{height: '5000px'}}></div> */}
      </>
    )
  }
}

export default App
