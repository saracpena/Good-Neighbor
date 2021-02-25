import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components'
import Chat from './components/Chat';
import Login from './components/Login';
import Disclaimer from './components/Disclaimer'

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
          <Route path="/disclaimer">
            <Disclaimer />
          </Route>
        </Switch>
        </AppBody>
      </>   
    </Router>
    </div>
  );
}

export default App;

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