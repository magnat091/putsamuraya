import React from "react";
import Post from "./Post/Post";

const MyPosts = () =>{
    return(
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>

        </div>
    )
}

export default MyPosts;
