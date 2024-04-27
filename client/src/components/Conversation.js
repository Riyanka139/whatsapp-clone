import React, { useState } from "react";
import { messagesList } from "../mock-data";
import EmojiPicker from "emoji-picker-react";

const Conversation = ({user}) => {
  const [isEmoji, setIsEmoji] = useState(false);
  const [text,setText] = useState("");
  const [messageList, setMessageList] = useState([...messagesList])

  function emojiClick(emojiData){
    setText((old) => old + emojiData.emoji);
    setIsEmoji(false);
  }

  function keyDown(e){
    if(e.key === 'Enter'){
      setMessageList((old) => [
        ...old, 
        {
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "12:02 PM",
      }]);
      setText("");
    }
  }

  return (
    <>
      {/* hedaer */}
      <div className="flex items-center header">
        <img
          src={user.profilePic}
          alt="person"
          className="rounded-50 image"
        />
        <span className="name">{user.name}</span>
      </div>

      <div className="h-full conversation-container">
       {messageList.map((msg) => (
        <div className={`flex message-container ${msg.senderID === 0 ? 'justify-end' : ''}`} key={msg.id}>
          <div className={`conversation-message ${msg.senderID === 0 ? '' : 'isyour'}`}>{msg.text}</div>
        </div>
       )) }
      </div>

      <EmojiPicker 
        open={isEmoji} 
        emojiStyle="apple" 
        skinTonesDisabled={true}
        previewConfig={{showPreview: false }}
        onEmojiClick={emojiClick}  
      />

      <div className="flex chatbox">
        <div className="flex w-full search-container">
          
          <img
            src="/image/emoji.svg"
            alt="emoji-icon"
            className="search-icon emoji"
            onClick={() => setIsEmoji(!isEmoji)}
          />
          <input
            type="text"
            placeholder="Type a message"
            className="w-full contact-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={keyDown}
          />
        </div>
      </div>
            
    </>
  );
};

export default Conversation;