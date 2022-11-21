import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import worksData from '../worksData';
import { useNavigate } from 'react-router';

const List = () => {
    const navigate = useNavigate();
    const works = worksData.map(work => {
        return (
            // <Row xs={2} md={4} className="g-4">
            // {Array.from({ length: 2 }).map((_, idx) => (
            //     <Col>
                <div className='col-md-2 mt-4' key={work.id} onClick={() => {navigate(`/computer/${work.id}`)}}>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>{work.name}</Card.Title>
                        <Card.Text>{work.team}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            //     </Col>
            // ))}
            // </Row>
        )
    });
    return(
        <>
            {works}
        </>
    );
};

export default List;