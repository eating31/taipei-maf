import React, { useState, useContext } from 'react'
import DatePicker from 'react-datepicker';
import { Pagination, Row, Button, Col, Image, Form } from 'react-bootstrap'
import { Context } from '../../Contexts/Context'
import 'react-datepicker/dist/react-datepicker.css';
function AllNew({ allNews }) {
    const { setSingleNewId } = useContext(Context)

    // 換頁的東西們
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // 當前頁的資料
    const currentNews = allNews.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allNews.length / itemsPerPage);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



    // search bar
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const options = [
        { value: 'option1', label: '選項1' },
        { value: 'option2', label: '選項2' },
        { value: 'option3', label: '選項3' },
    ];

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    function SearchNews(){
        // To do search
    }


    return (
        <div>
            <div className='m-2 p-3 rounded-4 d-flex justify-content-start' style={{ backgroundColor: 'lightblue' }}>
                <Form className='w-100'>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="4">
                            <Form.Label className='px-2 pe-4'>開始日期</Form.Label>
                            <DatePicker
                                selected={startDate}
                                onChange={handleStartDateChange}
                                dateFormat="yyyy-MM-dd"
                                className="form-control my-2"
                            />
                            
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label className='px-2 pe-4'>結束日期</Form.Label>
                            <DatePicker
                                selected={endDate}
                                onChange={handleEndDateChange}
                                dateFormat="yyyy-MM-dd"
                                className="form-control my-2"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Row>
                                <Col md={5} xs={4} className='px-4 text-end pt-3'>
                                    <Form.Label>公告種類</Form.Label>
                                </Col>
                                <Col md={7} xs={8} >
                                    <Form.Select value={selectedOption} onChange={handleSelectChange} className='my-2'>
                                        <option value="">選擇...</option>
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Col className='d-flex justify-content-center align-items-end my-2'>
                            <Button variant="light" onClick={SearchNews}>查詢</Button>
                        </Col>
                    </Row>
                </Form>

            </div>
            {/* 設定最小高度避免資料不足時footer往上跑 */}
            <div className='py-3'>
                {
                    currentNews.map(each => {
                        return (
                            <div key={each.id}>
                                <Row onClick={() => setSingleNewId(each.id)}>
                                    <Col xs={12} md={4} className='py-3 px-4'>
                                        <Image src={each.photo} fluid style={{ height: '250px', width: "100%", objectFit: 'cover' }} />
                                    </Col>
                                    <Col xs={12} md={8} className='py-3 px-4'>
                                        <div className='fs-3 pb-3'>
                                            {each.title}
                                        </div>
                                        <div>
                                            {each.content}
                                        </div>
                                    </Col>
                                </Row>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
            <div className='d-flex justify-content-center'>
                <Pagination>
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                </Pagination>
            </div>
        </div>
    )
}

export default AllNew