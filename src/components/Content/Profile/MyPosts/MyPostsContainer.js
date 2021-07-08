import React from "react";
import {addPostActionCreator, onAreaChangeActionCreator} from "../../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";

export default function MyPostsContainer(props) {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateTextArea = (text) => {
        props.store.dispatch(onAreaChangeActionCreator(text));
    }
    return <MyPosts addPost={addPost} areaText={state.profilePage.areaText} updateTextArea={updateTextArea} posts={state.profilePage.posts}/>
}

