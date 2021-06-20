import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
    return (
        <div className={s.main}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}