import React from 'react'

class Button extends React.Component {
	render() {
		return (
			<button
				type="submit"
				className="button"
				onClick={this.props.updateLayout}
			>
				{this.props.text}
			</button>
		)
	}
}

export default Button
