import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './styles/header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      currentItem: 'Home'
    }
  }

  render() {
    const { currentItem } = this.state
    return (
      <Navbar class='header-container' brand='SL' right>
        <NavItem href='#home-container' onFocus={() => this.setState({ currentItem: 'Home' })} className='home'>
          <p>Home</p>
          {currentItem === 'Home' ? 
            <div className='circle animated fadeInUp' /> : null
          }
        </NavItem>
        <NavItem href='#about-container' onFocus={() => this.setState({ currentItem: 'About me' })} className='about me'>
          <p>About Me</p>
          {currentItem === 'About me' ? 
              <div className='circle animated fadeInUp' /> : null
            }
        </NavItem>
        <NavItem href='#work-container' onFocus={() => this.setState({ currentItem: 'Work' })} className='work'>
          <p>Projects</p>
          {currentItem === 'Work' ? 
            <div className='circle animated fadeInUp' /> : null
          }
        </NavItem>
        <NavItem href='#skills-container' onFocus={() => this.setState({ currentItem: 'Skills' })} className='skills'>
          <p>Skills</p>
          {currentItem === 'Skills' ? 
            <div className='circle animated fadeInUp' /> : null
          }
        </NavItem>
        <NavItem href='#footer-container' onFocus={() => this.setState({ currentItem: 'Contact' })} className='contact'>
          <p>Contact</p>
          {currentItem === 'Contact' ? 
            <div className='circle animated fadeInUp' /> : null
          }
        </NavItem>
      </Navbar>
    )
  }
}
export default Header
