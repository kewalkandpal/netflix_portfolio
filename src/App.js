import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './component/HomeScreen';
import Login from './component/Login';
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import auth  from './firebase/firebase';
import { logIN, logOut } from './reducer/userAuth';
import { useDispatch } from 'react-redux';
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Profile from './component/Profile';

function App() {
  const userActive = useSelector((user) => user.userStore.user);
  const dispatch = useDispatch();

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(logIN({
          user: user.email
        }))
      } else {
        dispatch(logOut())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
        <Router>
        {
          !userActive ? (
            <Login />
          ) : (
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          )
        }
    </Router>
      </div>
  );
}

export default App;
