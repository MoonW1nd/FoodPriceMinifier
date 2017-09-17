import React from "react";
import menu from "./menu.json";
import Food from "./Food.jsx"

export default class MenuWithSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayedFood: menu,
			textOnInput: ""
		};
		this.handlerInputFindChange = this.handlerInputFindChange.bind(this)
		this.handlerSubmit = this.handlerSubmit.bind(this)
	}

	handlerSubmit(event) {
		event.preventDefault()
	}
	handlerInputFindChange(event) {
		let searchQuery = event.target.value.toLowerCase();
		let displayedFood = menu.filter(function (el) {
			let searchValue = el.food.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({textOnInput: event.target.value});
		this.setState({displayedFood: displayedFood})
	}

	render () {
		return (
			<div>
				<input
					type="text"
					placeholder="Поиск блюда"
					className="search-field"
					value={this.state.email}
					onChange={this.handlerInputFindChange}
				/>
				<Food menu={this.state.displayedFood}/>
			</div>
		)
	}
}