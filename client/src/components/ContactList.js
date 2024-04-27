import React from "react";
import Contact from "./Contact";
import { contactList } from "../mock-data";

const ContactList = ({setChat}) => {
  return (
    <div className="contact-container h-full w-full flex col">
      {/* profile picture */}
      <div className="header flex">
        <img className="rounded-50 image" src="/image/p2.jpeg" alt="pp" />
      </div>

      {/* search bar */}
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

      {/* list */}
      {contactList.map(user => <Contact user={user} setChat={setChat} key={user.id} />)}
    </div>
  );
};

export default ContactList;