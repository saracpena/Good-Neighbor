import React from 'react'
import styled from "styled-components"
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
              <HeaderAvatar
              //TODO: Add onClick   
              />
              <AccessTimeIcon />
            </HeaderLeft>
          
           {/* Header Search */}

           {/* Header Right */}
        </HeaderContainer>
    )
}

export default Header

// Using Styled Components
const HeaderContainer = styled.div`
    display: flex;

`;
const HeaderLeft = styled.div` //h2
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    >   .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 30px;  
    }
`;
const HeaderAvatar = styled(Avatar)`
`
