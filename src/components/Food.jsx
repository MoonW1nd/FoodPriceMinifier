import React from "react";
import Article from "./Article.jsx";
import "./Food.styl"

export default class Food extends React.Component {
	render() {
		let data = this.props.menu;
		console.log(data);
		let foodTemplate;
		if (data.length > 0)
			foodTemplate = data.map(function (item, index) {
				return (
					<div key={index}>
						<Article data={item}/>
					</div>
				)
			});
		else
			foodTemplate = <p>Блюд с таким названием не найдено :(</p>;
		return (
			<div className="food">
				{foodTemplate}
				<strong className={data.length > 0 ? 'count-food' : 'count-food none'}>
					Всего предложений: {data.length}
				</strong>
			</div>
		)
	}
}