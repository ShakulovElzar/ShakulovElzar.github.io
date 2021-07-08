import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {

    const postElements = props.posts.map(el => <Post id={el.id} text={el.text} likes={el.likes}/>)

    let textAreaTarget = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onAreaChange = () => {
        let text = textAreaTarget.current.value;
        props.updateTextArea(text);
    }

    return (
        <div>
            <h2>My posts:</h2>
            <div className={s.form}>
                <textarea
                    onChange={onAreaChange}
                    ref={textAreaTarget}
                    className={s.textarea}
                    value={props.areaText}
                    name="area" id="postText" cols="100" rows="5"
                />
                <button onClick={onAddPost} className={s.button}>Add post</button>
            </div>
            <div className={s.list}>
                {postElements}
            </div>
        </div>
    )
}

