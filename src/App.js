import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './Components/Navigation'
import Home from './Components/Home'
import CreateNote from './Components/CreateNote'
import CreateUser from './Components/CreateUser'
import e404 from './Components/e404'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <Navigation /> 
      <Container className="p-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/editar/:id" component={CreateNote} />
          <Route path="/crear" component={CreateNote} />
          <Route path="/user" component={CreateUser} />
          <Route path="/*" component={e404} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
