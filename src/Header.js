/*import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <nav>
           <h2>TODOLIST APP</h2>
          <ul className="nav-links">
         
          
          <Link to ="/"><li>Todo</li></Link>
          <Link  to="/account"><li>Account</li></Link>
          <Link to="/help"><li>Help</li></Link>
          </ul>
        </nav>
    )
}*/
/*import React from 'react'
import {Navbar} from 'react-bootstra'
import {Link} from 'react-router-dom'
import './App.css';


export default function Nav() {
    return (
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
    )
    }*/

import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const header= () => {
    return (
        <Navbar className="color-nav"  expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>My Todoapp</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/account">
      <Nav.Link>Account</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/help">
      <Nav.Link>Help</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default header