import React, { useEffect, useContext, useState } from "react";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { db } from "../../Config/config";
import { AuthContext } from "../../context/authContext";
import NavBar from "../../components/NavBar/NavBar";


const ChatView = () => {
  const { user } = useContext(AuthContext);

  const [chats, setChats] = useState([]);
  const [input, setInput] = useState("your message:");

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

  const style ={
    ChatViewContainer:`max-w-[728px] mx-auto text-center`,
    sectionContainer:`flex flex-col h-[auto] bg-gray-100 mt-10 shadow-xl border relative`

  }

  return (
    <div
        className={style.ChatViewContainer}>
        <section className={style.sectionContainer}>
        {/* <NavBar/> */}
        <div className={style.nav}>
          <h1 className={style.heading}>CHAT APP</h1>
        </div>
      {chats.map((chat) => {
        return (
          <div style={{border:"solid 1px"}}>
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
      </section>
    </div>
  );
};

export default ChatView;
