"use strict";

console.log(React);
console.log(ReactDOM);
var News = React.createClass({
	render: function render() {
		return React.createElement(
			"div",
			{ className: "News" },
			"\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442."
		);
	}
});

var App = React.createClass({
	render: function render() {
		return React.createElement(
			"div",
			{ className: "App" },
			"\u0412\u0441\u0435\u043C \u043F\u0440\u0438\u0432\u0435\u0442, \u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 App \u0438 \u044F \u0443\u043C\u0435\u044E \u0432\u043E\u0437\u0432\u043E\u0440\u0430\u0449\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u0438!",
			React.createElement(News, null)
		);
	}
});
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));