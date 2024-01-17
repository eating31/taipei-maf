import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../Contexts/Context';
import SignUp from './SignUp';

function Login() {
    const {loginModal, setLoginModal, signupModal, setSignupModal} = useContext(Context)
    function handleClose(){
        setLoginModal(false)
    }
  return (
    <>
    <Modal centered show={loginModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>會員登入</Modal.Title>
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
            >
              <Form.Label>密碼</Form.Label>
              <Form.Control
                type="password"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div>
          還沒有帳號嗎?
          <button onClick={() => setSignupModal(true)} className='btn btn-link px-2' style={{ textDecoration: 'none' }}>
  註冊
</button>
          </div>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            取消
          </Button>
          <Button variant="primary" onClick={handleClose}>
            登入
          </Button>
        </Modal.Footer>
      </Modal>
      
      <SignUp />
      </>
  )
}

export default Login