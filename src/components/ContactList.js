import React from "react";
import Contact from "./Contact";

const ContactList = () => {
  return (
    <div className="contact-container h-full w-full flex col">
      <div className="profile flex">
        <img className="rounded-50 image" src="/image/p2.jpeg" alt="pp" />
      </div>
      <div className="flex search">
        <div className="flex w-full search-container">
          <img
            src="/image/search-icon.svg"
            alt="search-icon"
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full contact-input"
          />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactList;
