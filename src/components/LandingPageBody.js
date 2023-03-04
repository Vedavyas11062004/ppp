import React from 'react'
import globe from '../Asserts/Saly-44.svg'
export default function LandingPageBody() {
  return (
    <div className='LandingPage__body'>
      <div className='LandingPage__left'>
        <h1>Launch your best product through the Metaverse</h1>
        <p>we provide best service for your company product in real world</p>
        <button>Get Started</button>
      </div>
      <div className='LandingPage__right'>
        <img src={globe} alt='globe_img'></img>
      </div>
    </div>
  )
}
