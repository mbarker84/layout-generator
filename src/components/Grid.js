import React from 'react'
import GridItem from './GridItem'

class Grid extends React.Component {
	render() {
		const initialArray = Array(6).fill('')

		return (
			<div className="grid">
				{initialArray.map(({ index }) => (
					<GridItem key={index} />
				))}
			</div>
		)
	}
}

export default Grid
