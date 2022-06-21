import React from "react";

const Contact = () => {
  return (
    <div className="flex w-full contact-item">
      <img
        src="/image/p1.jpeg"
        alt="person"
        className="rounded-50 contact-image"
      />
      <div className="flex col contact-info">
        <span className="name">Ayush</span>
        <span className="message">Hey</span>
      </div>
      <span className="message-time">10:30 PM</span>
    </div>
  );
};

export default Contact;
