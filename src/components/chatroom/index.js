import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from '../message';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('wss://192.168.0.102:8000');


class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
               
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }


    componentDidMount() {
        this.scrollToBot();
        client.onopen = () => {
            console.log('WebSocket Client connected');
            console.log(this.state.chats);
          };
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        
  
        client.onopen(
        this.setState({
            chats: this.state.chats.concat([{
                username: "Imo",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        })
        )
    }

    render() {
        const username = "Imo";
        const { chats } = this.state;

        return (
            <div className="chatroom" style={{
                position: "absolute",
                top: "750px",
                left: "700px",
                color: "white",
            }}>
                <h3>Chats</h3>
                <ul className="chats" ref="chats" >
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default Chatroom;