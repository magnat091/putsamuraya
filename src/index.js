import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store  from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerenderEntireTree = (state) =>{

    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)} newPostText={state.profilePage.newPostText} profilePage={state.profilePage} />
            </React.StrictMode>
        </BrowserRouter>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
