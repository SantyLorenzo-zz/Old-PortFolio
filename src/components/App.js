import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './styles/app.css'

class App extends React.Component {

	render() {
		return (
			<div className='full-container'>
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App