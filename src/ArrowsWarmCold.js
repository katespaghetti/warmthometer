var React = require("react");

// class ArrowsWarmCold extends React.Component {
// 	render() {
// 		return (
// 			<div onClick={this.props.onClick}>
// 				<i className="fa fa-arrow-up"></i>
// 			</div>
// 		);
// 	}
// }

class ArrowsWarmCold extends React.Component {
	render() {
		return (
			<div onClick={this.props.onClick}>
				<i className={this.props.direction}></i>
			</div>
		);
	}
}

module.exports = ArrowsWarmCold;