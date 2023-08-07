import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

const MovieItem = ({ movie }) => {
    const { mal_id: id, title, images, synopsis } = movie
    return (
        <Card className='m-auto bg-light movieItemCard' as={Link} to={`/movie/${id}`}>
            <Card.Img variant="top" src={images?.jpg.image_url}
                className='rounded rounded-bottom-0 img-fluid movieItemImg' />
            <Card.Body>
                <Card.Title className="mb-0">
                    {title.length > 25 ? title.substring(0, 25) + '...' : title}
                </Card.Title>
                <Card.Text className='mt-2'>
                    {synopsis?.substring(0, 50) + '....'}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieItem