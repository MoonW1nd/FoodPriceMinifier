import React from "react";

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			visible: false
		};
		this.activatePlate = this.activatePlate.bind(this);
		this.readmoreClick = this.readmoreClick.bind(this);
	}

	activatePlate() {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}));
	}

	readmoreClick(e) {
		e.preventDefault();
		this.setState(prevState => ({
			visible: !prevState.visible
		}));
	}

	render() {
		let food = this.props.data.food,
			price = this.props.data.price,
			calories = this.props.data.calories,
			visible = this.state.visible;
		return (
			<div className={(this.state.isActive ? "article active" : "article") + (visible? " more__info":"")}>
				<div className={"food__readmore " + (visible ? 'reverse': '')} onClick={this.readmoreClick}></div>
				<div className="content__wrapper" onClick={this.activatePlate}>
					<div className="food__content">
						<p className="food__name">{food}</p>
						<p className={"food__calories " + (visible ? '': 'none')}>
							<span className="food__calories__text">Ккал:</span> {calories}</p>
					</div>
					<p className="food__price">
						{price}
						<span className="rubles"> руб.</span>
					</p>
				</div>
			</div>
		)
	}
}

// TODO:[A.Ivankov] add setup propTypes
// Article.propTypes ={
// 	data: React.PropTypes.shape({
// 		food: React.PropTypes.string.isRequired,
// 		price: React.PropTypes.number.isRequired,
// 		calories: React.PropTypes.number
// 	})
// }