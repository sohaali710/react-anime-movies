import React from 'react'

import { Nav, Navbar as NavbarBs, Form, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom/dist/umd/react-router-dom.development';
import brandIcon from '../../assets/icons/video-solid.svg'
import { useDispatch } from 'react-redux';
import { getAllMovies, pageMovies, searchMovies, setLoading } from '../../actions/moviesAction';

const Navbar = () => {
    const { pathname } = useLocation()

    const dispatch = useDispatch()

    const onSearch = (word) => {
        dispatch(setLoading())
        dispatch(pageMovies(1)) //on search reset the pagination to page number one

        if (word) {
            dispatch(searchMovies(word))
        }
        else {
            dispatch(getAllMovies())
        }
    }

    return (
        <NavbarBs expand="lg">
            <Container>
                <NavbarBs.Brand as={NavLink} to="/">
                    <div className='brand-icon'>
                        <img src={brandIcon} alt="brand icon" />
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
                    {
                        pathname.split('/')[1] !== 'movie' &&
                        <Form className="d-flex w-50">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={e => onSearch(e.target.value)}
                            />
                        </Form>
                    }
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>

    )
}

export default Navbar