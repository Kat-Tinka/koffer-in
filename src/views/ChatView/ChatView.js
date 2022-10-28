import React, { useEffect, useContext, useState } from "react";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { db } from "../../Config/config";
import { AuthContext } from "../../context/authContext";
// import {auth} from './auth'
// import NavBar from "../../components/NavBar/NavBar";
import { query, orderBy, limit } from "firebase/firestore";  
import "../ChatView/Chat.css";
import { Avatar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// const style = {
//   message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
//   name: `fixed mt-[-4rem] text-gray-600 text-xs`,
//   sent:`bg-[#395dff] text-white flex-row-reverse text-end float-right`,
//   received: `bg-[#e5e5ea] text-black float-left rounded-br-full`
// }

const ChatView = () => {
  const { user } = useContext(AuthContext);

  const [chats, setChats] = useState([]);
  const [input, setInput] = useState("");

  const getMessages = async () => {
    const chatRef = collection(db, "chat");
    const q = query(chatRef, orderBy("timestamp", "asc"));
    const querySnapshot = await getDocs(q);
    const arr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      arr.push(doc.data());
    });
console.log('arr', arr)
    // const querySnapshot = await getDocs(collection(db, "chat"));
    // console.log("querySnapshot :>> ", querySnapshot);
    // const arr = [];
    // querySnapshot.forEach((doc) => {
    //   arr.push(doc.data());
      
    // });
     setChats(arr);
  };
  // const getMessages = async () => {
  //   const querySnapshot = await getDocs(collection(db, "chat"));
  //   console.log("querySnapshot :>> ", querySnapshot);
  //   const arr = [];
  //   querySnapshot.forEach((doc) => {
  //     arr.push(doc.data());
      
  //   });
  //   setChats(arr);
  // };

  const addMessage = async () => {
    // Add a new document in collection "cities"

    if(input === ""){
      alert("You need to write something before")

    }else {
      await await addDoc(collection(db, "chat"), {
        user: user.email,
        text: input,
        timestamp: new Date(),
      });
      getMessages();
    }
    
  };
  useEffect(() => {
    getMessages();
    // addMessage();
  }, []);

  console.log("input", input);

  const style ={
    ChatViewContainer:`max-w-[728px] mx-auto text-center`,
    sectionContainer:`flex flex-col h-[auto] mt-10 shadow-xl border relative`
    // name: `fixed mt-[-4rem] text-gray-600 text-xs`
  }

  const Message = () => {
    return (
      <div>
        <div className={style.message}>
          <p className={style.name}>K.</p>
          <p>Test Message, just written here.</p>
        </div>
      </div>
    )

  }


  return (
    <div
        className={style.ChatViewContainer}>
        <section className={style.sectionContainer}>
        {/* <NavBar/> */}
        
        <div className={style.nav} style={{backgroundColor:"gray"}}>
          <h1 className={style.heading}>CHAT APP</h1>
        </div>
      {chats.map((chat) => {
        const date = chat.timestamp.toDate()
        return (
          <div>
            <div style={{width: "50%", borderRadius: "25px", margin: "5px"}} className={user.email === chat.user ? "left-pos" : "right-pos"}>
            <div style={{display: "flex"}}>
            <Avatar>
          <AccountCircleIcon />
        </Avatar>
          <h4>{chat.user}</h4>
        
            </div>
            
            
              <p >{chat.text}</p> 
          
          
            {/* <div className={style.message}>
            <p className={style.name}>KAT</p> */}
            <p>{date.toLocaleString()}</p>
            </div>
            
          </div>
        );
      })}
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="Your message:"
      />
      <button disabled={input === "" ? true : false} style={ input === "" ? {backgroundColor:"gray", opacity: 0.5} : {backgroundColor:"gray"}} onClick={addMessage}>Add</button>
     
      
      </section>
    </div>
  );
};

export default ChatView;

