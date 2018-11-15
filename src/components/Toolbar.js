import React from 'react'
import Button from './Button'
import Input from './Input'

class Toolbar extends React.Component {
	render() {
		return (
			<div className="toolbar">
				<Button text="Change layout" updateLayout={this.props.updateLayout} />
				<Input
					maximum={this.props.maximum}
					updateMaximum={this.props.updateMaximum}
				/>
			</div>
		)
	}
}

export default Toolbar
