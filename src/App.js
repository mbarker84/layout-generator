import React from 'react'
import Grid from './components/Grid'
import Toolbar from './components/Toolbar'
import './App.css'

class App extends React.Component {
	state = {
		layout: 1
	}

	render() {
		return (
			<div className="App">
				<Toolbar />
				<Grid />
			</div>
		)
	}
}

export default App
