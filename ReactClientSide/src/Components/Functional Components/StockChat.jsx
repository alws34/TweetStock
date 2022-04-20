import React from "react";
import { useState, useEffect } from "react";
import { Chat, ChatMessage } from "@progress/kendo-react-conversational-ui";
import "@progress/kendo-theme-default/dist/all.css";
import { RealTimeDB } from "../Configs/FirebaseConfig";
import { ref, onValue, push } from "firebase/database";
import { getLoggedUser } from "../Configs/getLoggedUser";
import Eheader from "./EHeader";

const bot = {
  id: 0,
  name: "TweetStock",
  avatarUrl: "https://via.placeholder.com/24/008000/008000.png",
};
const initialMessages = [
  {
    author: bot,
    timestamp: new Date(),
    text: "Loading Chat...",
  },
];

export default function ChatStock(props) {
  let ticker = props.ticker;
  try {
    ticker = ticker.toUpperCase();
    console.log(ticker);
  } catch (e) {
    console.log(e);
  }
  const dbRef = ref(RealTimeDB, ticker);
  const [messages, setMessages] = useState(initialMessages);
  const CustomChatMessage = (props) => (
    <ChatMessage {...props} dateFormat={"t"} />
  );

  const AddNewMessage = (event) => {
    let new_msg = event.message;
    let date = new Date();
    console.log(date);
    new_msg["timestamp"] = date + "";
    // push the msg to the db
    push(dbRef, new_msg);
  };

  const attachMsgListener = () => {
    onValue(dbRef, (snapshot) => {
      let msgs = snapshot.val();
      let new_msgs = [];

      for (var key in msgs) {
        let msg = msgs[key];
        // console.log(msg);
        let date = new Date(msg.timestamp);
        new_msgs.push({
          author: msg.author,
          timestamp: date,
          text: msg.text,
        });
      }

      console.log(new_msgs);
      setMessages(new_msgs);
    });
  };
  const capitalizeFirstLetter = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  useEffect(attachMsgListener, [ticker]);

  let u = getLoggedUser();
  let user = {};
  user["avatarUrl"] = u["Picture"];
  user["name"] = capitalizeFirstLetter(u["FirstName"]);
  user["id"] = u["Id"];

  return (
    <div style={{ margin: 10 }}>
      <Eheader text={`$${ticker} Chat`} />
      <Chat
        user={user}
        messages={messages} //GETMessages
        onMessageSend={AddNewMessage} //SetMessages
        placeholder={"Type a message..."}
        width={"100%"}
        sx={{ height: 200 }}
        message={CustomChatMessage}
      />
    </div>
  );
}
