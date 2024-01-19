import React, { useState, useContext, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import { Badge, Row, Button, ButtonGroup, Card } from 'react-bootstrap'
import { Context } from '../../Contexts/Context'
import 'react-datepicker/dist/react-datepicker.css';


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
                            <Card key={each.id} style={{ width: '24rem' }} className='m-3 p-2'>
                                <Card.Img className='p-2 pb-0' variant="top" src={each.photo} fluid style={{ height: '300px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Badge bg="warning" text="dark" className='mb-3'>
                                        {each.type}
                                    </Badge>
                                    <Card.Title> {each.title}</Card.Title>
                                    <Card.Text> 建立時間 : {each.createdAt}</Card.Text>

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