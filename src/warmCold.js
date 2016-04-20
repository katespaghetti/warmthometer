var React = require("react"),
	ReactDOM = require("react-dom"),
	TextWarmCold = require("./TextWarmCold"),
	ArrowsWarmCold = require("./ArrowsWarmCold");

require("font-awesome-webpack");
var styles = require("./WarmCold.scss");

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
				<ArrowsWarmCold className={styles.upArrowColor} direction={"fa fa-arrow-up"} onClick={this.increaseFontSize.bind(this)} />
				<TextWarmCold size={this.state.fontSize} />
				<ArrowsWarmCold className={styles.downArrowColor} direction={"fa fa-arrow-down"} onClick={this.decreaseFontSize.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(<WarmCold />, document.body);