import React from 'react';
import s from './Content.module.css';
import {Route, Redirect} from 'react-router-dom';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

export default function Content() {
    return (
        <div className={s.main}>
            <Route path="/profile" component={Profile}/>
            <Route path="/Dialogs" component={Dialogs}/>
            <Route path="/News" component={News}/>
            <Route path="/Music" component={Music}/>
            <Route path="/Settings" component={Settings}/>
            <Redirect from='/' to='/Profile'/>
        </div>
    );
}