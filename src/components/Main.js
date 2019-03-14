import React from 'react'
import './styles/main.css'
import Carousel from './Carousel'
import dissie from './images/dissie.png'
import laplatapesos from './images/laplatapesos.png'
import unsplashImage from './images/unsplash.png' 

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      currentProject: '',
      currentClass:'image'
    }
  }

	render() {
    const carouselData = [
      {
        image: dissie,
        link: 'https://dissie-app.firebaseapp.com/',
        key: '1'
      },
      {
        image: laplatapesos,
        link: 'http://laplatapesos.com.ar/',
        key: '2'
      },
      {
        image: unsplashImage,
        link: 'https://unsplash-image-searcher.netlify.com/',
        key: '3'
      },
      {
        image: laplatapesos,
        link: 'http://laplatapesos.com.ar/',
        key: '4'
      },
      {
        image: dissie,
        link: 'https://dissie-app.firebaseapp.com/',
        key: '5'
      }
    ]
		return (
			<main>
        <section id='home-container' className='home-container'>
          <div className='names'>
            <h1 className='animated fadeIn'>Santiago Lorenzo</h1>
            <p className='animated fadeIn delay-1s'>Front-End Developer</p>
          </div>
        </section>
        <section id='about-container' className='about-container'>
          <div className='myContainer'>
            <div className='mySelf'>
              <h2>Who am I...</h2>
              <h4>Hello! My name is Santiago. I'm a Software Developer</h4>
              <p>As many other people, I enjoy to spend my free time Increasing my knowledge of web development and building new and challenging projects.</p>
            </div>
            <div className='myPicture' />
          </div>
        </section>
        <section id='work-container' className='work-container'>
          <div className='title'>
            <h3>My Lastest Work</h3>  
          </div>
          <div className='text'>
            <p>Some of my greatest and latest projects.</p>
          </div>
          <Carousel data={carouselData} />
        </section>
        <section id='skills-container' className='skills-container'>
          <div className='title'>
            <p>Technological Skills:</p>
          </div>
          <div className='subtitle'>
            <p>I enjoy to be always learning new things. Specially the technologies that makes your company special. </p>
          </div>
          <div className='skills'>
            <div className='knowledge'>
              <div className='column'>
                <div className='row'>Semantic HTML5</div>
                <div className='row'>Responsive CSS3</div>
                <div className='row'>JavaScript</div>
                <div className='row'>React JS</div>
              </div>
              <div className='column'>
                <div className='row'>NPM</div>
                <div className='row'>Material Design</div>
                <div className='row'>SASS-SCSS</div>
                <div className='row'>Redux</div>
              </div>
              <div className='column'>
                <div className='row'>GIT</div>
                <div className='row'>Clean Code</div>
                <div className='row'>Problem Solver</div>
                <div className='row'>Github</div>
              </div>
            </div>
          </div>
        </section>
      </main>
		)
	}
}

export default Main
