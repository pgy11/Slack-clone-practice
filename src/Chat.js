import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import { setRoomName, loadMessage } from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      setRoomName(roomId, (data) => setRoomDetails(data));
    }

    loadMessage(roomId, (data) => setRoomMessages(data));
  }, [roomId, roomMessages]);


  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <b>#{roomDetails?.name}</b>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({ message, timestamp, user, userimage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userimage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
    </div>
  );
}

export default Chat;
