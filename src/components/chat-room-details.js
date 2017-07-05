import React, {Component} from 'react';
import Messages from './chat-messages';
import ChatInput from './chat-input';
import Service from '../services/services';

export default class ChatRoomDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedRoom: null,
            messages: [] 
        }   
        this.updateMessages = this.updateMessages.bind(this);
    }

    updateMessages () {
        Service.getMessages(this.props.selectedChatRoomId, (data) => this.setState({messages: data}));
    }

    componentDidUpdate() {
        const roomId = (this.state.selectedRoom) ? this.state.selectedRoom.id : "";
        if (this.props.selectedChatRoomId === "" || roomId === this.props.selectedChatRoomId) {
            return;
        }
        Service.getRoomDetails(this.props.selectedChatRoomId, (data) => this.setState({selectedRoom: data}));
        Service.getMessages(this.props.selectedChatRoomId, (data) => this.setState({messages: data}));
    }

    render() {
        if (this.state.selectedRoom === null) {
            return null;
        }
        const users = this.state.selectedRoom.users.map((el, i) => {
            return (
                <span key = {el}>, {el}</span>
            );
        }); 
        return (
            <div>
                <div className = "room-details">
                    <span className = "room-name">{this.state.selectedRoom.name}</span>
                    <div className = "users">
                        <span className = "active-user">{this.props.username}</span>{users}
                    </div>
                </div>
                <Messages messages = {this.state.messages} username = {this.props.username} />
                <ChatInput selectedChatRoomId =  {this.props.selectedChatRoomId} username = {this.props.username} 
                onSubmitMessage = {this.updateMessages} />
            </div>
        );
        
    }

}