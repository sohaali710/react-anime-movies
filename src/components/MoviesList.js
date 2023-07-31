import React from 'react'
import MovieItem from './MovieItem'
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from './Pagination';

const MoviesList = ({ movies, getPage, pageCount }) => {
    return (
        <Container className='my-5'>
            <Row>
                {
                    movies.length === 0 ?
                        <h2>There is no movies</h2>
                        : (
                            movies.map(movie => {
                                return (
                                    <Col className='mb-4' key={movie.id}>
                                        <MovieItem movie={movie} />
                                    </Col>
                                )
                            })
                        )
                }
            </Row>
            <Row>
                <Col>
                    <Pagination getPage={getPage} pageCount={pageCount} />
                </Col>
            </Row>
        </Container>
    )
}

export default MoviesList