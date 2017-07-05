import React, {Component} from 'react';
import Service from '../services/services';

export default class ChatRooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatRooms : []
        }
    }

    componentDidMount() {
        Service.getRooms((data) => this.setState({chatRooms: data}));
    }

    render() {
        const chatRooms = this.state.chatRooms.map((el, i) => {
            let selectedClass = (this.props.selectedChatRoomId === el.id) ? "selected" : "";
            return (
                <li className = {selectedClass} key = {el.id} onClick = {() => this.props.onSelectChatRoom(el.id)}>
                    {el.name}
                </li>
            )
        });
        return (
            <div>
                <div className = "user-info">
                    <span className = "username">{this.props.username}</span>
                    <span className = "status">Online</span>
                </div>
                <ul className = "chat-rooms">
                    {chatRooms}  
                </ul>
            </div>
        )
    }
}
