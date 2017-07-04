import React, {Component} from 'react';

export default class ChatRooms extends Component {
    constructor(props) {
        super(props); //TODO: change this to function
    }

    render() {
        return (
            <div className = "col-sm-4 col-md-4 col-lg-4 left-panel">
                <span className = "username">{this.props.username}</span>
                <ul className = "chat-rooms">

                </ul>
            </div>
        );
    }
}