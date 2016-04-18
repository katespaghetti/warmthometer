var $ = require("jquery"),
	React = require("react"),
	ReactDOM = require("react-dom"),
	TextWarmCold = require("./TextWarmCold"),
	ArrowsWarmCold = require("./ArrowsWarmCold");

require("font-awesome-webpack");

console.log("we have more to do than console.log things and things");

class WarmCold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fontSize: 48,
			direction: "fa fa-arrow-up"
		};
	}

	increaseFontSize() {
		this.setState({
			fontSize: this.state.fontSize + 5,
			direction: this.state.direction
		});
	}

	decreaseFontSize() {
		this.setState({
			fontSize: this.state.fontSize - 5,
			direction: this.state.direction
		});
	}

	render() {
		return (
			<div>
				<TextWarmCold size={this.state.fontSize} />
				<TextWarmCold size={"12px"} />
				<ArrowsWarmCold direction={"fa fa-arrow-up"} onClick={this.increaseFontSize.bind(this)} />
				<ArrowsWarmCold direction={"fa fa-arrow-down"} onClick={this.decreaseFontSize.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(<WarmCold />, document.body);