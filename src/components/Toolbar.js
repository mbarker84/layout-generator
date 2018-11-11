import React from 'react'
import Button from './Button'

class Toolbar extends React.Component {
	render() {
		return (
			<div className="toolbar">
				<Button text="Change layout" updateLayout={this.props.updateLayout} />
			</div>
		)
	}
}

export default Toolbar
