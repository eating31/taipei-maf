import React, { useState } from 'react'
import { Container, Modal, Form, Image, Table, Button } from 'react-bootstrap';
import Finder from '../../API/Finder'
function CreateModal({ show, handle }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleCreated() {
        const token = localStorage.getItem('token')
        Finder.post('/news',
            { title, description },
            {
                headers: {
                    Authorization: token,
                }
            }
        )
            .then(data => {
                console.log(data)
                setDescription('')
                setTitle('')
                // TO do notistack
                alert('success')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Modal centered show={show} onHide={handle}>
                <Modal.Header closeButton>
                    <Modal.Title>公告建立</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>標題</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                placeholder="請輸入標題"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>內文</Form.Label>
                            <Form.Control
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                type="text"
                                as="textarea" rows={6}
                                placeholder="請輸入內文"
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handle}>
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleCreated}>
                        建立
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateModal