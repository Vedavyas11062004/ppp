import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Codeforces from './Pages/Codeforces';
import LandingPage from './Pages/LandingPage'
import Leetcode from './Pages/Leetcode';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/codeforces' element={<Codeforces/>}></Route>
      <Route path='/leetcode' element={<Leetcode/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;
