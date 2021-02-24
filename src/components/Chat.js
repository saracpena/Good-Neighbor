import React, { useRef } from 'react'
import styled from 'styled-components'
// import Message from './components/Message'

// Material UI
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';

function Chat() {
const chatRef = useRef(null);

    return (
      <ChatContainer>
      <>
        <Header>
            <HeaderLeft>
            <h4>
                <strong>#Room-name</strong>
            </h4>
            <StarBorderOutlinedIcon/>
            </HeaderLeft>
            <HeaderRight>
                <p>
                <InfoOutlinedIcon /> Details
                </p>
            </HeaderRight>
        </Header>

        <ChatMessages>
            {/* fetch Direct Messages */}
            {/* return (
                <Message
                userId
                message
                timestamp
                user
                userImage
                />
            ) */}
            {/* <Message    /> */}
          <ChatBottom ref={chatRef}/>
        </ChatMessages>

        <ChatInput
            // UserName
            // UserId
        />
      </>
     </ChatContainer>
    )
}

export default Chat

const ChatBottom = styled.div`
    padding-bottom: 200px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #49274b;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
    display: flex;
    align-items:center;


    > h4{
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
        }
    > h4 > .MuiSvgIcon-root {
        margin-left: 20px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow:1;
    overflow-y: scroll;
    margin-top: 60px;

`;