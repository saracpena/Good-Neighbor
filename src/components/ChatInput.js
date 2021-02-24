import React from 'react'
import styled from 'styled-components'

// Material UI
import { Button } from '@material-ui/core';

function ChatInput() {

    const sendMessage = (e) => {
        e.preventDefault();
    }

    return (
       <ChatInputContainer>
           <form>
               <input placeholder="direct message" />
               <Button hidden type ='submit' onClick={sendMessage}>
                   SEND
               </Button>
           </form>
       </ChatInputContainer>
    );
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid #49274b;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;