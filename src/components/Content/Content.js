import React from 'react';
import s from './Content.module.css';
import {Route, Redirect} from 'react-router-dom';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

export default function Content(props) {
    return (
        <div className={s.main}>
            <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
            <Route path="/Dialogs" render={() => <Dialogs state={props.state.dialogsPage} />}/>
            <Route path="/News" render={() => <News/>}/>
            <Route path="/Music" render={() => <Music/>}/>
            <Route path="/Settings" render={() => <Settings/>}/>
            <Redirect from='/' to='/Profile'/>
        </div>
    );
}