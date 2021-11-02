import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { setRoomName, loadMessage } from "./firebase";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

    useEffect(() => {
        if(roomId){
            setRoomName(roomId, (data) => setRoomDetails(data));
        }

        //loadMessage(roomId, (data)=> setRoomMessages(data))
    }, [roomId])

    console.log(roomDetails);
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
    </div>
  );
}

export default Chat;
