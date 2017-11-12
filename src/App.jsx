import React from "react";
import MenuWithSearch from "./components/MenuWithSearch.jsx";
import menu from "./menu.json";
import "./App.styl"

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h3>ShokoHelp</h3>
				<div className="head-mind">by <span className="author__name">Alexander Ivankov</span></div>
				<MenuWithSearch menu={menu}/>
				{/*<Arrow/>*/}
				{/*<Comments/>*/}
			</div>
		)
	}
}
export default App;