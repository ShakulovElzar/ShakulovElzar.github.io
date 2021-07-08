import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

export default function DialogsContainer(props) {

    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let updateMessageText = (text) =>{
        props.store.dispatch(onMessageChangeActionCreator(text))
    }

    return <Dialogs
        updateMessageText={updateMessageText}
        sendMessage={sendMessage}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        newMessageText={state.dialogsPage.newMessageText}
    />
}