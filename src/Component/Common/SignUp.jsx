import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../Contexts/Context';
function SignUp() {
    const { signupModal, setSignupModal} = useContext(Context)
    function handleClose(){
        setSignupModal(false)
    }
  return (
    <Modal centered show={signupModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>會員註冊</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>帳號</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            autoFocus
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>密碼</Form.Label>
          <Form.Control
            type="password"
            autoFocus
          />
        </Form.Group>
        
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>確認密碼</Form.Label>
          <Form.Control
            type="password"
            autoFocus
          />
        </Form.Group>
      </Form>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        取消
      </Button>
      <Button variant="primary" onClick={handleClose}>
        註冊
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default SignUp