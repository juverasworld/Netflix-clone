import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Login from './screens/Login';
import { auth } from './firebase';
import Profile from "./screens/Profile";
import { logout, login, selectUser } from './features/counter/userSlice';
// import Homescreen from './screens/Homescreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unSubscribed = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          }))
      } else {
        dispatch(logout)
      }

    })
    return unSubscribed;
  }, [])
  return (
    <div className="App">
      {/* <Homescreen /> */}
      <Router>
        {!user ? (
          <Login />
        ) : (

          <Routes>
            <Route path='/' element={<Homescreen />}>
              <Route path="Profile" element={<Profile />} />
            </Route>
          </Routes>
        )}
      </Router>

    </div>
  );
}

export default App;
