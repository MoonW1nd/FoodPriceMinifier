let React = require('react');
let ReactDOM = require('react-dom');
import * as console from "debug";

let my_news = [
	{
		author: "Александр Коктар",
		text: "В четверг ,четвертого числа..."
	},
	{
		author: "Семен Бунин",
		text: "Считаю что доллар должен стоить 35 рублей!"
	},
	{
		author: "Денис Семенихин",
		text: "Всякая лысина от бога..."
	}
];

console.log(React);
console.log(ReactDOM);

let News = React.createClass({
	render: function () {
		let data = this.props.lastNews;
		let newsTemplate;
		if (data.length > 0)
			newsTemplate = data.map(function (item, index) {
				return (
						<div key={index}>
							<p className="news__author">{item.author}:</p>
							<p className="news__text">{item.text}</p>
						</div>
				)
			});
		else
			newsTemplate = <p>К сожалению новостей нет</p>
		return (
				<div className="News">
					{newsTemplate}
					<strong className={data.length > 0? 'count-news': 'count-news none'}>
						Всего новостей: {data.length}
					</strong>
				</div>
		)
	}
});

let Comments = React.createClass({
	render: function () {
		return (
			<div className="comments">
				Нет новостее - коментировать нечего
			</div>
		)
	}
});

let App = React.createClass({
	render: function () {
		return (
				<div className="App">
					Всем привет, я компонент App и я умею возворащать новости!
					<News lastNews={my_news}/>
					<Comments/>
				</div>
		)
	}
});

ReactDOM.render(
		<App/>,
		document.getElementById("root")
);

