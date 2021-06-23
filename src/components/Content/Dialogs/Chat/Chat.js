import React from 'react';
import s from '../Dialogs.module.css';
import Message from "./Message/Message";
import {Route} from "react-router-dom";

export default function Chat(props) {
    return (
        <div className={s.chatWrapper}>
            <Route path={`/Dialogs/${props.id + 1}`}
                   render={() => props.item.map(el => <Message id={el.id} text={el.text}/>)}
            />
        </div>
    )
}

