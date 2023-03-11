import React from 'react'
import '../Styles/Sidebar.css'
import homelogo from '../Asserts/home.svg'
import profilelogo from '../Asserts/profile.svg'
import leetcodelogo from '../Asserts/leetcode.svg'
import githublogo from '../Asserts/github.svg'
import codeforceslogo from '../Asserts/code-forces.svg'
import logoutlogo from '../Asserts/box-arrow-left.svg'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
  return (
    <div className='sidebar' aria-expanded={props.expanded}>
      <ul>
        <li>
        <Link to='/' >
        <span><img src={homelogo} alt=''></img></span>
        Home
        </Link>
        </li>
        <li>
        <Link to='/codeforces'>
        <span><img src={codeforceslogo} alt=''></img></span>Codeforces
        </Link>
        </li>
        <li>
        <Link to='/github'>
        <span><img src={githublogo} alt=''></img></span>Github
        </Link>
        </li>
        <li>
        <Link to='/leetcode'>
        <span><img src={leetcodelogo} alt=''></img></span>Leetcode
        </Link>
        </li>
        <li>
        <Link to='/profile'>
        <span><img src={profilelogo} alt=''></img></span>Profile
        </Link>
        </li>
        <li className='logout'>
        <Link to='/'>
        <span><img src={logoutlogo} alt=''>
        </img></span>Logout
        </Link>
        </li>
      </ul>
    </div>
  )
}
