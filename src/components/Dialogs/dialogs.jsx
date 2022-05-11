import React from "react";
import d from './dialogs.module.css'
import DialogItem from "./DialogsItem/dialogsItem";
import Message from "./Message/message";
import {addMessageActionCreator} from "../../redux/state";



const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.messagesData.map((messageEl) => <Message message={messageEl.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let messageText = newMessageElement.current.value;
        let action = addMessageActionCreator(messageText)
        props.dispatch(action);
        newMessageElement.current.value = '';
    }

    return(
        <div className={d.dialogs}>
            <div className={d.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Отправить сообщение</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
