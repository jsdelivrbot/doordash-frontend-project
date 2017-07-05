import $ from 'jquery';

export default class Service {

    static getRooms(callback) {
        return $.getJSON('http://localhost:8080/api/rooms')
            .then((data) => {
                callback(data);
        });
    }

    static getRoomDetails(roomId, callback) {
        return $.getJSON(`http://localhost:8080/api/rooms/${roomId}` )
            .then((data) => {
                callback(data);
        });
    }

    static getMessages(roomId, callback) {
        return $.getJSON(`http://localhost:8080/api/rooms/${roomId}/messages` )
            .then((data) => {
                callback(data);
        });
    }

    static sendMessage(roomId, data, callback) {
        $.post(`http://localhost:8080/api/rooms/${roomId}/messages`, data, callback);
    }
}