import React from 'react'

import { Nav, Navbar as NavbarBs, Form, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';

const Navbar = ({ search }) => {
    const onSearch = (word) => {
        search(word)
    }

    return (
        <NavbarBs expand="lg">
            <Container>
                <NavbarBs.Brand as={NavLink} to="/">
                    <div className='brand-icon'>
                        <img src="./assets/icons/video-solid.svg" alt="brand icon" />
                    </div>
                    Anime Movies
                </NavbarBs.Brand>
                <NavbarBs.Toggle aria-controls="navbarScroll" />
                <NavbarBs.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex w-50">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={e => onSearch(e.target.value)}
                        />
                    </Form>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>

    )
}

export default Navbar