import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// function handleClick() {
//     function handleClick(e) {
//         window.location.replace("./1");
//     }
// }

function List() {
    return (
        <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
            <div onClick={() => alert("상세보기 페이지로")}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>제목</Card.Title>
                    <Card.Text>작가</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </Col>
        ))}
        </Row>
    );
}

export default List;