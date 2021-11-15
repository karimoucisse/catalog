import React, { Component } from 'react'

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import NotFound from './pages/NotFound'
import "./App.css"

export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/:id" component={Catalog}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
