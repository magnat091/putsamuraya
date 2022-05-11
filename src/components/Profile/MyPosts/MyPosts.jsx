import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) =>{

    let postsElements = props.posts.map((post) => <Post message={post.message} like={post.likescount} img={post.img}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }


    return(
        <div className={s.myposts}>
            <div>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} defaultValue={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>
    )
}

export default MyPosts;
