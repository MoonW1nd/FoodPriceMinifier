// import * as React from "react";
// import * as ReactDOM from "react-dom";
import PropTypes from 'prop-types';


//TODO:[A.Ivankov] add sorting by type food
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
				<div className="food__content">
					<p className="food__name" onClick={this.activatePlate}>{food}</p>
					<a href="#" className={"food__readmore " + (visible ? 'none': '')} onClick={this.readmoreClick}>Подробнее...</a>
					<p className={"food__calories " + (visible ? '': 'none')}>
						<span className="food__calories__text">Ккал:</span> {calories}</p>
				</div>
				<p className="food__price">
					{price}
					<span className="rubles"> руб.</span>
				</p>
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
			foodTemplate = <p>Доступных блюд нет</p>;
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
				<Arrow/>
				<Food menu={menu}/>
				<Comments/>
			</div>
		)
	}
}

// ReactDOM.render(<Checkbox />, document.getElementById('checkbox'));

ReactDOM.render(
	<App/>,
	document.getElementById("root")
);

