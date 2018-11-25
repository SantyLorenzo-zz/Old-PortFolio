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
      <Navbar className='header-container' brand='SL' right>
        <NavItem onClick={() => this.setState({ currentItem: 'Home' })} className='home'>
          <p>Home</p>
          {currentItem === 'Home' ? 
            <div className='circle animated fadeInUp' /> : null
          }
        </NavItem>
        <NavItem onClick={() => this.setState({ currentItem: 'About' })} className='about'>
          <p>About</p>
          {currentItem === 'About' ? 
              <div className='circle animated fadeInUp' /> : null
            }
        </NavItem>
        <NavItem onClick={() => this.setState({ currentItem: 'Work' })} className='work'>
          <p>Work</p>
          {currentItem === 'Work' ? 
            <div className='circle animated fadeInUp' /> : null
          }
        </NavItem>
        <NavItem onClick={() => this.setState({ currentItem: 'Contact' })} className='contact'>
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
