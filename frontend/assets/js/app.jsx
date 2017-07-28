import * as ReactDOM from "react-dom";
let React = require('react');
import * as console from "debug";

let menu = [
	{
		food: "Цезарь с курицей",
		price: 350
	},
	{
		food: "Цезарь с тигровыми криветками",
		price: 390
	},
	{
		food: "Салат по тальянски",
		price: 340
	},
	{
		food: "Салат Ницца",
		price: 330
	},
	{
		food: "Салат Греческий",
		price: 330
	},
	{
		food: "Салат Руккла и клубника",
		price: 315
	},
	{
		food: "Крем суп с шампиньонами",
		price: 225
	},
	{
		food: "Ролл Цезарь",
		price: 255
	},
	{
		food: "Ролл Филадельфия",
		price: 265
	},
	{
		food: "Ролл с вечиной и омлетом",
		price: 255
	},
	{
		food: "Клаб сэндвич",
		price: 290
	},
	{
		food: "Бургер",
		price: 320
	},
	{
		food: "Кесадилья овощная",
		price: 245
	},
	{
		food: "Кесадилья с курицей",
		price: 290
	}
];

//TODO:[A.Ivankov] add sorting by type food
//TODO:[A.Ivankov] add count colories
//TODO:[A.Ivankov] filter minimum colores
console.log(React);
console.log(ReactDOM);

class Article extends React.Component {
	render() {
		let food = this.props.data.food,
			price = this.props.data.price;
		return (
			<div className="article">
				<p className="food__name">{food}</p>
				<p className="food__price">{price}</p>
			</div>
		)
	}
}

class News extends React.Component {
	render() {
		let data = this.props.lastNews;
		let newsTemplate;
		if (data.length > 0)
			newsTemplate = data.map(function (item, index) {
				return (
						<div key={index}>
							<Article data={item}/>
							{/*<p className="news__author">{item.author}:</p>*/}
							{/*<p className="news__text">{item.text}</p>*/}
						</div>
				)
			});
		else
			newsTemplate = <p>Доступных блюд нет</p>;
		return (
				<div className="food">
					{newsTemplate}
					<strong className={data.length > 0? 'count-food': 'count-food none'}>
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
				Нет новостее - коментировать нечего
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
					<News lastNews={menu}/>
					<Comments/>
				</div>
		)
	}
}

ReactDOM.render(
		<App/>,
		document.getElementById("root")
);

