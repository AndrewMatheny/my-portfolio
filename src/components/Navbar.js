import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, Redirect } from 'react-router-dom'


export default class Navbar extends Component {
  state = {
     activeItem: 'home',
     redirect: null
    }

  handleItemClick = (e, { name }) => {
    
    this.setState({
       activeItem: name,
      //  redirect: name 
    })


  }

  render() {
    const { activeItem } = this.state
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />
    // }

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={NavLink}
            to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/about'
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/dailydollar'
            name='daily dollar'
            active={activeItem === 'dailydollar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/tripplanner'
            name='trip planner'
            active={activeItem === 'tripplanner'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/jobsearchtracker'
            name='job search tracker'
            active={activeItem === 'jobsearchtracker'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}