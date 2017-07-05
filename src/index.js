import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './components/chat-app'

/*
* Main app component
*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            usernameSubmitted: false
        }

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
    }

    onUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    onUsernameSubmit(event) {
        event.preventDefault(); 
        this.setState({usernameSubmitted: true})
    }

    /*
     * If username is submitted, renders the Chat Application, otherwise renders the Login page
    */
    render() {
        if (this.state.usernameSubmitted && this.state.username !== "") {
            return (
                <ChatApp username = {this.state.username} />
            );
        }
        return (
            <form onSubmit = {this.onUsernameSubmit} className="login-form">
                <div>
                    <input type="text" className = "form-control" onChange = {this.onUsernameChange} type = "text" 
                        placeholder = "Type your username..." required
                    />
                    <button className = "btn btn-login" type = "submit">Join the DoorDash Chat!!</button>
                </div>
            </form>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("container"));