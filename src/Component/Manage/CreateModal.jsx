import React, { useState, useEffect, useContext } from 'react'
import { Alert, Modal, Form, Spinner, Image, Button } from 'react-bootstrap';
import Finder from '../../API/Finder'
import { enqueueSnackbar } from 'notistack';
import { Context } from '../../Contexts/Context';

import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


function CreateModal({ show, handle }) {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const [test, setTest] = useState()
    const handleSubmit = () => {
        // 將編輯器內容轉換為原始的 JSON 格式，你可以儲存在資料庫中
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);

        // 在這裡可以將 rawContentState 傳送到後端或進行其他處理
        console.log('Raw Content State:', rawContentState);
        console.log(JSON.stringify(rawContentState, null, 2));
        //setTest(JSON.stringify(rawContentState, null, 2))
        const aa = JSON.stringify(rawContentState, null, 2)
        ChangeText(aa)
    };


    function ChangeText(text) {
        if (text) {
            console.log(text)
            const a = JSON.parse(text)
            console.log(a)
            const contentState = convertFromRaw(a);
            console.log(contentState)
            setTest(EditorState.createWithContent(contentState))

        }


    }
    useEffect(() => {
        console.log(test)
    }, [test])

    const finder = Finder();
    const token = localStorage.getItem('token')


    const [read, setRead] = useState('all')
    const [title, setTitle] = useState('')
    const [type, setType] = useState('0')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState({})

    const [allType, setAllType] = useState([])

    const [isCreate, setIsCreate] = useState(false)
    const { manageAllNews, setManageAllNews } = useContext(Context)
    const [photo, setPhoto] = useState([])

    function handleCreated() {
        if (type === '0') {
            setMessage({ message: '請選擇公告標籤', variant: 'danger' })
        } else {
            setIsCreate(true)
            const formData = new FormData();
            formData.append('title', title);
            formData.append('read', read);
            formData.append('newsType', type);
            formData.append('description', description);
            if (photo.length > 0) {
                for (let i = 0; i < photo.length; i++) {
                    formData.append('photos', photo[i]);
                }

            }

            finder.post('/news',
                formData,
                {
                    headers: {
                        Authorization: token,
                    }
                }
            )
                .then(data => {
                    if (!data) {
                        // 通常是403
                        handle()
                        setDescription('')
                        setTitle('')
                        console.error("An unknown error occurred");
                        enqueueSnackbar('公告建立失敗! 只有管理員可以新增公告', { variant: 'error' })
                        return;
                    }
                    enqueueSnackbar('公告建立成功!', { variant: 'success' })
                    setDescription('')
                    setTitle('')
                    setMessage({ message: data.data.message, variant: 'success' })
                    handle()
                    setManageAllNews(prev => [data.data.savedNews, ...prev]);
                })
                .catch(err => {
                    // if(err.message === "Request failed with status code 400" ){
                    setMessage({ message: err.response.data, variant: 'danger' })
                    enqueueSnackbar(`公告建立失敗! ${err.response.data}`, { variant: 'error' })
                    //}

                }).finally(() => setIsCreate(false))
        }


    }

    useEffect(() => {
        if (show) {
            setMessage({})
            finder.get('/news/type', {
                headers: {
                    Authorization: token,
                }
            }).then(data => {
                setAllType(data.data)
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [show])

    useEffect(() => {
        console.log(photo)
        //console.log(photo.length)
    }, [photo])
    return (
        <>
            <Modal centered show={show} onHide={handle}>
                <Modal.Header closeButton>
                    <Modal.Title>公告建立</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                   
                   {/* 顯示與紀錄 */}
                    <button onClick={handleSubmit}>提交</button>
                    <Editor toolbarHidden editorState={test} readOnly={true} />

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>標題</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                placeholder="請輸入標題"
                            />
                            <Form.Text muted>
                                標題最少6個字
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>內文</Form.Label>
                            <div className='border p-2'>
                            <Editor
                        // editorState={editorState}
                        // onEditorStateChange={setEditorState}
                        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        editorState={editorState}
        onEditorStateChange={setEditorState}
        // toolbar={{
        //   inline: { inDropdown: true },
        //   list: { inDropdown: true },
        //   textAlign: { inDropdown: true },
        //   link: { inDropdown: true },
        //   history: { inDropdown: true },
        // }}
                    />
                            </div>
                            {/* <Form.Control
                                onChange={(e) => setDescription(e.target.value)}
                                value={test}
                                type="text"
                                as="textarea" rows={6}
                                placeholder="請輸入內文"
                            /> */}
                            
                            <Form.Text muted>
                                內文最少6個字
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>公告標籤</Form.Label>
                            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="0" disabled>請選擇公告標籤</option>
                                {allType.length > 0 && allType.map(each => {
                                    return (
                                        <option value={each._id} key={each._id}>{each.name}</option>
                                    )
                                })
                                }
                            </Form.Select>
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