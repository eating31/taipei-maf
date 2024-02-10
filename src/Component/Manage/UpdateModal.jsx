import React, { useState, useEffect } from 'react'
import { Modal, Form, Button, Image } from 'react-bootstrap';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function UpdateModal({ show, handle, detail }) {

    const [newsData, setNewsData] = useState({});

    const allType = [{ name: '徵人', _id: '12' }, { name: '活動', _id: '34' }]

    useEffect(() => {
        console.log(detail)
        if (detail) {
            console.log(detail)
            const initialUserData = {
                title: detail.title,
                description: detail.description,
                read: detail.read,
                type: detail.type
            };

            setNewsData(initialUserData)
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewsData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };


    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        // 使用 Promise.all 來處理多個圖片的非同步讀取
        Promise.all(
            selectedFiles.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();

                    reader.onload = (e) => {
                        resolve({ file, previewURL: e.target.result });
                    };

                    reader.onerror = (error) => {
                        reject(error);
                    };

                    reader.readAsDataURL(file);
                });
            })
        )
            .then((results) => {
                // 在這裡處理 results，每個元素包含 { file, previewURL }
                setImages((prevImages) => [...prevImages, ...results]);
            })
            .catch((error) => {
                console.error('Error reading files:', error);
            });
    };
    const handleRemoveImage = (index) => {
        setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
    };
    return (
        <Modal centered show={show} onHide={handle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>編輯公告內容</Modal.Title>
            </Modal.Header>
            <Modal.Body className='px-5'>
                {detail &&
                    <>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>標題</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={newsData.title}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>內文</Form.Label>
                                <Form.Control
                                    value={newsData.description}
                                    type="text"
                                    name="description"
                                    as="textarea"
                                    rows={8}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                        <div className=''>
                            <Form.Group className="mb-3">
                                <Form.Label>公告標籤</Form.Label>
                                <Form.Select value={newsData.type} name="type" onChange={handleChange}>
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
                                <Form.Select name="read" value={newsData.read} onChange={handleChange}>
                                    <option value="all">所有人</option>
                                    <option value="member">會員</option>
                                    <option value="cocah">教練</option>
                                </Form.Select>
                            </Form.Group>
                            {/* <p>建立者 : {detail.triggerBy.username}</p>
              <p>建立時間 : {detail.createdAt}</p>
              <p>更新時間 : {detail.updatedAt}</p> */}
                        </div>
                        <div>
                            {detail.photo.length > 0 &&
                                <>
                                    <p className='mb-2'>圖片</p>
                                    <PhotoProvider maskOpacity={0.5}>
                                        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }} >
                                            {detail.photo.map((item, index) => {
                                                return (
                                                    <PhotoView key={index} src={item}>
                                                        <Image className='me-4' src={item} alt="item" fluid style={{ height: '150px', width: "150px", objectFit: 'cover' }} />
                                                    </PhotoView>
                                                )
                                            })}
                                        </div>
                                    </PhotoProvider>
                                </>
                            }
                        </div>

                        {/* TO DO 圖片編輯 */}
                        <div>
                            <input type="file" multiple onChange={handleFileChange} />
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {images.map((image, index) => (
                                    <div key={index} style={{ margin: '8px', position: 'relative' }}>
                                        <button
                                            onClick={() => handleRemoveImage(index)}
                                            style={{
                                                position: 'absolute',
                                                top: '4px',
                                                right: '4px',
                                                background: 'transparent',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: 'red',
                                                fontSize: '18px',
                                            }}
                                        >
                                            &times;
                                        </button>
                                        <img
                                            src={image.previewURL}
                                            alt={`Preview ${index}`}
                                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                }

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handle}>
                    取消
                </Button>
                <Button variant="warning" onClick={handle}>
                    存檔
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default UpdateModal