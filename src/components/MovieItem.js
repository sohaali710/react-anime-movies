import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

const imgUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

const MovieItem = ({ movie }) => {
    const { id, title, overview, poster_path } = movie
    return (
        <Card className='m-auto bg-light' as={Link} to={`/movie/${id}`}>
            <Card.Img variant="top" src={imgUrl + poster_path}
                className='rounded rounded-bottom-0 img-fluid movieItemImg' />
            <Card.Body>
                <Card.Title className="mb-0">
                    {title.length > 25 ? title.substring(0, 25) + '...' : title}
                </Card.Title>
                <Card.Text className='mt-2'>
                    {overview.substring(0, 50) + '....'}
                </Card.Text>
                {/* <h5 className='text-muted mt-3 mb-4 product-price'>{}</h5> */}
            </Card.Body>
        </Card>
    )
}

export default MovieItem