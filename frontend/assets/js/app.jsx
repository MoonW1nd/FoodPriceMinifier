console.log(React);
console.log(ReactDOM);
var News = React.createClass({
	render: function () {
		return (
				<div className="News">
					К сожалению новостей пока нет.
				</div>
		)
	}
});

var App = React.createClass({
	render: function () {
		return (
				<div className="App">
					Всем привет, я компонент App и я умею возворащать новости!
					<News/>
				</div>
		)
	}
});
ReactDOM.render(
		<App/>,
		document.getElementById("root")
);