import $ from 'jquery';

export default class Service {

    /*
    * Gets a list of all chat rooms 
    * @param callback - function to be called after getting the data
    */
    static getRooms(callback) {
        return $.getJSON('http://localhost:8080/api/rooms')
            .then((data) => {
                if (typeof callback == 'function') {
                    callback(data);
                }
        });
    }

    /*
    * Gets details for a room
    * @param roomId - Chat room Id
    * @param callback - function to be called after getting the data
    */
    static getRoomDetails(roomId, callback) {
        return $.getJSON(`http://localhost:8080/api/rooms/${roomId}` )
            .then((data) => {
                if (typeof callback == 'function') {
                    callback(data);
                }
        });
    }

    /*
    * Gets all messages in a chat room
    * @param roomId - Chat room Id
    * @param callback - function to be called after getting the data
    */
    static getMessages(roomId, callback) {
        return $.getJSON(`http://localhost:8080/api/rooms/${roomId}/messages` )
            .then((data) => {
                if (typeof callback == 'function') {
                    callback(data);
                }
        });
    }

    /*
    * Sends a message to the chat room
    * @param roomId - Chat room Id
    * @data - object of the format {name: name, message: message}. name is the username and message 
    *         is the message to be sent
    * @param callback - function to be called after sending message
    */
    static sendMessage(roomId, data, callback) {
        $.post(`http://localhost:8080/api/rooms/${roomId}/messages`, data, callback);
    }
}