import React, { useState, useContext, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import { Badge, Carousel, Button, ButtonGroup, Card } from 'react-bootstrap'
import { Context } from '../../Contexts/Context'
import 'react-datepicker/dist/react-datepicker.css';
import defaultPhoto from '../../Image/logo.jpg'
import '../../index.css'

function AllActivity({ allActivity }) {
    const { singleActivityId, setSingleActivityId } = useContext(Context)
    const [selectedType, setSelectedType] = useState(null)
    const [showActivity, setShowActivity] = useState([])

    const type = ['世壯會', '路跑', '徵人']


    useEffect(() => {

        if (selectedType) {
            setShowActivity(allActivity.filter(each => each.type === selectedType))
        } else {
            setShowActivity(allActivity)
        }

    }, [selectedType])

    return (
        <div className='pb-5'>
            <div className=' d-flex justify-content-center pb-4'>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-secondary" onClick={() => setSelectedType(null)} active={selectedType === null}>全部</Button>
                    {type.length > 0 && type.map((each, index) => {
                        return (
                            <Button key={index} variant="outline-secondary" onClick={() => setSelectedType(each)} active={selectedType === each}>{each}</Button>
                        )
                    })}
                </ButtonGroup>

            </div>
            <div className='d-flex justify-content-start flex-wrap'>
                {
                    showActivity.length > 0 && showActivity.map(each => {
                        return (
                            <Card key={each._id} style={{ width: '24rem', cursor:"pointer" }} className='m-3 p-2' onClick={() => setSingleActivityId(each._id)} >
                                
                            {each.photo.length > 0 ? 
                                         <Carousel controls={false}> 
                                          {
                                            each.photo.map(path => {
                                                console.log(path)
                                                return (
                                                    <Carousel.Item key={path}>
                                                        {path && process.env.REACT_APP_STATIC === 'true' ?
                                                            <Card.Img className='p-2 pb-0' variant="top" src={path} fluid style={{ height: '300px', objectFit: 'cover' }} />
                                                            :
                                                            <Card.Img  src={process.env.REACT_APP_BACKEND_URL + path} fluid  className='p-2 pb-0' variant="top" style={{ height: '300px', objectFit: 'cover' }} />
                                                        }
                                                    </Carousel.Item>
                                                )
                                            })
                                          } 
                                        </Carousel>
                                        : 
                                        <Card.Img className='p-2 pb-0' variant="top" src={defaultPhoto} fluid style={{ height: '300px', objectFit: 'cover' }} />
                            
                                        }
                                <Card.Body>
                                    <Badge bg="warning" text="dark" className='mb-3'>
                                        {each.type}
                                    </Badge>
                                    <Card.Title> {each.title}</Card.Title>
                                    <Card.Text> 建立時間 : {each.createdAt}</Card.Text>
                                    <Card.Text> 地點 : {each.place}</Card.Text>

                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AllActivity