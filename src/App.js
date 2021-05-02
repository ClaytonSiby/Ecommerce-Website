import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import './default.scss';

function App() {
  return (
    <Container className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </Container>
  );
}

export default App;
