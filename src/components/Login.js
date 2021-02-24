import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
      <LoginContainer>
        <LoginInnerContainer>
          <img src='https://i.pinimg.com/originals/d8/7d/65/d87d6554f3a8df4fa7092d130c8aa5e7.jpg'
          alt=''/> 
          <h2>Good Neighbor,</h2><br/>
          <p>is a volunteer-based community where neighbors help neighbors in need.<br/>Please note that due to limited resources, we are only able to serve <strong>East Boston</strong> at this time.</p><br/>
          <h4>eastie.goodneighbor</h4>
          <Button onClick=''>
            Sign in
          </Button>
          <hr/>
          <p>Not a member? Sign-up.</p>
        </LoginInnerContainer>  
      </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;
const LoginInnerContainer = styled.div`
    padding: 50px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit:contain;
        height: 180px;
        margin-bottom: 40px;
    }
    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #db8f00;
        color: white;
    }

    > hr {
        margin-top: 20px;
        margin-bottom: 20px;   
    }
   
`;
