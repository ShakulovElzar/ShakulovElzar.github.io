import React from 'react';
import s from './Content.module.css';
import {Route, Redirect} from 'react-router-dom';
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";

export default function Content(props) {
    return (
        <div className={s.main}>
            <Route path="/profile" render={() => <Profile
                store={props.store}
            />}/>
            <Route path="/Dialogs" render={() => <DialogsContainer
                store={props.store}
            />}/>
            <Route path="/News" render={() => <News/>}/>
            <Route path="/Music" render={() => <Music/>}/>
            <Route path="/Settings" render={() => <Settings/>}/>
            <Redirect from='/' to='/Profile'/>
        </div>
    );
}