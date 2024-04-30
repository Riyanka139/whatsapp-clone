import React, { useCallback, useEffect, useState } from "react";
import Contact from "./Contact";
// import { contactList } from "../mock-data";
import apiService from "../manager/api";

const ContactList = ({setChat, user, refreshContactList}) => {
  const [search, setSearch] = useState('');
  const [resultList, setResultList] = useState([]);
  const [contactList, setContactList] = useState([]);

 
  const getContactList =  useCallback(async () => {
    const res = await apiService.getChannelList(user.phoneNumber);
    const data = res.data.responseData.map((rd) => ({user:rd.channelUsers?.find(otherUser => otherUser.phoneNumber !== user.phoneNumber), ...rd})) || []

    setContactList(data);
    setResultList(data);
  },[user.phoneNumber])

  useEffect(() => {
    getContactList();
  },[getContactList,refreshContactList]);

  async function searchFn(val){
    setSearch(val);
    if(val.length === 10 && Number.isFinite(+val)){
      const res = await apiService.searchUser(val);
      setContactList([res.data.responseData]);
    }else if(val.length === 0){
      setContactList(resultList);
    }
  }

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
            value={search}
            onChange={(e) => searchFn(e.target.value)}
          />
        </div>
      </div>

      {/* list */}
      {contactList.map(u => <Contact user={u} setChat={setChat} key={u._id} />)}
    </div>
  );
};

export default ContactList;