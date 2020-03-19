import React from 'react'
import './App.css'

import Wrapper from './components/Wrapper'
import LightEffect from './components/LightEffect'
import Card, { FRONT_CARD_CLASS, BACK_CARD_CLASS } from './components/Card'

const layoutRef = React.createRef()
const lightRef = React.createRef()

function App() {
  return (
    <Wrapper onMouseMove={(e) => doTranslateEffect(e)} ref={layoutRef}>
      <LightEffect ref={lightRef}/>
      <Card 
        className={FRONT_CARD_CLASS}
        companyName="Mistery Science"
      />
      <Card 
        className={BACK_CARD_CLASS}
        name="Gordon Freeman"
        position="Research Associate"
        phone="(000) 000-1234"
        website="misteryscience.com"
        email="gfm@misteryscience.com"
        address="54 Leeton Ridge Brooklin NY 11218"
      />
    </Wrapper>
  )
}

function doTranslateEffect(e) {
  layoutRef.current.style.transform = `translate(-${e.clientX*0.01}px, -${e.clientY*0.01}px)`
  lightRef.current.style.transform = `translate(-${e.clientX*0.1}px, -${e.clientY*0.1}px)`
}

export default App
