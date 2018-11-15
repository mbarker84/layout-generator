import React from 'react'
import Grid from './components/Grid'
import Toolbar from './components/Toolbar'
import { getRandomInt } from './helpers'
import './App.css'

class App extends React.Component {
	state = {
		noOfItems: 6,
		layout: {},
		columns: '',
		rows: '',
		noOfTracks: 3,
		maximum: 8,
		itemStyles: [],
		itemColors: []
	}

	generateValues = () => {
		const initialArray = Array(this.state.noOfTracks).fill('')
		return initialArray
			.map(() => `${getRandomInt(1, this.state.maximum)}fr`)
			.join(' ')
	}

	randBorderRadius = () => {
		const bordersArray = Array(8)
			.fill('')
			.map(() => `${getRandomInt(20, 70)}%`)
		bordersArray.splice(4, 0, '/')

		return bordersArray.join(' ')
	}

	itemBorderRadii = () => {
		return Array(this.state.noOfItems)
			.fill('')
			.map(() => this.randBorderRadius())
	}

	itemColors = () => {
		return Array(this.state.noOfItems)
			.fill('')
			.map(() => getRandomInt(0, 360))
	}

	switchLayout = () => {
		const layoutNumber = getRandomInt(1, 4)

		if (layoutNumber === 1) {
			return {
				row1: 'a a b',
				row2: '. c b',
				row3: '. c .'
			}
		} else if (layoutNumber === 2) {
			return {
				row1: 'a a .',
				row2: 'a a b',
				row3: '. c .'
			}
		} else if (layoutNumber === 3) {
			return {
				row1: '. a .',
				row2: '. a b',
				row3: 'c c b'
			}
		}
	}

	updateMaximum = updatedMaximum => {
		this.setState({ maximum: updatedMaximum })
	}

	updateLayout = () => {
		this.setState({
			columns: this.generateValues(),
			rows: this.generateValues(),
			itemStyles: this.itemBorderRadii(),
			itemColors: this.itemColors(),
			layout: this.switchLayout()
		})
	}

	componentDidMount = () => {
		this.updateLayout()
	}

	render() {
		const {
			noOfItems,
			columns,
			rows,
			itemStyles,
			itemColors,
			layout,
			maximum
		} = this.state

		return (
			<div className="App">
				<Toolbar
					updateLayout={this.updateLayout}
					maximum={maximum}
					updateMaximum={this.updateMaximum}
				/>
				<Grid
					noOfItems={noOfItems}
					columns={columns}
					rows={rows}
					itemStyle={itemStyles}
					itemColor={itemColors}
					layout={layout}
				/>
			</div>
		)
	}
}

export default App
