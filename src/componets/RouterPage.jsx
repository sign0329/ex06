import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route, Switch } from 'react-router-dom';
import BookPage from './BookPage';
import HomePage from './HomePage';

const RouterPage = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    
                    <Link to="/books">LOGO</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/">홈</Link>
                            <Link to="/book">도서검색</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/book" component={BookPage}/>
        </Switch>
     </> 
    )
}

export default RouterPage