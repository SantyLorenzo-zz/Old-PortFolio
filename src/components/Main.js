import React from 'react'
import './styles/main.css'

class Main extends React.Component {

	render() {
		return (
			<main>
        <section className='home-container'>
          <div className='names'>
            <h1 className='animated fadeIn'>Santiago Lorenzo</h1>
            <p className='animated fadeIn'>Front-End Developer</p>
          </div>
        </section>
        <section style={{backgroundColor:'Black'}} className='about-container'>
          <div className=''>
            <div className=''>
              <h2>Who I am..</h2>
              <p>Hello! My name is Santiago. I'm a Software Developer</p>
              <p>As many other people, i enjoy spending my free time encreasing my knowledge of web development and building new and challenging projects.</p>
            </div>
            <div className=''></div>
          </div>
        </section>
      </main>
		)
	}
}

export default Main