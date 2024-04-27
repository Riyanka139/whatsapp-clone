import "./app.css";
import "./general.css";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";
import { useState } from "react";
function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="container flex w-full">
      <ContactList setChat={setSelectedChat} />
      <div className="flex conversation-container h-full col">
        {selectedChat ? 
          <Conversation user={selectedChat} /> : 
          <div className="flex col h-full items-center justify-center placeholder">
            <img className="chat-placeholder" src="/image/placeholder.jpeg" alt="place" />
            <span>Keep your phone connected</span>
            WhatsApp connects to your phone to sync messages.
          </div>
        }
      </div>
    </div>
  );
}

export default App;