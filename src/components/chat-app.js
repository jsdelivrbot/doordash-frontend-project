import React, {Component} from 'react';
import ChatRooms from './chat-rooms';
import ChatRoomDetails from './chat-room-details';

export default class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChatRoomId : ""
        }
        this.selectChatRoom = this.selectChatRoom.bind(this);
    }

    selectChatRoom(roomId) {
        this.setState({selectedChatRoomId: roomId});
    }

    render() {
        return (
            <div className = "chat-app">    
                <div className = "col-sm-4 col-md-4 col-lg-4 left-panel">
                    <ChatRooms selectedChatRoomId = {this.state.selectedChatRoomId} onSelectChatRoom = {this.selectChatRoom}
                               username = {this.props.username} />
                </div>

                <div className = "col-sm-8 col-md-8 col-lg-8 main-panel">
                    <ChatRoomDetails username = {this.props.username} selectedChatRoomId = {this.state.selectedChatRoomId} />
                </div>        
            </div>
        );
    }
}