import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

export default function Dialogs() {
    const dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Vova"},
    ]

    const DialogsElements = dialogs.map(el => <DialogItem id={el.id} name={el.name} />)

    const messages = [
        {id: 1, text: "Hi"},
        {id: 2, text: "What's up?"},
        {id: 3, text: "Yo, amazing!"},
    ]

    const messagesElements = messages.map(el => <Message id={el.id} text={el.text} />)



    return (
        <div className={s.main}>
            <h2>Your dialogs:</h2>

            <div className={s.content}>
                <div className={s.list}>
                    {DialogsElements}
                    <Redirect from="/Dialogs/" to="/Dialogs/1"/>
                </div>
                <div className={s.chat}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}