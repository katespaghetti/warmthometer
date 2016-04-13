var $ = require("jquery"),
	React = require("react"),
	ReactDOM = require("react-dom");

console.log("we have more to do than console.log things and things");

// $("body").css("background-color","red");

class WarmCold extends React.Component {
	render() {
		return (
			<div>
				Warmth-o-meter 
				<NewComponent/> 
			</div>
		) 
	}
}

class NewComponent extends React.Component {
	render() {
		return <div>New Component</div>
	}
}



ReactDOM.render(<WarmCold/>, document.body);