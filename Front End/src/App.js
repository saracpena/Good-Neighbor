import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components'
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  
  return (
    <div className="app">
      
      <Router>
        {/* <Login/> */}
          <>
        <Header />
        <AppBody>
          <Sidebar  />
        <Switch>
          <Route exact path="/">
            <Chat/>
          </Route>
        </Switch>
        </AppBody>
      </>   
    </Router>
    </div>
  );
}


const AppBody = styled.div`
display: flex;
height: 100vh;
`;

//! LOGIN setup
// const [user, loading] = useAuthState(auth);
// {!user ? (
  //   <Login/>
  // ): (
    //   <>
    // <Header />
    // <AppBody>
    //   <Sidebar  />
    // <Switch>
    //   <Route exact path="/">
    //     <Chat/>
    //   </Route>
    // </Switch>
    // </AppBody>
    
    // </>
    // )}   
export default App;