import React from 'react'
import Grid from './components/Grid'
import Toolbar from './components/Toolbar'
import { getRandomInt } from './helpers'
import './App.css'

class App extends React.Component {
	state = {
		noOfItems: 6,
		layout: 1,
		columns: '1fr 2fr 3fr',
		rows: '1fr 2fr 3fr',
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
		const arr = Array(8).fill('')
		const bordersArray = arr.map(() => `${getRandomInt(20, 70)}%`)
		bordersArray.splice(4, 0, '/')

		return bordersArray.join(' ')
	}

	itemBorderRadii = () => {
		const itemsArray = Array(this.state.noOfItems).fill('')

		const newItems = itemsArray.map(() => this.randBorderRadius())
		return newItems
	}

	updateLayout = () => {
		this.setState({
			columns: this.generateValues(),
			rows: this.generateValues(),
			itemStyles: this.itemBorderRadii()
		})

		console.log(this.state)
	}

	componentDidMount = () => {
		this.updateLayout()
	}

	render() {
		return (
			<div className="App">
				<Toolbar updateLayout={this.updateLayout} />
				<Grid
					noOfItems={this.state.noOfItems}
					columns={this.state.columns}
					rows={this.state.rows}
					itemStyle={this.state.itemStyles}
				/>
			</div>
		)
	}
}

export default App
