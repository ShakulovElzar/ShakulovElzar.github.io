import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={s.main}>
            <div className={s.list}>
                <h2><NavLink className={s.item} to="/Profile">Profile</NavLink></h2>
                <h2><NavLink className={s.item} to="/Dialogs">Dialogs</NavLink></h2>
                <h2><NavLink className={s.item} to="/News">News</NavLink></h2>
                <h2><NavLink className={s.item} to="/Music">Music</NavLink></h2>
                <h2><NavLink className={s.item} to="/Settings">Settings</NavLink></h2>
            </div>
        </div>
    );
}