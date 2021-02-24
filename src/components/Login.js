import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
      <LoginContainer>
        <LoginInnerContainer>
          <img src='https://i.pinimg.com/originals/d8/7d/65/d87d6554f3a8df4fa7092d130c8aa5e7.jpg'
          alt=''/> 
          <h1>Sign in to Good Neighbor</h1>
          <p>eastie.goodneighbor</p>
          <Button type='submit' onClick=''>
            Sign in with Google
          </Button>
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
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit:contain;
        height: 100px;
        margin-bottom: 40px;
    }
`;
