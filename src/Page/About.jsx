import React, { useState } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function About() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const students = [{ "id": 1, "name": "test", "email":"123@gmamail" }, { "id": 2, "name": "test2" }, { "id": 3, "name": "tes3t" }, { "id": 4, "name": "tes4t" }]
  return (
    <Container fluid className='py-4'>
      <Row>
        <Col xs={12} md={3}>
          <ListGroup className='px-3'>
            {students.map((student) => (
              <ListGroup.Item key={student.id} action onClick={() => setSelectedStudent(student)}>
                {student.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={12} md={9}>
          {selectedStudent && (
            <div className='p-3'>
              <h2>{selectedStudent.name}</h2>
              <p>Email: {selectedStudent.email}</p>
              {/* 其他學生詳細資訊 */}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default About