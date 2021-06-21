import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
    const posts = [
        {id: 1, text: "Hi, how are you", likes: 12},
        {id: 2, text: "Hey there", likes: 32},
        {id: 3, text: "I won", likes: 124},
        {id: 4, text: "I did my first job", likes: 2},
    ]

    const postElements = posts.map(el => <Post id={el.id} text={el.text} likes={el.likes} />)

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

