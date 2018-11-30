import React from 'react'
import './styles/footer.css'


class Footer extends React.Component {
  render () {
    return (
      <section id='footer-container' className='footer-container'>
        <div className='divs-container'>
          <div className='about-santi'>
            <div className='firulais-container'>
              <div className='title'>
                <p>About Santi</p>
              </div>
              <div className='text'>
                <p>Hello there! My name is Santiago and I'm a Front End Developer. <br/> I started my journey as a self-taught Web Developer right after High School when my brother introduced me to HTML5. Ever since, I have fallen in love with web development and spend most of my days taking my craft to the next level.</p>
              </div>
              <div className='chingolo-container'>
                <div className='location'>
                  <p><i class="fas fa-map-marker-alt"></i> La Plata, Argentina</p>
                </div>
                <div className='relocation'>
                <p><i class="fas fa-plane-departure"></i> Available for relocation</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-me'>
            <div className='connect-title'>
              <p>Connect with me:</p> 
            </div>
            <div className='connect-ways'>
              <ul>
                <li><a href='#'><i class="fas fa-envelope"></i></a> santylore4@gmail.com</li>
                <li><a href='https://www.linkedin.com/in/santiago-lorenzo-77608a157/'><i class="fab fa-linkedin"></i></a> Santiago Lorenzo</li>
                <li><a href='#'><i class="fas fa-phone"></i></a> (221) 364-2233</li>
                <li><a href='https://github.com/SantyLorenzo'><i class="fab fa-github"></i></a> SantyLorenzo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer