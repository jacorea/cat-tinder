import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Header from './components/Header';
import CatsPage from './pages/CatsPage';
import NewCatPage from './pages/NewCatPage';

class App extends Component {
  render() {
    return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/cats" component={CatsPage} />
					<Route exact path="/" component={NewCatPage} />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default App;
