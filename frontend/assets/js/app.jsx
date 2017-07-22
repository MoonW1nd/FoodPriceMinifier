// import * as ReactDOM from "react-dom";
// import * as React from "react";

console.log(React);
console.log(ReactDOM);
let News = React.createClass({
	render: function () {
		return (
				<div className="News">
					К сожалению новостей пока нет.
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
					<News/>
					<Comments/>
				</div>
		)
	}
});
ReactDOM.render(
		<App/>,
		document.getElementById("root")
);