import React, { Component } from 'react'
import './App.scss'
import ChoicePlace from './components/ChoicePlace'
import Footer from './components/footer/Footer'
import GoodHandsLeft from './components/GoodHandsLeft'
import GoodHandsRight from './components/GoodHandsRight'
import Header from './components/header'
import InfoBanner from './components/InfoBanner'
import Quote from './components/Quote'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <GoodHandsLeft />
        <ChoicePlace />
        <GoodHandsRight />
        <InfoBanner />
        <Quote />
        <Footer />
        {/* <div style={{height: '5000px'}}></div> */}
      </>
    )
  }
}

export default App
