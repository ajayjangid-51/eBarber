import React , {useEffect, useState} from 'react'
import "./App.css"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom";
import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";
import Loader from "./components/loader/index";
import SignIn from './components/signInUp/SignIn';
import SignUp from './components/signInUp/SignUp';


const homi = "/home"


function App() {


  const [x , setX] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setX(false);
      
    }, 3000);
  })
  return (
    <div className="app">
      {x?<Loader/>:
      <div className="appMainView">
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/"  />
          <Route path="/home" element={<Home/>}  />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
      }
      <div className="appNavBar">
        <Link to={homi} >

        <HomeRoundedIcon className='appNavBarIcons' />
        </Link>
        <Link to="/map" >
        <RoomRoundedIcon className='appNavBarIcons' />
        </Link>
        <Link to="/xyxStore" >
        <StorefrontRoundedIcon className='appNavBarIcons' />
        </Link>
        <Link to="/chat" >

        <PermPhoneMsgRoundedIcon className='appNavBarIcons' />
        </Link>
        <Link to="/profile" >

        <PersonRoundedIcon className='appNavBarIcons' />
        </Link>
      </div>

    </div>
  )
}

export default App