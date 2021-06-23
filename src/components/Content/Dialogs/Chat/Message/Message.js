import React from "react";
import s from "../../Dialogs.module.css";
import "./Message.css"

const Message = (props) => {
    let fromWho = "toLeft";

    if(props.id == 1){
        fromWho = "toRight";
    }

    return <div className={fromWho}><span className={s.message}>{props.text}</span></div>
}

export default Message