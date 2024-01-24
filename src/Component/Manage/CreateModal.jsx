import React, { useState, useEffect,useContext } from 'react'
import { Alert, Modal, Form, Spinner, Image, Button } from 'react-bootstrap';
import Finder from '../../API/Finder'
import { enqueueSnackbar } from 'notistack';
import { Context } from '../../Contexts/Context';

function CreateModal({ show, handle }) {
    const [read, setRead] = useState('all')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState({})
    const [isCreate, setIsCreate] = useState(false)
    const {manageAllNews, setManageAllNews} =useContext(Context)
    const [photo, setPhoto] =useState()

    function handleCreated() {
        const token = localStorage.getItem('token')
        setIsCreate(true)
        const formData = new FormData();
formData.append('title', title);
formData.append('read', read);
formData.append('description', description);
// photo.map(each => {
//     formData.append('photos', each);  
// })
formData.append('photos', photo[0]);  





        Finder.post('/news',
        formData,
            {
                headers: {
                    Authorization: token,
                }
            }
        )
            .then(data => {
                enqueueSnackbar('公告建立成功!', { variant: 'success' })
                setDescription('')
                setTitle('')
                setMessage({ message: data.data.message, variant: 'success' })
                setIsCreate(false)
                handle()
                console.log(data)
                setManageAllNews(prev => [data.data.savedNews, ...prev]);
                
            })
            .catch(err => {
                setMessage({ message: err.response.data, variant: 'danger' })
                setIsCreate(false)
                enqueueSnackbar(`公告建立失敗! ${err.response.data}`, { variant: 'error' })
                console.log(err)
            })
    }

    useEffect(() => {
        if (show) {
            setMessage({})
        }
    }, [show])

    useEffect(()=>{
console.log(photo)
//console.log(photo.length)
    },[photo])
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
                        <Form.Group className="mb-3">
                            <Form.Label>權限</Form.Label>
                            <Form.Select value={read} onChange={(e) => setRead(e.target.value)}>
                                <option value="all">所有人</option>
                                <option value="member">會員</option>
                                <option value="cocah">教練</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>圖片</Form.Label>
                            <Form.Control type="file" multiple onChange={e => setPhoto(e.target.files)} />
                        </Form.Group>
                    </Form>
                    {Object.keys(message).length !== 0 && <Alert variant={message.variant} >
                        {message.message}
                    </Alert>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handle}>
                        取消
                    </Button>
                    {
                        isCreate ?
                            <Button variant="primary" disabled>
                                <Spinner animation="border" size="sm" /> 新增中
                            </Button> :
                            <Button variant="primary" onClick={handleCreated}>
                                建立
                            </Button>
                    }

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateModal