import React from 'react';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store={
    _state : {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi', likescount: 12, img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
                {id: '2', message: 'Het, how are you?',likescount: 13, img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
            ],
            dialogsData: [
                {id: '1', name: 'Starik',},
                {id: '2', name: 'Aslan',},
                {id: '3', name: 'Maret',},
                {id: '4', name: 'Avtomat',},
                {id: '5', name: 'Insert',},
                {id: '6', name: 'Islam',},
            ],
            newPostText: "it-kamasutra.com",
        },
        messagesPage: {
            messagesData: [
                {id: '1', message: 'Hi',},
                {id: '2', message: 'Het, how are you?',},
                {id: '3', message: 'Yo',},
                {id: '4', message: 'Yo',},
                {id: '5', message: 'Yo',},
                {id: '6', message: 'You',},
            ],
        },
        sidebarPage:{
            sidebarData:[
                {id: '1', adress: '/profile', name: "Profile",},
                {id: '2', adress: '/dialogs', name: "Messages",},
                {id: '3', adress: "/musics", name: "Music",},
                {id: '4', adress: "/settings", name: "Settings",},
            ],
        },
    },
    _callSubscriber(){
        console.log('State change')
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type  === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likescount: 5,
                img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg',
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if (action.type  === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if (action.type  === 'ADD-MESSAGE'){
            let newMessage = {
                id:2,
                message: action.message,
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () =>{
    const type = ADD_POST;
    return{
        type,
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const addMessageActionCreator = (messageText) => {
    return{
        type: 'ADD-MESSAGE',
        message: messageText
    }
}
window.store=store;

export default store;
