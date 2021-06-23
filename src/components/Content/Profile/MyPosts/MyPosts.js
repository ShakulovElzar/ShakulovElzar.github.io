import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {

    const postElements = props.posts.map(el => <Post id={el.id} text={el.text} likes={el.likes} />)

    return (
        <div className={s.main}>
            <h2>My posts:</h2>
            <form action="">
                <input className={s.textarea} type="textarea" placeholder="Write your post here"/>
                <input className={s.button} type="submit"/>
            </form>
            <div className={s.list}>
                {postElements}
            </div>
        </div>
    )
}

