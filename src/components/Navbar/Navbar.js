import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={s.main}>
            <div className={s.list}>
                <h2><NavLink className={s.item} activeClassName={s.activeLink} to="/Profile">Profile</NavLink></h2>
                <h2><NavLink className={s.item} activeClassName={s.activeLink} to="/Dialogs">Dialogs</NavLink></h2>
                <h2><NavLink className={s.item} activeClassName={s.activeLink} to="/News">News</NavLink></h2>
                <h2><NavLink className={s.item} activeClassName={s.activeLink} to="/Music">Music</NavLink></h2>
                <h2><NavLink className={s.item} activeClassName={s.activeLink} to="/Settings">Settings</NavLink></h2>
            </div>
        </div>
    );
}