import React from "react";

const Contact = ({user, setChat}) => {
  const {profilePic, name} = user.user;
  const {text, addedOn} = user.messages[user.messages.length - 1];

  return (
    <div className="flex contact-item" onClick={() => setChat(user)}>
      <img
        src={profilePic || '/image/elon.jpeg'}
        alt={name}
        className="rounded-50 contact-image"
      />
      <div className="flex col w-full contact-info">
        <span className="name">{name}</span>
        <span className="message">{text}</span>
      </div>
      <span className="message-time">{new Date(addedOn || '').getDate()}</span>
    </div>
  );
};

export default Contact;
