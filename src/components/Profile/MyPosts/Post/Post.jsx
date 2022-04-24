import React from "react";
import s from './Post.module.css';

const MyPosts = () =>{
    return(
        <div>
            <div>
                <div className={s.item}>
                    <img src={'https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380'}/>
                    post1
                </div>
                <span>like</span>
                <span></span>
            </div>

        </div>
    )
}

export default MyPosts;
