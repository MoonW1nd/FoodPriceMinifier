import React from "react";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h3>ShokoHelp</h3>
				<div className="head-mind">by <span className="author__name">Alexander Ivankov</span></div>
				{/*<InputFind menu={menu}/>*/}
				{/*<Arrow/>*/}
				<Comments/>
			</div>
		)
	}
}
export default App;