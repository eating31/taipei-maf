import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';

function DetailModal({ show, handle, detail }) {
  // Read only

  return (
    <Modal centered show={show} onHide={handle}>
      <Modal.Header closeButton>
        <Modal.Title>公告內容</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {detail &&

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
                as="textarea" rows={6}
                disabled
              />
            </Form.Group>
          </Form>
        }


      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handle}>
          返回
        </Button>
      </Modal.Footer>
    </Modal>

  )
}

export default DetailModal