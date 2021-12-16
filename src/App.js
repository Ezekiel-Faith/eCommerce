import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import Slider from './components/Cart/Slider'
import Searchbox from './components/Cart/Searchbox'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Searchbox />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

export default App
