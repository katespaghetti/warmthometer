var React = require("react");

class TextWarmCold extends React.Component {
	render() {
		var style = {
			fontSize:  this.props.size
		};

		return (
			<div style={style}>Warmth-o-meter</div>
		);
	}
}

module.exports = TextWarmCold;