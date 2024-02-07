import React, { useContext, useEffect } from 'react'
import { Button, Row, Col, Image, Carousel } from 'react-bootstrap'
import { Context } from '../../Contexts/Context'
import Finder from '../../API/Finder'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function SingleNew({ allNews }) {
    const finder = Finder();
    const { singleNewId, setSingleNewId } = useContext(Context)


    useEffect(() => {
           // 靜態網頁測試版
           if(process.env.REACT_APP_STATIC === 'true'){
            console.log('do nothing')
        }else{
        setTimeout(() => {
            finder.post('/common/news/clicked', { _id: singleNewId })
                .then(data => {
                    console.log(data)
                }).catch(err => {
                    console.log(err)
                })
        }, [5000])
    }

    }, [singleNewId])


    return (
        <div>
            <Button variant="" style={{ textDecoration: 'none' }} onClick={() => setSingleNewId(0)}> {'<'} 返回</Button>
            <div>
                {singleNewId !== 0 &&
                    <div>
                        {allNews.map((each, index) => {
                            if (each._id === singleNewId) {
                                return (
                                    <>
                                        <div key={each._id} className='p-4 m-2 rounded-4' style={{ backgroundColor: "yellow" }}>
                                            <div className='fs-2 py-3'>{each.title}</div>
                                            {
                                                each.photo.length > 0 ? <Row>
                                                    <Col md={6} xs={12}>
                                                        <div className='d-flex justify-content-start'>
                                                            <p className='pe-3'>閱讀次數 : {each.clicked}</p>
                                                            <p>發布時間 : {each.createdAt}</p>
                                                        </div>

                                                        <p className='fs-5'>{each.description}</p>
                                                        {/* 其他欄位 檔案之類的 */}
                                                    </Col>
                                                    <Col md={6} xs={12} >
                                                        <PhotoProvider maskOpacity={0.5}>
                                                            <Carousel>
                                                                {each.photo.map(path => {
                                                                    return (
                                                                        <Carousel.Item key={path}>
                                                                            <PhotoView key={index} src={process.env.REACT_APP_BACKEND_URL + path}>
                                                                                <Image src={process.env.REACT_APP_BACKEND_URL + path} fluid style={{ height: '350px', width: "100%", objectFit: 'cover' }} />
                                                                            </PhotoView>
                                                                        </Carousel.Item>
                                                                    )
                                                                })}
                                                            </Carousel>
                                                        </PhotoProvider>
                                                    </Col>
                                                </Row>
                                                    :
                                                    <Row>
                                                        <Col>
                                                            <div className='d-flex justify-content-start'>
                                                                <p className='pe-3'>閱讀次數 : {each.clicked}</p>
                                                                <p>發布時間 : {each.createdAt}</p>
                                                            </div>

                                                            <p className='fs-5'>{each.description}</p>
                                                            {/* 其他欄位 檔案之類的 */}
                                                        </Col>

                                                    </Row>
                                            }
                                        </div>
                                        <div className='d-flex justify-content-between px-5 py-3'>
                                            {index !== 0 && <Button variant="" style={{ textDecoration: 'none' }} onClick={() => setSingleNewId(allNews[index - 1]._id)}>上一篇</Button>}
                                            {index !== allNews.length - 1 && <Button variant="" style={{ textDecoration: 'none' }} onClick={() => setSingleNewId(allNews[index + 1]._id)}>下一篇</Button>}
                                        </div>
                                    </>
                                );
                            }
                            return null; // 如果找不到符合的物件，回傳null
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default SingleNew