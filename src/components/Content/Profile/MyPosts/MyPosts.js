import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
    return (
        <div className={s.main}>
            <h2>My posts:</h2>
            <form action="">
                <input className={s.textarea} type="textarea" placeholder="Write your post here"/>
                <input className={s.button} type="submit"/>
            </form>
            <div className={s.list}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

