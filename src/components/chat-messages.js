import React, {Component} from 'react';

/*
* Component for messages in the chat room
*/
export default class Messages extends Component{
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const div = document.getElementById("messageList");
        div.scrollTop = div.scrollHeight;
    }
    
    render() {
        const messages = this.props.messages.map((el, i) => {
            if (el.name === this.props.username) {
                return (
                    <li className = "new-message" key = {i}>
                        <div className = "message">{el.message}</div>
                    </li>
                );
            }
            return (
                <li className = "old-message" key = {i}> 
                    <div className = "message">{el.message}</div>
                    <span className = "user">{el.name}</span>
                </li>
            );
        });
        return (
            <ul className = "messages" id = "messageList">
                {messages}
            </ul>    
        );
    }
}
