import React from 'react'
import GridItem from './GridItem'

class Grid extends React.Component {
	render() {
		const initialArray = Array(this.props.noOfItems).fill('')
		const style = {
			gridTemplateColumns: this.props.columns,
			gridTemplateRows: this.props.rows,
			backgroundColor: this.props.color
		}

		return (
			<div className="grid" style={style}>
				{initialArray.map((el, index) => (
					<GridItem
						key={index}
						index={index}
						borderRadius={this.props.itemStyle[index]}
					/>
				))}
			</div>
		)
	}
}

export default Grid
