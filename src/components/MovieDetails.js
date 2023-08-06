import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom/dist/umd/react-router-dom.development';
import { getMovieDetails, setLoading } from '../actions/moviesAction';

const imgUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState({})

    const dispatch = useDispatch()
    const { movieDetails, loading } = useSelector(state => state)

    useEffect(() => {
        dispatch(setLoading())
        dispatch(getMovieDetails(movieId))
    }, [])

    useEffect(() => {
        setMovie(movieDetails)
    }, [movieDetails])

    const { title, overview, release_date, vote_average, poster_path } = movie

    return (
        <Container className='my-4'>
            <Row>
                {
                    loading ?
                        (
                            <Col sm="12" className='spinner-container'>
                                <Spinner animation="border" variant='success' />
                            </Col>
                        )
                        : (
                            <Col sm="12">
                                <Card className='w-100 border-0 movieDetailsCard'>
                                    <Row>
                                        <Col sm='3'>
                                            <Card.Img variant="left" src={imgUrl + poster_path} className='rounded' />
                                        </Col>
                                        <Col sm='9'>
                                            <Card.Body>
                                                <Card.Title>{title}</Card.Title>
                                                <br />
                                                <Card.Text>
                                                    <span className='fw-bold'>Release date : </span>
                                                    {release_date}
                                                </Card.Text>
                                                <Card.Text>
                                                    <span className='fw-bold'>Vote average : </span>
                                                    {Math.floor(+vote_average * 10) / 10}
                                                </Card.Text>
                                                <Card.Text>
                                                    <div className='fw-bold fs-3'>Overview</div>
                                                    {overview}
                                                </Card.Text>
                                                <Button variant='success' href={movie.homepage}>Watch it</Button>
                                                <Button variant='success' as={Link} to='/'>Go to home</Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                }
            </Row>
        </Container>
    )
}

export default MovieDetails