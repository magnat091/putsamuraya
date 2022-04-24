import React from "react";
import p from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return(
        <div className={p.content}>
            <div>
                <img src="https://img4.goodfon.ru/wallpaper/nbig/1/7c/kartinka-loshadi-liubov-serdechki.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
