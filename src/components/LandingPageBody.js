import React from 'react'
import globe from '../Asserts/Saly-44.svg'
export default function LandingPageBody() {
  return (
    <div className='LandingPage__body'>
      <div className='LandingPage__left'>
        <h1>Join the leaderboard community and stay up-to-date with the latest rankings</h1>
        <p>achievements, and impressive performances, fueling your competitive spirit and inspiring your own journey to the top</p>
        <button>Get Started</button>
      </div>
      <div className='LandingPage__right'>
        <img src={globe} alt='globe_img'></img>
      </div>
    </div>
  )
}
