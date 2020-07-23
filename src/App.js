import React from 'react';
import './App.css';
import './components/Board/board.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Board/Menu';
import Head from './components/Board/Head';
import Dashboard from './components/Board/pages/Dashboard/Dashboard';
import { Sales } from './components/Board/pages/Sales/Sales';
import Clients from './components/Board/pages/Clients/Clients';
import Users from './components/Board/pages/Users/Users';
import Settings from './components/Board/pages/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="start_page">
          <Menu />
          <div className="content-part">
            <Head />
            <div className="page-board">
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/sales" component={Sales} />
                <Route exact path="/clients" component={Clients} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/settings" component={Settings} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
