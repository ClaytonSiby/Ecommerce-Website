import React from 'react'

// components
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'

// layouts
import MainLayout from './Layouts/MainLayout'
import HomepageLayout from './Layouts/HomepageLayout'

// pages
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import Login from './pages/Login'

// styles
import './default.scss'

function App () {
  return (
    <Container className='App'>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path='/registration'
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path='/login'
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
      </Switch>
    </Container>
  )
}

export default App
