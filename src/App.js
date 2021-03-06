import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import catData from './cats.utls';


import Header from './components/Header';
import CatsPage from './pages/CatsPage';
import NewCatPage from './pages/NewCatPage';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cats: catData
    }
  }

  handleNewCat = (newCat) => {
    console.log(newCat);
  }

  render() {
    const {cats} = this.state;
    return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/cats" render={(props) => <CatsPage cats={cats} />} />
					<Route exact path="/" render={(props)=> <NewCatPage newCat={this.handleNewCat} /> } />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default App;
