import React, { useState } from 'react'
import { Container, Row, Col, Pagination, Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';

function Download() {

    const FilesPerPage = 10;

    const pageNum = 1

    const generateFiles = (pageNum) => {
        // 根據 pageNum 生成檔案數據
        const files = [];
        for (let i = 1 + (pageNum - 1) * FilesPerPage; i <= pageNum * FilesPerPage; i++) {
            files.push({ id: i, name: `File ${i}`, content: `This is the content of File ${i}` });
        }
        return files;
    };

    const downloadFile = (file) => {
        const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, `${file.name}.txt`);
    };

    const [files] = useState(generateFiles(pageNum));
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        {files.map((file) => (
                            <div key={file.id}>
                                <span>{file.name}</span>
                                <Button variant="link" onClick={() => downloadFile(file)}>
                                    Download
                                </Button>
                            </div>
                        ))}
                    </div>
                    <Pagination>
                        {Array.from({ length: Math.ceil(100 / FilesPerPage) }, (_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={index + 1 === currentPage}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </Col>
            </Row>
        </Container>

    )
}

export default Download