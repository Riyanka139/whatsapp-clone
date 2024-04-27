import React from "react";
import React from "react";

const Contact = ({user, setChat}) => {
  const {profilePic, name, lastText, lastTextTime} = user;

  return (
    <div className="flex contact-item" onClick={() => setChat(user)}>
      <img
        src={profilePic}
        alt={name}
        className="rounded-50 contact-image"
      />
      <div className="flex col w-full contact-info">
        <span className="name">{name}</span>
        <span className="message">{lastText}</span>
      </div>
      <span className="message-time">{lastTextTime}</span>
    </div>
  );
};

export default Contact;
