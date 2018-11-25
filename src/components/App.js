import React from 'react'
import Header from './Header'
import Main from './Main'
import './styles/app.css'

class App extends React.Component {

	render() {
		return (
			<div className='full-container'>
				<Header />
				<Main />
			</div>
		)
	}
}

export default App