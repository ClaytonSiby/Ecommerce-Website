import React, { Component } from 'react'

// components
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { auth } from './Firebase/utils';

// layouts
import MainLayout from './Layouts/MainLayout'
import HomepageLayout from './Layouts/HomepageLayout'

// pages
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import Login from './pages/Login'

// styles
import './default.scss'

const initialState = {
  currentUser: null
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState
    }
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if(!userAuth) {
        this.setState({
          ...initialState
        })
      };

      this.setState({
        currentUser: userAuth
      });
    })
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Container className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <HomepageLayout currentUser={currentUser}>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            path='/registration'
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path='/login'
            render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )}
          />
        </Switch>
      </Container>
    )
  }
}

export default App
