import React from "react";
import menu from "../menu.json";
import Article from "./Article.jsx";
import "./MenuWithSearch.styl"

export default class MenuWithSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayedFood: menu,
			textOnInput: "",
			needDisplayResult: false,
			activeArticles: []
		};
		this.handlerInputFindChange = this.handlerInputFindChange.bind(this)
		this.handlerSubmit = this.handlerSubmit.bind(this)
		this.handlerSelectFood = this.handlerSelectFood.bind(this)
	}

	handlerSubmit(event) {
		event.preventDefault()
	}

	handlerSelectFood(idArticle, state) {
		if (state === false) {
			this.setState({needDisplayResult: true});
		}

		console.log(this.state.displayedFood[idArticle]);
		console.log(this.state.needDisplayResult);
	}

	handlerInputFindChange(event) {
		let searchQuery = event.target.value.toLowerCase();

		let displayedFood = menu.filter(function (el) {
			let searchValue = el.food.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({textOnInput: event.target.value});
		this.setState({displayedFood: displayedFood})
	}

	render () {
		let data  = this.state.displayedFood;
		let handler = this.handlerSelectFood;
		let needDisplayResult = this.state.needDisplayResult;
		let foodTemplate;
		if (data.length > 0)
			foodTemplate = data.map(function (item, index) {
				return (
					<div key={index}>
						<Article index={index} data={item} selectFood={handler}/>
					</div>
				)
			});
		else
			foodTemplate = <p>Блюд с таким названием не найдено :(</p>;
		return (
			<div className={"menu__wrapper " + (needDisplayResult ? 'two-section' : 'one-section')}>
				<section>
					<input
						type="text"
						placeholder="Поиск блюда"
						className="search-field"
						value={this.state.email}
						onChange={this.handlerInputFindChange}
					/>
					<div className="food">
						{foodTemplate}
						<strong className={data.length > 0 ? 'count-food' : 'count-food none'}>
							Всего предложений: {data.length}
						</strong>
					</div>
				</section>
				<section className={"menu__sorted " + (needDisplayResult ? '': 'none')}>
					Наилучшие предложения: <br/>
					Скоро здесь что-то будет :)
				</section>
			</div>
		)
	}
}