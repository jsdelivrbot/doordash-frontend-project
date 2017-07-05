import React, {Component} from 'react';
import Service from '../services/services';

export default class ChatInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: ""
        }
        this.onSubmitMessage = this.onSubmitMessage.bind(this);
    }

    onSubmitMessage(event) {
        event.preventDefault();
        if (this.props.selectedChatRoomId === "") {
            return;
        }
        const data = {name: this.props.username, message: this.state.inputMessage};
        Service.sendMessage(this.props.selectedChatRoomId, data, this.props.onSubmitMessage);
        document.getElementById("messageInput").value = "";
        console.log(document.getElementById("messageInput").value);
    }

    render() {
        return (
            <form className = "chat-input" onSubmit = {this.onSubmitMessage}>
                <input id="messageInput" className = "form-control" type="text" onChange = {(event) => this.setState({inputMessage: event.target.value})} 
                placeholder = "Type a message..." required />
                <button className = "btn btn-link" type="submit">Send</button>
            </form>    
        ); 
    }
}