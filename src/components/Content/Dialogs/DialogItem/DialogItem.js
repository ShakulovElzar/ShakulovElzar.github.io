import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink activeClassName={s.active} className={s.item} to={"/dialogs/" + props.id}>
            <img className={s.avatar} src={props.avatarLink} alt=""/>
            <h2>{props.name}</h2>
        </NavLink>
    )
}

export default DialogItem;