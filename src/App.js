import React from 'react';
import { Switch, Route, Redirect } from "react-router";

import HomePage from 'containers/HomePage'

const App = () => {
  return (
    <Switch>
      <Route path='/today' render={() => <HomePage/> } />
      <Route path='/yesterday' render={() => <HomePage/> } />
      <Route path='/last-week' render={() => <HomePage/> } />
      <Route path='/last-month' render={() => <HomePage/> } />
      <Route path='/this-month' render={() => <HomePage/> } />
      <Route path='/traffic' render={() => <HomePage/> } />
      <Route path='/' render={() => <Redirect to='/today' /> } />
    </Switch>
  )
}

export default App