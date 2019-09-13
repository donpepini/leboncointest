import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import MessageDetails from './components/messages/MessageDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateMessage from './components/messages/CreateMessage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/message/:id' component={MessageDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateMessage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
