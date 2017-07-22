import * as React from "react";
import * as ReactDOM from "react-dom";

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

let App = React.createClass({
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