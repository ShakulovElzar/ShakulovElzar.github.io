import React from "react";
import s from "./DIalogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink className={s.item} to={"/dialogs/" + props.id}><h2>{props.name}</h2></NavLink>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.text}</div>
}

export default function Dialogs() {
    const dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Vova"},
    ]

    const messagesData = [
        {id: 1, text: "Hi"},
        {id: 2, text: "What's up?"},
        {id: 3, text: "Yo, amazing!"},
    ]

    return (
        <div className={s.main}>
            <h2>Your dialogs:</h2>

            <div className={s.content}>
                <div className={s.list}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                </div>
                <div className={s.chat}>
                    <div className={s.messages}>
                        <Message text="Hi"/>
                        <Message text="What's up?"/>
                        <Message text="Yo, amazing!"/>
                    </div>
                </div>
            </div>
        </div>
    );
}