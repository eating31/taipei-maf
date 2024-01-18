import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';

function News() {
    const activity = [{ "createdAt": "2024-01-12", "title": "askhjdsadsa" }, { "createdAt": "2024-01-13", "title": "asdsa987asdas563214" }]
    const news = [{ "createdAt": "2024-01-12", "title": "1234563214" }, { "createdAt": "2024-01-13", "title": "987563214" }]
    return (
        <div>
            <Container>
                <div className='fs-3 p-4'> 最新消息</div>
                <Row className='px-5'>
                    <Col xs={12} md={6}>
                        <div>
                            <p>活動資訊</p>
                            {activity.map(each => {
                                return (<>
                                    <div key={each.title}>
                                        {each.createdAt}  -   {each.title}
                                    </div>
                                </>)
                            })}
                        </div>
                    </Col>
                    <Col  xs={12} md={6}>
                    <div>
                            <p className='pt-5'>訊息公告</p>
                            {news.map(each => {
                                return (<>
                                    <div key={each.title}>
                                        {each.createdAt}  -   {each.title}
                                    </div>
                                </>)
                            })}
                        </div></Col>
                </Row>
            </Container>
        </div>
    )
}

export default News