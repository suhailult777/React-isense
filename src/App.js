import React from 'react';
import { Send, Plus } from 'lucide-react';
import './App.css';

const ISenseChat = (props) => {
  return (
    <div className="chat-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <span className="title">iSense</span>
        </div>

        <button className="new-conversation">
          <Plus size={20} />
          <span>New Conversation</span>
        </button>

        <div className="conversations">
          <h2>Conversations</h2>
        </div>
      </div>

      <div className="main-chat">
        <div className="chat-header">
          <div className="header-content">
            <span className="user-icon">👤</span>
            <h1>Ask iSense</h1>
            <span className="user-icon">👤</span>
          </div>
          <div className="user-info">
            <span>User Name</span>
            <button className="alert-button">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
                <path d="m377.9 105.9 122.8 122.8c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9-18.7 0-33.9-15.2-33.9-33.9V320H192c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9 9 0 17.6 3.6 24 9.9zM160 96H96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="messages-area">
          {/* Sample Messages */}
          <div className="message isense-message">
            <div className="message-content">
              <div className="message-header">
                <span className="sender">iSense</span>
                <span className="timestamp">20:32</span>
              </div>
              <p>Hi User, I am iSense - Intelligent Sensitive Report Analyzer! Ask me a query</p>
            </div>
          </div>

          <div className="message user-message">
            <div className="message-content">
              <div className="message-header">
                <span className="sender">You</span>
                <span className="timestamp">20:33</span>
              </div>
              <p>Can you help me analyze this report?</p>
            </div>
          </div>

          <div className="message isense-message">
            <div className="message-content">
              <div className="message-header">
                <span className="sender">iSense</span>
                <span className="timestamp">20:34</span>
              </div>
              <p>Based on my analysis, I can help you with that query. Let me process the information.</p>
            </div>
          </div>
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter your query..."
            className="input-box"
          />
          <button className="send-button">
            <Send size={20} />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ISenseChat;