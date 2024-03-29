import './App.css';
import React from 'react';
import IndexPage from './Components/indexpage';

import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Loggedin from './Components/loggedin';
import LandingPage from './Components/landingAfterSignup';
import Clients from './Components/Clients';
import Dashboard from './Components/dashboard';
import Home from './Components/Home';
import Visitor from './Components/Visitor';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<IndexPage />}/>
      <Route path='/signin' element={<Login />}/>
      <Route path='/home' element={<IndexPage />}/>
      <Route path='/login' element={<Loggedin />}/>
      <Route path='/landing' element={<LandingPage />} />
      <Route path='/client' element={<Clients />}/>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/selectclienttype' element={<Home />}></Route>
      <Route path='/visitortype' element={<Visitor />}></Route>
    </Routes>
    </>
  );
}

export default App;
