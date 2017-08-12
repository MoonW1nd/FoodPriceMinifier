(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var menu = [{
	food: "Цезарь с курицей",
	price: 350
}, {
	food: "Цезарь с тигровыми криветками",
	price: 390
}, {
	food: "Салат по Итальянски",
	price: 340
}, {
	food: "Салат Ницца",
	price: 330
}, {
	food: "Салат Греческий",
	price: 330
}, {
	food: "Салат Руккла и клубника",
	price: 315
}, {
	food: "Крем суп с шампиньонами",
	price: 225
}, {
	food: "Ролл Цезарь",
	price: 255
}, {
	food: "Ролл Филадельфия",
	price: 265
}, {
	food: "Ролл с вечиной и омлетом",
	price: 255
}, {
	food: "Клаб сэндвич",
	price: 290
}, {
	food: "Бургер",
	price: 320
}, {
	food: "Кесадилья овощная",
	price: 245
}, {
	food: "Кесадилья с курицей",
	price: 290
}, {
	food: "Фоккачино с курицей барбекю",
	price: 275
}, {
	food: "Тост с сыром и ветчиной",
	price: 265
}, {
	food: "Мясная лазанья",
	price: 320
}, {
	food: "Куриная грудкв с пюре",
	price: 290
}, {
	food: "Куриная грудка с овощами",
	price: 290
}, {
	food: "Сибас на пару с пюре",
	price: 450
}, {
	food: "Сибас на пару с овощами гриль",
	price: 450
}, {
	food: "Сибас на пару с кускусом и соусом песто",
	price: 450
}, {
	food: "Сибас на пару с картофилем по домашнему",
	price: 450
}, {
	food: "Биточки с томленой уткой",
	price: 340
}, {
	food: "Лапша с тигровыми криветками",
	price: 360
}, {
	food: "Паста карбанара",
	price: 320
}, {
	food: "Паста Альфредо с курицей",
	price: 325
}, {
	food: "Ригатони с копченым лососем",
	price: 360
}, {
	food: "Торт Москва",
	price: 275
}, {
	food: "Торт Медовик",
	price: 250
}, {
	food: "Торт Прага",
	price: 250
}, {
	food: "Торот Опера",
	price: 240
}, {
	food: "Торт Наполеон с клубникой",
	price: 270
}, {
	food: "Чизкейк Орео",
	price: 250
}, {
	food: "Эклер ванильный",
	price: 130
}, {
	food: "Эклер шоколадный",
	price: 130
}, {
	food: "Тарталетка с ягодами",
	price: 220
}, {
	food: "Торт лимонный с меренгой",
	price: 195
}, {
	food: "Чизкейк яблочный",
	price: 240
}, {
	food: "Чизкейк Нью-йорк",
	price: 240
}, {
	food: "Фисташковый торт с профитроли",
	price: 260
}, {
	food: "Блинчики малиновые",
	price: 265
}, {
	food: "Блинчики легендарные с шоколадом",
	price: 265
}, {
	food: "Блинчики с сыром и ветчиной",
	price: 265
}, {
	food: "Блинчики с мясом",
	price: 265
}, {
	food: "Блины с жюльеном",
	price: 275
}, {
	food: "Блины с творогом",
	price: 275
}, {
	food: "Блины яблочно-карамельные",
	price: 265
}, {
	food: "Сырники со сметаной и малиновым соусом",
	price: 265
}, {
	food: "Аква минерале с газом",
	price: 130
}, {
	food: "Аква минерале без газа",
	price: 130
}, {
	food: "Pepsi",
	price: 140
}, {
	food: "Pepsi лайт",
	price: 140
}, {
	food: "Mirinda orange",
	price: 140
}, {
	food: "7up",
	price: 140
}, {
	food: "Сок Я яблочный",
	price: 150
}, {
	food: "Сок Я апельсиновый",
	price: 150
}];
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

var Article = function (_React$Component) {
	_inherits(Article, _React$Component);

	function Article(props) {
		_classCallCheck(this, Article);

		var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

		_this.state = { isActive: false };
		_this.activatePlate = _this.activatePlate.bind(_this);
		return _this;
	}

	_createClass(Article, [{
		key: "activatePlate",
		value: function activatePlate() {
			this.setState(function (prevState) {
				return {
					isActive: !prevState.isActive
				};
			});
		}
	}, {
		key: "propTypes",
		value: function propTypes() {
			data: React.PropTypes.share({
				author: React.PropTypes.string.isRequired,
				text: React.PropTypes.string.isRequired
			});
		}
	}, {
		key: "render",
		value: function render() {
			var food = this.props.data.food,
			    price = this.props.data.price;
			return React.createElement(
				"div",
				{ className: this.state.isActive ? "article active" : "article", onClick: this.activatePlate },
				React.createElement(
					"p",
					{ className: "food__name" },
					food
				),
				React.createElement(
					"p",
					{ className: "food__price" },
					price,
					React.createElement(
						"span",
						{ className: "rubles" },
						" \u0440\u0443\u0431."
					)
				)
			);
		}
	}]);

	return Article;
}(React.Component);

var Arrow = function (_React$Component2) {
	_inherits(Arrow, _React$Component2);

	function Arrow() {
		_classCallCheck(this, Arrow);

		return _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments));
	}

	_createClass(Arrow, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "arrow-next-left-wrapper" },
				React.createElement("div", { className: "arrow-next-right" }),
				React.createElement(
					"div",
					{ className: "" },
					"\u0414\u0430\u043B\u0435\u0435"
				)
			);
		}
	}]);

	return Arrow;
}(React.Component);

var Food = function (_React$Component3) {
	_inherits(Food, _React$Component3);

	function Food() {
		_classCallCheck(this, Food);

		return _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).apply(this, arguments));
	}

	_createClass(Food, [{
		key: "render",
		value: function render() {
			var data = this.props.menu;
			var foodTemplate = void 0;
			if (data.length > 0) foodTemplate = data.map(function (item, index) {
				return React.createElement(
					"div",
					{ key: index },
					React.createElement(Article, { data: item })
				);
			});else foodTemplate = React.createElement(
				"p",
				null,
				"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0431\u043B\u044E\u0434 \u043D\u0435\u0442"
			);
			return React.createElement(
				"div",
				{ className: "food" },
				foodTemplate,
				React.createElement(
					"strong",
					{ className: data.length > 0 ? 'count-food' : 'count-food none' },
					"\u0412\u0441\u0435\u0433\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439: ",
					data.length
				)
			);
		}
	}]);

	return Food;
}(React.Component);

var Comments = function (_React$Component4) {
	_inherits(Comments, _React$Component4);

	function Comments() {
		_classCallCheck(this, Comments);

		return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
	}

	_createClass(Comments, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "comments" },
				"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 - \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B."
			);
		}
	}]);

	return Comments;
}(React.Component);

var CountAdd = function (_React$Component5) {
	_inherits(CountAdd, _React$Component5);

	function CountAdd() {
		_classCallCheck(this, CountAdd);

		return _possibleConstructorReturn(this, (CountAdd.__proto__ || Object.getPrototypeOf(CountAdd)).apply(this, arguments));
	}

	_createClass(CountAdd, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "count-add-food" },
				"\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0431\u043B\u044E\u0434:"
			);
		}
	}]);

	return CountAdd;
}(React.Component);

var App = function (_React$Component6) {
	_inherits(App, _React$Component6);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "App" },
				React.createElement(
					"h3",
					null,
					"ShokoHelp"
				),
				React.createElement(
					"div",
					{ className: "head-mind" },
					"\u041D\u0430\u0439\u0434\u0435\u0442\u0441\u044F \u0432\u0441\u0451"
				),
				React.createElement(Arrow, null),
				React.createElement(Food, { menu: menu }),
				React.createElement(Comments, null)
			);
		}
	}]);

	return App;
}(React.Component);

// ReactDOM.render(<Checkbox />, document.getElementById('checkbox'));

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

},{}]},{},[1]);
