import React from 'react'
import { Modal, Form, Button, Image } from 'react-bootstrap';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function DetailModal({ show, handle, detail }) {
  // Read only

  return (
    <Modal centered show={show} onHide={handle} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>公告內容</Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-5'>
        {detail &&
          <>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>標題</Form.Label>
                <Form.Control
                  type="text"
                  value={detail.title}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>內文</Form.Label>
                <Form.Control
                  value={detail.description}
                  type="text"
                  as="textarea" rows={8}
                  disabled
                />
              </Form.Group>
            </Form>
            <div>
              {detail.photo.length > 0 &&
              <>
              <p className='mb-2'>圖片</p>
                <PhotoProvider maskOpacity={0.5}>
                  <div  style={{ overflowX: 'auto', whiteSpace: 'nowrap'}} >
                  {detail.photo.map((item, index) => {
                    return (
                      <PhotoView key={index} src={process.env.REACT_APP_BACKEND_URL + item}>
                        <Image className='me-4' src={process.env.REACT_APP_BACKEND_URL + item} alt="item" fluid style={{ height: '150px', width: "150px", objectFit: 'cover' }} />
                      </PhotoView>
                    )
                  })}
                  </div>
                </PhotoProvider>
                </>
              }
            </div>
            <div className='pt-3'>
              <p>點擊 : {detail.clicked}</p>
              <p>權限 : {detail.read}</p>
              <p>建立者 : {detail.triggerBy.username}</p>
              <p>建立時間 : {detail.createdAt}</p>
              <p>更新時間 : {detail.updatedAt}</p>
            </div>
          </>
        }

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handle}>
          返回
        </Button>
        <Button variant="warning" onClick={handle}>
          編輯
        </Button>
      </Modal.Footer>
    </Modal>

  )
}

export default DetailModal