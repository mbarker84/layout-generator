import React from 'react'

class GridItem extends React.Component {
	render() {
		const style = {
			borderRadius: this.props.borderRadius,
			backgroundColor: `hsl(${this.props.itemColor}, 68%, 56%)`
		}

		return <div className="gridItem" style={style} />
	}
}

export default GridItem
