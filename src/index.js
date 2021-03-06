import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let state = store.getState();

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )

}

rerenderEntireTree(state);

store.subscribe(rerenderEntireTree);


if (module.hot) {
    module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();