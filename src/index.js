import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux.store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
 export let rerenderEntireTree = () =>{

    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App state={store.getState()}/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );

}
rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});

reportWebVitals();
