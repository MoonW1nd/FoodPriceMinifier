import * as ReactDOM from "react-dom";
let React = require('react');
import * as console from "debug";

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
	render() {
		let food = this.props.data.food,
				price = this.props.data.price;
		return (
				<div className="article">
					<p className="food__name">{food}</p>
					<p className="food__price">
						{price}
						<spen className= "rubles" > руб.</spen>
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
					Коментарии - временно недоступны.
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
					<Food lastNews={menu}/>
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

