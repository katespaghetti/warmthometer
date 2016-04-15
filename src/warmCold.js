var $ = require("jquery"),
	React = require("react"),
	ReactDOM = require("react-dom"),
	TextWarmCold = require("./TextWarmCold");

console.log("we have more to do than console.log things and things");

class WarmCold extends React.Component {
	render() {
		return (
			<div>
				<TextWarmCold size={"90px"} />
				<TextWarmCold size={"12px"} />
			</div>
		);
	}
}



ReactDOM.render(<WarmCold />, document.body);