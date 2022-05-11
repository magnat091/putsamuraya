import React from "react";
import s from './Post.module.css';

const Post = (props) =>{
    //Пропсы приходят всегда
    return(
        <div>
            <div>
                <div className={s.item}>
                    <img src={props.img} alt={''}/>
                    {props.message}
                </div>
                <span>like:{props.like}</span>
            </div>
        </div>
    )
}


export default Post;
