import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, setLoading } from '../actions/moviesAction';

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    const dispatch = useDispatch()
    const moviesData = useSelector(state => state.movies)
    const loading = useSelector(state => state.loading)
    useEffect(() => {
        dispatch(setLoading())
        dispatch(getAllMovies())
    }, [])

    useEffect(() => {
        setMovies(moviesData)
    }, [moviesData])

    console.log(movies)

    return (
        <Container className='my-5'>
            <Row>
                {
                    loading ?
                        (
                            <Col className='spinner-container mb-4'>
                                <Spinner animation="border" variant='success' />
                            </Col>
                        )
                        : (
                            movies.map(movie => {
                                return (
                                    <Col className='mb-4' key={movie.id}>
                                        {/* <Col className='mb-4' key={movie.mal_id}> */}
                                        <MovieItem movie={movie} />
                                    </Col>
                                )
                            })
                        )
                }
            </Row>
            {
                movies.length !== 0 &&
                (
                    <Row>
                        <Col>
                            <Pagination />
                        </Col>
                    </Row>
                )
            }
        </Container>
    )
}

export default MoviesList