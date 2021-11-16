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
            setInput('');            
        }        
    };

    return (
        <div className="chatInput">
            <form>
                <input placeholder={`Message #${channelName}`}
                value={input}
                onChange={e=>setInput(e.target.value)} />
                <button type="submit" onClick={sendMessage}>SEND</button>
                </form>            
        </div>
    )
}

export default ChatInput
