import "./app.css";
import "./general.css";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import apiService from "./manager/api.js";
import cookieService from "./manager/cookie.js";

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [user, setUser] = useState();
  const [refreshContactList, setRefreshContactList] = useState(false);

  useEffect(() => {
    const userData = cookieService.getUser();
    if (userData) setUser(userData);
  },[]);

  async function login(phoneNumber, password){
    try {
    const res = await apiService.login({phoneNumber, password});

    cookieService.setUser(res.data.responseData);
    setUser(res.data.responseData);

    } catch (error) {
      console.log(error,"err");
    }
  }

  return (
    <>
      {user? ( 
        <div className="container flex w-full">
          <ContactList setChat={setSelectedChat} user={user} refreshContactList={refreshContactList}  />
          <div className="flex conversation-container h-full col">
            {selectedChat ? 
              <Conversation selectedChat={selectedChat} user={user} setRefreshContactList={setRefreshContactList}   /> : 
              <div className="flex col h-full items-center justify-center placeholder">
                <img className="chat-placeholder" src="/image/placeholder.jpeg" alt="place" />
                <span>Keep your phone connected</span>
                WhatsApp connects to your phone to sync messages.
              </div>
            }
          </div>
        </div>
      ) : (<Login login={login} />)}
    </>
   
  );
}

export default App;