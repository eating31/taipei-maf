import React, { useState } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import { Document, Page, pdfjs } from "react-pdf";

import Files from '../File/1121141Rule.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
function About() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages)
    setNumPages(numPages);
    setPageNumber(1);
  }

  const students = [{ "id": 1, "name": "理事長簡介", "email": "123@gmamail" }, { "id": 2, "name": "本會簡介" }, { "id": 3, "name": "理監事簡介" }, { "id": 4, "name": "會務人員" }, { "id": 5, "name": "組織章程" }, { "id": 6, "name": "會議記錄" }]
  return (
    <div style={{ "minHeight": "70vh" }}>
      <Container fluid className='py-4 '>
        <Row>
          <Col xs={12} md={3}>
            <p className='fs-3 text-center'>關於本會</p>
            <ListGroup className='px-3 fs-5'>
              {students.map((student) => (
                <ListGroup.Item key={student.id} action onClick={() => setSelectedStudent(student)} active={selectedStudent && student.id === selectedStudent.id}>
                  {student.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col xs={12} md={9}>



            <div>
            {selectedStudent && (
              <div className='p-3'>
                <h2>{selectedStudent.name}</h2>
                <p>Email: {selectedStudent.email}</p>
                {/* 其他學生詳細資訊 */}
              </div>
            )}
              <div className='d-flex justify-content-center border m-5'>
                <Document file={Files} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>

              </div>
              <div className='d-flex justify-content-center'>
                <div>
                  {pageNumber !== 1 &&
                    <button className='btn' onClick={() => setPageNumber(pageNumber - 1)}>上一頁</button>
                  }

                </div>
                <div>
                  頁數 {pageNumber} / {numPages}
                </div>
                <div>
                  {pageNumber !== numPages &&
                    <button className='btn' onClick={() => setPageNumber(pageNumber + 1)}>下一頁</button>

                  }
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About