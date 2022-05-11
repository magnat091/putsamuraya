import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";


const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
                     dispatch={props.dispatch}
            />
        </div>
    )
}


export default Profile;
