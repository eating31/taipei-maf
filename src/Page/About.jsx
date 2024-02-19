import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
//import { Document, Page, pdfjs } from "react-pdf";
import {  useParams } from "react-router-dom";
import Files from '../File/1121141Rule.pdf'
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

import Broad from '../Image/broad.jpg'

function About() {
  
  let { title } = useParams();
  const [selectedTitle, setSelectedTitle] = useState();
  
  // 確認有無參數
  useEffect(() => {
    if(title){
      setSelectedTitle(title)
    }else{
      setSelectedTitle('理事長簡介')
    }
  }, []);

  //pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div style={{ "minHeight": "70vh" }}>
      <Container fluid className='py-4 '>
        <Row>
          <Col xs={12} md={3}>
            <p className='fs-3 text-center'>關於本會</p>
            <ListGroup className='px-3 fs-5'>
              <ListGroup.Item action onClick={() => setSelectedTitle('理事長簡介')} active={selectedTitle === '理事長簡介'}>
                理事長簡介
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => setSelectedTitle('本會簡介')} active={selectedTitle === '本會簡介'}>
                本會簡介
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => setSelectedTitle('理監事簡介')} active={selectedTitle === '理監事簡介'}>
                理監事簡介
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => setSelectedTitle('會務人員')} active={selectedTitle === '會務人員'}>
                會務人員
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => setSelectedTitle('組織章程')} active={selectedTitle === '組織章程'}>
                組織章程
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => setSelectedTitle('會議記錄')} active={selectedTitle === '會議記錄'}>
                會議記錄
              </ListGroup.Item>
            </ListGroup>

          </Col>
          <Col xs={12} md={9}>



            <div>
              {selectedTitle === '理事長簡介' && (
                <div className='p-3'>
                  <h2>{selectedTitle.name}</h2>
                  <p>- No data now -</p>
                  {/* 其他學生詳細資訊 */}
                </div>
              )}


{/* Maybe TO DO 手機板點及圖片會放大 */}

              {selectedTitle === '本會簡介' && (
                <div className='p-3'>
                  <Image src={Broad} fluid />
                </div>
              )}

              {selectedTitle === '理監事簡介' && (
                <div className='p-3'>
                  <h2>{selectedTitle.name}</h2>
                  <p>- No data now -</p>
                  {/* 其他學生詳細資訊 */}
                </div>
              )}


              {selectedTitle === '會務人員' && (
                <div className='p-3'>
                  <h2>{selectedTitle.name}</h2>
                  <p>- No data now -</p>
                  {/* 其他學生詳細資訊 */}
                </div>
              )}


              {selectedTitle === '組織章程' && (
                <div className='p-3'>

                  <div  ref={containerRef} className='d-flex justify-content-center border m-5 px-5'>
                    {/* <Document file={Files} onLoadSuccess={onDocumentLoadSuccess}>
                      <Page 
                      pageNumber={pageNumber} 
                      scale={1.5}
                      width={containerRef.current ? containerRef.current.offsetWidth : undefined}
                      />
                    </Document> */}

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
              )}
              {selectedTitle === '會議記錄' && (
                <div className='p-3'>
                  <h2>{selectedTitle.name}</h2>
                  <p>- No data now -</p>
                  {/* 其他學生詳細資訊 */}
                </div>
              )}


            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About