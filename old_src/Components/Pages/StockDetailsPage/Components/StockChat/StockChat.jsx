import React, { useState, useEffect } from "react";
import { getLoggedUser } from "../../../../Configs/getLoggedUser";
import PageHeader from "../../../../Shared/PageHeader/PageHeader";
import { getRealTimeDBRef } from "../../../../Configs/FirebaseConfig";
import { Chat, ChatMessage } from "@progress/kendo-react-conversational-ui";
import "@progress/kendo-theme-default/dist/all.css";
import { ref, onValue, push } from "firebase/database";
import "../../../../Configs/Global";

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

export default function StockChat(props) {
  let ticker = props.ticker;
  try {
    ticker = ticker.toUpperCase();
  } catch (e) {
    console.log(e);
  }
  const dbRef = getRealTimeDBRef("/ChatDB/" + ticker);
  const [messages, setMessages] = useState(initialMessages);
  const CustomChatMessage = (props) => (
    <ChatMessage {...props} dateFormat={"t"} />
  );

  const AddNewMessage = (event) => {
    let new_msg = event.message;
    let date = new Date();
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
        let date = new Date(msg.timestamp);
        new_msgs.push({
          author: msg.author,
          timestamp: date,
          text: msg.text,
        });
      }

      setMessages(new_msgs);
    });
  };
  const capitalizeFirstLetter = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(attachMsgListener, [ticker]);

  useEffect(() => {
    global.config.theme === "dark"
      ? document
          .querySelector(".popup-content")
          .classList.add("darkChatContainer")
      : document
          .querySelector("#popup-root")
          .classList.remove("darkChatContainer");
  }, [global.config.theme]);

  let u = getLoggedUser();
  let user = {};
  user["avatarUrl"] = u["Picture"];
  user["name"] = capitalizeFirstLetter(u["FirstName"]);
  user["id"] = u["Id"];

  return (
    <div
      className={
        global.config.theme === "dark"
          ? "darkChatContainer"
          : "whiteChatContainer"
      }
      style={{ margin: 10 }}
    >
      <PageHeader text={`$${ticker} Chat`} />
      <Chat
        className={global.config.theme === "dark" ? "darkChat" : "whiteChat"}
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
