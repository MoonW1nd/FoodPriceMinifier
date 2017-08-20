// import * as React from "react";
// import * as ReactDOM from "react-dom";
import PropTypes from 'prop-types';


//TODO:[A.Ivankov] add count calories
//TODO:[A.Ivankov] filter minimum calories
//TODO:[A.Ivankov] sorting by street on food
//TODO:[A.Ivankov] add image
//TODO:[A.Ivankov] add review food
//TODO:[A.Ivankov] click on plate food -> open more information about
//TODO:[A.Ivankov] click for select important food and click arrow for next

console.log(React);
console.log(ReactDOM);

class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			visible: false
		};
		this.activatePlate = this.activatePlate.bind(this);
		this.readmoreClick = this.readmoreClick.bind(this);
	}
	
	activatePlate() {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}));
	}
	
	readmoreClick(e) {
		e.preventDefault();
		this.setState(prevState => ({
			visible: !prevState.visible
		}));
	}
	
	render() {
		let food = this.props.data.food,
			price = this.props.data.price,
			calories = this.props.data.calories,
			visible = this.state.visible;
		return (
			<div className={this.state.isActive ? "article active" : "article"}>
				<div className={"food__readmore " + (visible ? 'reverse': '')} onClick={this.readmoreClick}></div>
				<div className="content__wrapper" onClick={this.activatePlate}>
					<div className="food__content">
						<p className="food__name">{food}</p>
						<p className={"food__calories " + (visible ? '': 'none')}>
							<span className="food__calories__text">Ккал:</span> {calories}</p>
					</div>
					<p className="food__price">
						{price}
						<span className="rubles"> руб.</span>
					</p>
				</div>
			</div>
		)
	}
}

Article.propTypes ={
	data: React.PropTypes.shape({
		food: React.PropTypes.string.isRequired,
		price: React.PropTypes.number.isRequired,
		calories: React.PropTypes.number
	})
}

class InputFind extends React.Component {
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

class Arrow extends React.Component {
	render() {
		return (
			<div className="arrow-next-left-wrapper">
				<div className="arrow-next-right"/>
				<div className="">Далее</div>
			</div>
		)
	}
}

class Food extends React.Component {
	render() {
		let data = this.props.menu;
		console.log(data);
		let foodTemplate;
		if (data.length > 0)
			foodTemplate = data.map(function (item, index) {
				return (
					<div key={index}>
						<Article data={item}/>
						{/*<p className="news__author">{item.author}:</p>*/}
						{/*<p className="news__text">{item.text}</p>*/}
					</div>
				)
			});
		else
			foodTemplate = <p>Блюд с таким названием не найдено :(</p>;
		return (
			<div className="food">
				{foodTemplate}
				<strong className={data.length > 0 ? 'count-food' : 'count-food none'}>
					Всего предложений: {data.length}
				</strong>
			</div>
		)
	}
}

class Comments extends React.Component {
	render() {
		return (
			<div className="comments">
				Коментарии - временно недоступны.
			</div>
		)
	}
}

class CountAdd extends React.Component {
	render() {
		return (
			<div className="count-add-food">
				Выбрано блюд:
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h3>ShokoHelp</h3>
				<div className="head-mind">Найдется всё</div>
				<InputFind menu={menu}/>
				<Arrow/>
				<Comments/>
			</div>
		)
	}
}


ReactDOM.render(
	<App/>,
	document.getElementById("root")
);

