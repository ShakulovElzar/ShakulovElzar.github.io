import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {

    const postElements = props.posts.map(el => <Post id={el.id} text={el.text} likes={el.likes}/>)

    let textAreaTarget = React.createRef();

    let addPost = () => {
        let text = textAreaTarget.current.value;
        props.addPost(text);
        textAreaTarget.current.value = "";
    }

    return (
        <div>
            <h2>My posts:</h2>
            <div className={s.form}>
                <textarea
                    onChange={(evt) => {
                        console.log("you have typed: ", evt.target.value)
                    }}
                    ref={textAreaTarget}
                    className={s.textarea}
                    placeholder="Write your post here"
                    name="area" id="postText" cols="100" rows="5"
                />
                <button onClick={addPost} className={s.button}>Add post</button>
            </div>
            <div className={s.list}>
                {postElements}
            </div>
        </div>
    )
}

