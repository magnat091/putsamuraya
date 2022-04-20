import React from "react";
import './App.css';
import Header from './components/header'
import Nav from "./components/navbar";
import Profile from "./components/profile";

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
