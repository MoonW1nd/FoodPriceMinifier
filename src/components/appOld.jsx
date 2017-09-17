
let menu = [
	{
		food: "Цезарь с курицей",
		price: 350,
		calories: 100
	},
	{
		food: "Цезарь с тигровыми криветками",
		price: 390,
		calories: 100
	},
	{
		food: "Салат по Итальянски",
		price: 340,
		calories: 100
	},
	{
		food: "Салат Ницца",
		price: 330,
		calories: 100
	},
	{
		food: "Салат Греческий",
		price: 330,
		calories: 100
	},
	{
		food: "Салат Руккла и клубника",
		price: 315,
		calories: 100
	},
	{
		food: "Крем суп с шампиньонами",
		price: 225,
		calories: 100
	},
	{
		food: "Ролл Цезарь",
		price: 255,
		calories: 100
	},
	{
		food: "Ролл Филадельфия",
		price: 265,
		calories: 100
	},
	{
		food: "Ролл с вечиной и омлетом",
		price: 255,
		calories: 100
	},
	{
		food: "Клаб сэндвич",
		price: 290,
		calories: 100
	},
	{
		food: "Бургер",
		price: 320,
		calories: 100
	},
	{
		food: "Кесадилья овощная",
		price: 245,
		calories: 100
	},
	{
		food: "Кесадилья с курицей",
		price: 290,
		calories: 100
	},
	{
		food: "Фоккачино с курицей барбекю",
		price: 275,
		calories: 100
	},
	{
		food: "Тост с сыром и ветчиной",
		price: 265,
		calories: 100
	},
	{
		food: "Мясная лазанья",
		price: 320,
		calories: 100
	},
	{
		food: "Куриная грудкв с пюре",
		price: 290,
		calories: 100
	},
	{
		food: "Куриная грудка с овощами",
		price: 290,
		calories: 100
	},
	{
		food: "Сибас на пару с пюре",
		price: 450,
		calories: 100
	},
	{
		food: "Сибас на пару с овощами гриль",
		price: 450,
		calories: 100
	},
	{
		food: "Сибас на пару с кускусом и соусом песто",
		price: 450,
		calories: 100
	},
	{
		food: "Сибас на пару с картофилем по домашнему",
		price: 450,
		calories: 100
	},
	{
		food: "Биточки с томленой уткой",
		price: 340,
		calories: 100
	},
	{
		food: "Лапша с тигровыми криветками",
		price: 360,
		calories: 100
	},
	{
		food: "Паста карбанара",
		price: 320,
		calories: 100
	},
	{
		food: "Паста Альфредо с курицей",
		price: 325
	},
	{
		food: "Ригатони с копченым лососем",
		price: 360,
		calories: 100
	},
	{
		food: "Торт Москва",
		price: 275,
		calories: 100
	},
	{
		food: "Торт Медовик",
		price: 250,
		calories: 100
	},
	{
		food: "Торт Прага",
		price: 250,
		calories: 100
	},
	{
		food: "Торот Опера",
		price: 240,
		calories: 100
	},
	{
		food: "Торт Наполеон с клубникой",
		price: 270,
		calories: 100
	},
	{
		food: "Чизкейк Орео",
		price: 250,
		calories: 100
	},
	{
		food: "Эклер ванильный",
		price: 130,
		calories: 100
	},
	{
		food: "Эклер шоколадный",
		price: 130,
		calories: 100
	},
	{
		food: "Тарталетка с ягодами",
		price: 220,
		calories: 100
	},
	{
		food: "Торт лимонный с меренгой",
		price: 195,
		calories: 100
	},
	{
		food: "Чизкейк яблочный",
		price: 240,
		calories: 100
	},
	{
		food: "Чизкейк Нью-йорк",
		price: 240,
		calories: 100
	},
	{
		food: "Фисташковый торт с профитроли",
		price: 260,
		calories: 100
	},
	{
		food: "Блинчики малиновые",
		price: 265,
		calories: 100
	},
	{
		food: "Блинчики легендарные с шоколадом",
		price: 265,
		calories: 100
	},
	{
		food: "Блинчики с сыром и ветчиной",
		price: 265,
		calories: 100
	},
	{
		food: "Блинчики с мясом",
		price: 265,
		calories: 100
	},
	{
		food: "Блины с жюльеном",
		price: 275,
		calories: 100
	},
	{
		food: "Блины с творогом",
		price: 275,
		calories: 100
	},
	{
		food: "Блины яблочно-карамельные",
		price: 265,
		calories: 100
	},
	{
		food: "Сырники со сметаной и малиновым соусом",
		price: 265,
		calories: 100
	},
	{
		food: "Аква минерале с газом",
		price: 130,
		calories: 100
	},
	{
		food: "Аква минерале без газа",
		price: 130,
		calories: 100
	},
	{
		food: "Pepsi",
		price: 140,
		calories: 100
	},
	{
		food: "Pepsi лайт",
		price: 140,
		calories: 100
	},
	{
		food: "Mirinda orange",
		price: 140,
		calories: 100
	},
	{
		food: "7up",
		price: 140,
		calories: 100
	},
	{
		food: "Сок Я яблочный",
		price: 150,
		calories: 100
	},
	{
		food: "Сок Я апельсиновый",
		price: 150,
		calories: 100
	}
];
import * as React from "react";
import * as ReactDOM from "react-dom";
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
			<div className={(this.state.isActive ? "article active" : "article") + (visible? " more__info":"")}>
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



// ReactDOM.render(
// 	<App/>,
// 	document.getElementById("root")
// );

