import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainLayout from './Layouts/MainLayout';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import './default.scss';

function App() {
  return (
    <Container className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </Container>
  );
}

export default App;
