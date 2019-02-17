import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/timeline' component={Timeline} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
