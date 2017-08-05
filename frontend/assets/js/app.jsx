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
		food: "Салат по Итальянски",
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
	},
	{
		food: "Фоккачино с курицей барбекю",
		price: 275
	},
	{
		food: "Тост с сыром и ветчиной",
		price: 265
	},
	{
		food: "Мясная лазанья",
		price: 320
	},
	{
		food: "Куриная грудкв с пюре",
		price: 290
	},
	{
		food: "Куриная грудка с овощами",
		price: 290
	},
	{
		food: "Сибас на пару с пюре",
		price: 450
	},
	{
		food: "Сибас на пару с овощами гриль",
		price: 450
	},
	{
		food: "Сибас на пару с кускусом и соусом песто",
		price: 450
	},
	{
		food: "Сибас на пару с картофилем по домашнему",
		price: 450
	},
	{
		food: "Биточки с томленой уткой",
		price: 340
	},
	{
		food: "Лапша с тигровыми криветками",
		price: 360
	},
	{
		food: "Паста карбанара",
		price: 320
	},
	{
		food: "Паста Альфредо с курицей",
		price: 325
	},
	{
		food: "Ригатони с копченым лососем",
		price: 360
	},
	{
		food: "Торт Москва",
		price: 275
	},
	{
		food: "Торт Медовик",
		price: 250
	},
	{
		food: "Торт Прага",
		price: 250
	},
	{
		food: "Торот Опера",
		price: 240
	},
	{
		food: "Торт Наполеон с клубникой",
		price: 270
	},
	{
		food: "Чизкейк Орео",
		price: 250
	},
	{
		food: "Эклер ванильный",
		price: 130
	},
	{
		food: "Эклер шоколадный",
		price: 130
	},
	{
		food: "Тарталетка с ягодами",
		price: 220
	},
	{
		food: "Торт лимонный с меренгой",
		price: 195
	},
	{
		food: "Чизкейк яблочный",
		price: 240
	},
	{
		food: "Чизкейк Нью-йорк",
		price: 240
	},
	{
		food: "Фисташковый торт с профитроли",
		price: 260
	},
	{
		food: "Блинчики малиновые",
		price: 265
	},
	{
		food: "Блинчики легендарные с шоколадом",
		price: 265
	},
	{
		food: "Блинчики с сыром и ветчиной",
		price: 265
	},
	{
		food: "Блинчики с мясом",
		price: 265
	},
	{
		food: "Блины с жюльеном",
		price: 275
	},
	{
		food: "Блины с творогом",
		price: 275
	},
	{
		food: "Блины яблочно-карамельные",
		price: 265
	},
	{
		food: "Сырники со сметаной и малиновым соусом",
		price: 265
	},
	{
		food: "Аква минерале с газом",
		price: 130
	},
	{
		food: "Аква минерале без газа",
		price: 130
	},
	{
		food: "Pepsi",
		price: 140
	},
	{
		food: "Pepsi лайт",
		price: 140
	},
	{
		food: "Mirinda orange",
		price: 140
	},
	{
		food: "7up",
		price: 140
	},
	{
		food: "Сок Я яблочный",
		price: 150
	},
	{
		food: "Сок Я апельсиновый",
		price: 150
	}
];
// import * as React from "react";
// import * as ReactDOM from "react-dom";


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
		this.state = {isActive: false};
		this.activatePlate = this.activatePlate.bind(this);
	}
	activatePlate() {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}));
	}
	render() {
		let food = this.props.data.food,
				price = this.props.data.price;
		return (
				<div className={this.state.isActive ? "article active" : "article"} onClick={this.activatePlate}>
					<p className="food__name">{food}</p>
					<p className="food__price">
						{price}
						<span className= "rubles" > руб.</span>
					</p>
				</div>
		)
	}
}


class Arrow extends React.Component {
	render() {
		return(
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
					Коментарии - временно недоступны.
				</div>
		)
	}
}

class CountAdd extends React.Component {
	render() {
		return(
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

ReactDOM.render (
		<App/>,
		document.getElementById("root")
);

