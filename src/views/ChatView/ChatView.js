import React, { useEffect, useContext, useState } from "react";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { db } from "../../Config/config";
import { AuthContext } from "../../context/authContext";

const ChatView = () => {
  const { user } = useContext(AuthContext);

  const [chats, setChats] = useState([]);
  const [input, setInput] = useState("msg");

  const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    console.log("querySnapshot :>> ", querySnapshot);
    const arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setChats(arr);
  };

  const addMessage = async () => {
    // Add a new document in collection "cities"
    await await addDoc(collection(db, "chat"), {
      user: user.email,
      text: input,
      timestamp: new Date(),
    });
    getMessages();
  };
  useEffect(() => {
    getMessages();
    // addMessage();
  }, []);

  console.log("input", input);
  return (
    <div>
      <div>CHAT-VIEW</div>;
      {chats.map((chat) => {
        return (
          <div>
            <h4>{chat.user}</h4>
            <p>{chat.text}</p>
            <p>{chat.timestamp.toString()}</p>
          </div>
        );
      })}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={addMessage}>Add</button>
    </div>
  );
};

export default ChatView;
