import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";
import {Redirect} from "react-router-dom";

export default function Dialogs(props) {

    const DialogsElements = props.dialogs.map(el => <DialogItem avatarLink={el.avatarLink} id={el.id} name={el.name}/>)

    const DisplayChats = props.messages.map((item, i) => <Chat id={i} item={item}/>)

    let messageText = React.createRef()

    let onSendClick = () => {
        props.sendMessage()
    }

    let onMessageChange = () =>{
        let text = messageText.current.value
        props.updateMessageText(text)
    }


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
                    <div className={s.sendBlock}>
                        <textarea
                            className={s.textarea}
                            value={props.newMessageText}
                            onChange={onMessageChange}
                            ref={messageText}
                            id="area" cols="70" rows="5"/>
                        <button onClick={onSendClick} className={s.send}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}