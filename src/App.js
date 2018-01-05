import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import Test from './Views/Test/Test';
import NotFound from './Views/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';

const routes = {};

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/test" component={Test} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
