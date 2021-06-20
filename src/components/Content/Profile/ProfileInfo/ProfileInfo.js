import React from "react";
import s from "./ProfileInfo.module.css";

export default function ProfileInfo (props) {
    return (
        <div className={s.main}>
            <img className={s.profilePhoto} src="https://pcholic.ru/wp-content/uploads/2019/10/mount-and-river.jpg" alt=""/>
            <h1>Ava + subtitle</h1>
        </div>
    );
}