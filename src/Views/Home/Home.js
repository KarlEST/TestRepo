import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
	render() {
		return <div className="Home">Hello world. This is homepage.{this.props.children}</div>;
	}
}

export default Home;
