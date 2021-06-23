import React from 'react';
import s from '../Navbar.module.css';

export default function FriendsItem (props) {
    return(
        <div className={s.friendsItem}>
            <img className={s.logo} src={props.photoLink} alt="logo"/>
            <span className={s.friendsName}>{props.name}</span>
        </div>
    )
}