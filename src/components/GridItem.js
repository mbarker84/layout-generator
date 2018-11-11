import React from 'react'

class GridItem extends React.Component {
	render() {
		const style = {
			borderRadius: this.props.borderRadius,
			backgroundColor: this.props.backgroundColor
		}

		return (
			<div className="gridItem" style={style}>
				{this.props.index}
			</div>
		)
	}
}

export default GridItem
