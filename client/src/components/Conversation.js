import React, { useEffect, useState } from "react";
// import { messagesList } from "../mock-data";
import EmojiPicker from "emoji-picker-react";
import apiService from "../manager/api";

const Conversation = ({user, selectedChat, setRefreshContactList}) => {
  const [isEmoji, setIsEmoji] = useState(false);
  const [text,setText] = useState("");
  const [messageList, setMessageList] = useState([]);
  
  useEffect(() =>{
    setMessageList(selectedChat.messages);
  },[selectedChat.messages]);

  function emojiClick(emojiData){
    setText((old) => old + emojiData.emoji);
    setIsEmoji(false);
  }

  async function keyDown(e){
    if(e.key === 'Enter'){
      const msgData = {
        text,
        messageType: "TEXT",
        senderPhone: user.phoneNumber,
      }

      try {
       const res = await apiService.sendMessage({channelId: selectedChat._id, messages: msgData});
        setMessageList([...res.data.responseData.messages]);
        setText("");
        setRefreshContactList(old => !old);
      } catch (error) {
        console.log(error,"error in send msg");
      }
    }
  }

  return (
    <>
      {/* hedaer */}
      <div className="flex items-center header">
        <img
          src={selectedChat.user.profilePic}
          alt="person"
          className="rounded-50 image"
        />
        <span className="name">{selectedChat.user.name}</span>
      </div>

      <div className="h-full conversation-container">
       {messageList.map((msg) => (
        <div className={`flex message-container ${msg.senderPhone === user.phoneNumber ? 'justify-end' : ''}`} key={msg._id}>
          <div className={`conversation-message ${msg.senderPhone === user.phoneNumber ? '' : 'isyour'}`}>{msg.text}</div>
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