import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";
import {Redirect} from "react-router-dom";

export default function Dialogs(props) {

    const DialogsElements = props.state.dialogs.map(el => <DialogItem avatarLink={el.avatarLink} id={el.id} name={el.name}/>)

    const DisplayChats = props.state.messages.map((item, i) => <Chat id={i} item={item}/>)

    return (
        <div className={s.main}>
            <h2>Your dialogs:</h2>

            <div className={s.content}>
                <div className={s.list}>
                    {DialogsElements}
                    <Redirect from="/Dialogs/" to="/Dialogs/1"/>
                </div>
                <div className={s.chat}>
                    {DisplayChats}
                </div>
            </div>
        </div>
    );
}