import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Profile(props) {

    return (
        <div className={s.main}>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    );
}