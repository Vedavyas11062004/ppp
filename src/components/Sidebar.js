import React from 'react'
import '../Styles/Sidebar.css'
import homelogo from '../Asserts/home.svg'
import profilelogo from '../Asserts/profile.svg'
import leetcodelogo from '../Asserts/leetcode.svg'
import githublogo from '../Asserts/github.svg'
import codeforceslogo from '../Asserts/code-forces.svg'
import logoutlogo from '../Asserts/box-arrow-left.svg'

export default function Sidebar(props) {
  return (
    <div className='sidebar' aria-expanded={props.expanded}>
      <ul>
        <li><span><img src={homelogo} alt=''></img></span>Home</li>
        <li><span><img src={codeforceslogo} alt=''></img></span>Codeforces</li>
        <li><span><img src={githublogo} alt=''></img></span>Github</li>
        <li><span><img src={leetcodelogo} alt=''></img></span>Leetcode</li>
        <li><span><img src={profilelogo} alt=''></img></span>Profile</li>
        <li className='logout'><span><img src={logoutlogo} alt=''></img></span>Logout</li>
      </ul>
    </div>
  )
}
