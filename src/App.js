import "./app.css";
import "./general.css";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";
function App() {
  return (
    <div className="container flex w-full">
      <ContactList />
      <Conversation />
    </div>
  );
}

export default App;
