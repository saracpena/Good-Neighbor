import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
//! Material Ui
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

//! Components
import SidebarOption from './SidebarOption';


function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                <h2>Good Neighbor, East Boston</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    Sara Peña
                </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <StyledLink to='/inbox'>
            <SidebarOption Icon={InsertCommentIcon} title="Inbox"/>
            </StyledLink>
            <StyledLink to='/search_items_services'>
            <SidebarOption Icon={InboxIcon} title="Search items and services"/>
            </StyledLink>
            {/* <SidebarOption Icon={DraftsIcon} title="Saved Items"/> */}
            <StyledLink to='/saved_items'>
            <SidebarOption Icon={BookmarkBorderIcon} title="Saved Items"/>
            </StyledLink>
            <StyledLink to='/community'>
            <SidebarOption Icon={PeopleAltIcon} title="Community"/>
            </StyledLink>
            {/* <SidebarOption Icon={AppsIcon} title="Apps"/> */}
            {/* <SidebarOption Icon={FileCopyIcon} title="File Browser"/> */}
            <StyledLink to='/Disclaimer'>
            <SidebarOption Icon={FeedbackOutlinedIcon} title="Disclaimer"/>
            </StyledLink>
            <SidebarOption Icon={ExpandLessIcon} title="Show Less"/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Categories"/>
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Categories"/>
            
            <SidebarFooter>
            <img src='https://i.pinimg.com/originals/d8/7d/65/d87d6554f3a8df4fa7092d130c8aa5e7.jpg'
            alt=''/> 
            </SidebarFooter>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    /* background-color: var(--slack-color); */
    background-color: #db8f00;
    color: white;
    flex: 0.3;
    border-top: 1px solid #946000;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #946000;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #946000;
    padding-bottom: 20px;
    padding: 3px;

    > .MuiSvgIcon-root {
      padding: 8px;
      color: #0000db;
      font-size: 18px;
      background-color: white;
      border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
    flex: 1;

    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    >h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
    }

    >h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;  
    }
`;

const SidebarFooter = styled.div`

    > img {
        object-fit: contain;
        margin-top: 140px;
        height: 190px;
    }

`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;