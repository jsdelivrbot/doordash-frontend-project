import React, {Component} from 'react';
import ChatRooms from './chat-rooms-list';

export default class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            selectedChatRoomId : ""
        }
    }
    render() {
        return (
            <div>
                <ChatRooms selectedChatRoomId = {this.state.selectedChatRoomId} username = {this.state.username}/>
            </div>
        );
    }
}