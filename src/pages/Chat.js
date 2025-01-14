import React, { useState, useRef, useEffect } from 'react';
import '../Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = {
      content: inputMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    try {
      // Replace with your actual API endpoint
      console.log('Sending message to API:', inputMessage);
      const response = await fetch('https://h5syb6axy9.execute-api.us-east-1.amazonaws.com/prod/request', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      console.log(JSON.stringify(data));
      
      // Add response to chat
      const botMessage = {
        content: data.response, // Adjust according to your API response structure
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className="chat-container">
      <h3>Hi, I'm ConciergePro and I will be happy to help you understand which products are the perfect fit for your business!</h3>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
