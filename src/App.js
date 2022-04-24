import React from "react";
import './App.css';
import Header from './components/Header/header'
import Nav from "./components/Nav/navbar";
import Profile from "./components/Profile/profile";

const App = () => {
  return (
    <div className={'app_wrapper'}>
        <Header />
        <Nav/>
        <Profile/>
    </div>
  );
}



export default App;
