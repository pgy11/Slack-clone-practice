import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import "./ChatInput.css";
import { submitMessage } from './firebase';
import { useStateValue } from './StateProvider';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId){
            submitMessage(channelId, input, user);            
        }        
    };

    return (
        <div className="chatInput">
            <form>
                <input placeholder={`Message #${channelName}`}
                value={input}
                onChange={e=>setInput(e.target.value)} />
                <Button type="submit" onClick={sendMessage}>SEND</Button>
                </form>            
        </div>
    )
}

export default ChatInput