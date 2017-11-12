import React from 'react';
import "./Article.styl";

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			visible: false
		};
		this.activatePlate = this.activatePlate.bind(this);
		this.readMoreClick = this.readMoreClick.bind(this);
	}

	activatePlate() {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}));
		this.props.selectFood(this.props.index, this.state.isActive)
	}

	readMoreClick(e) {
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
				{/*<div className={"food__readmore " + (visible ? 'reverse': '')} onClick={this.readMoreClick}/>*/}
				<div className="content__wrapper" onClick={this.activatePlate}>
					<div className="food__content">
						<p className="food__name">{food}</p>
						{/*<p className={"food__calories " + (visible ? '': 'none')}>*/}
							{/*<span className="food__calories__text">Ккал:</span> {calories}</p>*/}
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