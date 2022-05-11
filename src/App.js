import React from "react";
import './App.css';
import Header from './components/Header/header'
import Nav from "./components/Nav/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs";
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Musics from "./components/Musics/musics";
import Settings from "./components/Settings/settings";

const App = (props) => {
    return (
        <div className={'app_wrapper'}>
            <Header />
            <Nav sidebarElem = {props.state.sidebarPage.sidebarData}/>
            <div className={'app_wrapper-content'}>
                <Routes>
                    <Route path="/profile" element = {<Profile posts = {props.profilePage.posts} dispatch={props.dispatch} newPostText={props.newPostText} updateNewPostText={props.dispatch} />}/>
                    <Route exact path="/dialogs" element = {<Dialogs dialogsData = {props.profilePage.dialogsData} messagesData = {props.state.messagesPage.messagesData} dispatch={props.dispatch} />}/>
                    <Route path="/musics" element = {<Musics />}/>
                    <Route path="/settings" element = {<Settings />}/>
                </Routes>
            </div>
        </div>
    );
}



export default App;
