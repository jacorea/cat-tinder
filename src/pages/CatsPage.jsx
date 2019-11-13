import React from 'react'
import { 
        Col, 
        Container,
        Row,
        ListGroup,
        ListGroupItem } from 'react-bootstrap'

const CatsPage = ({ cats }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {cats.map((cat,index)=> {
              return (
                <ListGroupItem key={index}>
                  <h4>
                    <span className="cat-name">{cat.name} </span>
                    -
                    <small className="cat-age"> {cat.age}</small>
                  </h4>
                    <span className="cat-enjoys">{cat.enjoys}</span>
                </ListGroupItem>

              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default CatsPage
