import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../logo.svg';

const options = [
	{
		label: 'Test',
		icon: null,
		to: '/test',
	},
	{
		label: 'Random',
		icon: null,
		to: '/asd',
	},
];

class NavBar extends Component {
	render() {
		return (
			<div className="NavBar">
				<Link to="/">
					<div className="NavBar-logo">
						<img src={logo} alt="React logo" />
					</div>
				</Link>
				{options.map(this.renderOption)}
			</div>
		);
	}

	renderOption = (option, index) => {
		return (
			<Route
				key={index}
				path={option.to}
				children={({ match }) => (
					<Link to={option.to}>
						<div className={'NavBar-option ' + (match ? 'active' : '')}>{option.label}</div>
					</Link>
				)}
			/>
		);
	};
}

export default NavBar;
