import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import db from "./firebase";
import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRoomMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_header_left">
          <h4 className="chat_channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat_header_right">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat_message">
        {roomMessages.map((msg) => (
          <Message
            message={msg.message}
            timestamp={msg.timestamp}
            user={msg.user}
            userImage={msg.userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
