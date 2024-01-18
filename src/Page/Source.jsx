import React, { useState } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Source() {
  const [selectedTitle, setSelectedTitle] = useState(null);

  return (
    <Container fluid className='py-4'>
      <Row>
        <Col xs={12} md={3}>
          <ListGroup className='px-3 fs-5'>
            <ListGroup.Item action onClick={() => setSelectedTitle('P')} active={selectedTitle === 'P'}>
              體育會
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setSelectedTitle('G')} active={selectedTitle === 'G'}>
              運動中心
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setSelectedTitle('A')} active={selectedTitle === 'A'}>
              協會
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => setSelectedTitle('C')} active={selectedTitle === 'C'}>
              委員會
            </ListGroup.Item>

          </ListGroup>
        </Col>
        <Col xs={12} md={9}>
          {selectedTitle === 'P' && (
            <div className='p-3'>

              {/* 其他詳細資訊 */}
            </div>
          )}

          {selectedTitle === 'G' && (
            <div className='p-3'>

              {/* 其他詳細資訊 */}
            </div>
          )}

          {selectedTitle === 'A' && (
            <div className='p-3'>

              {/* 其他詳細資訊 */}
            </div>
          )}

          {selectedTitle === 'C' && (
            <div className='p-3'>

              {/* 其他詳細資訊 */}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Source