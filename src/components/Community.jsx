import React, {useState, useEffect} from "react";
import "./Community.css"
const Community = () => {

    //State for chat messages
    const[messages, setMessages] = useState([]);
    const[newMessage, setNewMessage] = useState('');
    const [username, setUsername] = useState('');

// useEffect to retrieve messages from storage on mount
useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('communityMessages')) || [];
    setMessages(savedMessages);
}, []);

// Function to handle input
const handleChange= (e) => {
    setNewMessage(e.target.value)
}

// Function to handle username input
const handleUsername = (e) => {
    setUsername(e.target.value)
}

//Function to submit a message
const handleSubmit = () => {
    const message = {
        content: newMessage,
        author: username || 'RandomGrassChopper',
        timestamp: new Date().toLocaleString()
    };
// Using setter to prepend the submitted message to the array of messages
    setMessages((prevMessages) => [message, ...prevMessages]);
    localStorage.setItem('communityMessages' , JSON.stringify([message, ...messages])); 
    setNewMessage('')
};

return (
    <div id ="box">
        <h1>Community</h1>
            <div id="inputbox">
            <input
                type="text"
                name="username"
                className="username-input"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsername}
                />
                <input   
                type="text"
                name="chatMessage"
                className="chat"
                placeholder="Type your message"
                value={newMessage}
                onChange={handleChange}               
                />
                <button onClick={handleSubmit}>Send</button>
            </div>

            <div>
            {messages.map((message, index) => (
            <div key={index}>
            <p>{message.content}</p>
            <span style={{ color: '#787C7E' }} className="two">
                Posted by {message.author} on {message.timestamp}
            </span>
            </div>
        ))}
        </div>
    </div>

);
};

export default Community;