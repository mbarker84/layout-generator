import React from 'react'
import GridItem from './GridItem'

class Grid extends React.Component {
	render() {
		const initialArray = Array(this.props.noOfItems).fill('')
		const { columns, rows, layout, itemStyle, itemColor } = this.props

		const style = {
			gridTemplateColumns: columns,
			gridTemplateRows: rows,
			gridTemplateAreas: `"${layout.row1}" "${layout.row2}" "${layout.row3}"`
		}

		return (
			<div className="grid" style={style}>
				{initialArray.map((el, index) => (
					<GridItem
						key={index}
						index={index}
						borderRadius={itemStyle[index]}
						itemColor={itemColor[index]}
					/>
				))}
			</div>
		)
	}
}

export default Grid
