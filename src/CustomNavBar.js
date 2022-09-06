import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as OpenHouseIcon } from './assets/openhouse-home-insurance-logo.svg';
import React from "react";


class CustomNav extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                quote_number: 0

            };

        }

        render(){
          return (
              <Navbar bg="light" expand="lg">
                  <Container fluid>
                      <Navbar.Brand href="/">
                          <OpenHouseIcon width="150" height="50"  alt={'company logo'}/>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                          <Nav
                              className="me-auto my-2 my-lg-0"
                              style={{ maxHeight: '100px' }}
                              navbarScroll
                          >
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/newquote">New Quote</Nav.Link>
                              <Nav.Link href="/myquote">My Quote</Nav.Link>
                              <Nav.Link href="/allquotes">Existing Quotes</Nav.Link>
                              <Nav.Link href="http://localhost:8080/">Open API Doc</Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
                );
            }
        }


export default CustomNav;