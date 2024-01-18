import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../Contexts/Context';
import SignUp from './SignUp';

function Login() {
    const { loginModal, setLoginModal, setSignupModal } = useContext(Context)
    function handleClose() {
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
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>密碼</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="請輸入密碼"
                            />
                        </Form.Group>
                    </Form>
                    <div>
                        還沒有帳號嗎?
                        <button onClick={() => setSignupModal(true)} className='btn btn-link px-2' style={{ textDecoration: 'none' }}>
                            註冊
                        </button>
                    </div>

                    {/* TO DO fix Google登入 */}
                    <div>
                        <a className="btn btn-lg btn-google px-2"
                            style={{
                                "padding": "0.2rem 0.5rem",
                                "backgroundColor": "rgb(7, 7, 7)",
                                "color": "rgb(255, 255, 255)"
                            }}
                            href="/auth/google"
                        ><img alt='google login'
                            src="https://img.icons8.com/color/16/000000/google-logo.png"
                            />
                            {'  '}Google登入</a>
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