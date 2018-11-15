import React from 'react'

class Input extends React.Component {
	handleChange = e => {
		this.props.updateMaximum(e.currentTarget.value)
	}

	render() {
		return (
			<div className="input-group">
				<label className="label" htmlFor="maxColumns">
					Max. fr units
				</label>
				<input
					name="maxColumns"
					type="number"
					id="maxColumns"
					value={this.props.maximum}
					onChange={this.handleChange}
					min="1"
					max="35"
				/>
			</div>
		)
	}
}

export default Input
