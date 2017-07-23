import * as ReactDOM from "react-dom";
let React = require('react');
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

class Article extends React.Component {
	render() {
		let author = this.props.data.author,
			text = this.props.data.text;
		return (
			<div className="article">
				<p className="news__author">{author}</p>
				<p className="news__text">{text}</p>
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
			newsTemplate = <p>К сожалению новостей нет</p>;
		return (
				<div className="News">
					{newsTemplate}
					<strong className={data.length > 0? 'count-news': 'count-news none'}>
						Всего новостей: {data.length}
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
					<h3>Новости</h3>
					<News lastNews={my_news}/>
					<Comments/>
				</div>
		)
	}
}

ReactDOM.render(
		<App/>,
		document.getElementById("root")
);

