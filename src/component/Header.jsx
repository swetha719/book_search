import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <div className=''>
         <Navbar expand="lg" className="bg-light">
          <Container>
            <Navbar.Brand href="#home" style={{color:'black' ,fontSize:'30px',fontWeight:'bold',fontFamily:"Jaro, serif"}}><img src="https://tse4.mm.bing.net/th?id=OIP.g0MnN8JETeonK5Su57XynwHaH9&pid=Api&P=0&h=180" width={'50px'} height={'50px'} alt="" />BOOK HUB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" style={{color:'black' ,fontSize:'25px',fontWeight:'bold'}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{color:'black' ,fontSize:'25px',fontWeight:'bold'}}>About</Nav.Link>
                <Nav.Link href="#home" style={{color:'black' ,fontSize:'25px',fontWeight:'bold'}}>Contact Us</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    
    </>
  )
}

export default Header