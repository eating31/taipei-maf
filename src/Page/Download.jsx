import React, { useState } from 'react'
import { Container, Row, Col, Pagination, Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';

function Download() {
    const dataSet = [...Array(Math.ceil(51))].map(
        (a, i) => "Record " + (i + 1) + '.  ' + new Date()
      );


    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentNews = dataSet.slice(startIndex, endIndex);
    const totalPages = Math.ceil(dataSet.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    // 最多顯示10頁
     // TO DO手機板只能五頁
    const startPage = Math.max(1, currentPage - 4);
    const endPage = Math.min(totalPages , startPage + 9);

   


    // 下載檔案
    const downloadFile = (file) => {
        const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, `${file.name}.txt`);
    };


    return (
        <div style={{"minHeight": "70vh"}}>
        <Container>
             <div className='fs-3 py-4'>檔案下載</div>
             <div className='px-4'>
             <Row>
                <Col>
                    <div>
                        {currentNews.map((file) => (
                            <div key={file.id}>
                                <span>{file}</span>
                                <Button variant="link" onClick={() => downloadFile(file)}>
                                    Download
                                </Button>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
             </div>
             <div className='mt-auto d-flex justify-content-center py-4'>
                <Pagination>
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(endPage - startPage + 1)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={startPage + index === currentPage}
                            onClick={() => handlePageChange(startPage + index)}
                        >
                            {startPage + index}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                </Pagination>
            </div>
           
        </Container>
        </div>
    )
}

export default Download