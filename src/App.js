import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import VendingMashine from './containers/VendingMashine'
import Admin from './containers/Admin'
import './App.css'

class App extends Component {
  render() {
    return (
		<Router basename="/" >
			<div className="App">
				<Route 
					path="" 
					component={() => <VendingMashine />}  
				/>
				<Route 
					path="/admin" 
					component={() => <Admin />}  
				/>
			</div>
	  </Router>
    );
  }
}

export default App;
