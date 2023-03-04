import React from 'react'
import Header from '../components/Header'
import LandingPageBody from '../components/LandingPageBody'
import '../Styles/Landingstyles.css'

export default function LandingPage() {
  return (
    <div className='Landingpage__container'>
      <Header/>
      <LandingPageBody/>
    </div>
  )
}
