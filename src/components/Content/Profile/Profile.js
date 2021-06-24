import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

export default function Profile(props) {

    return (
        <div className={s.main}>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} posts={props.state.posts} />
        </div>
    );
}