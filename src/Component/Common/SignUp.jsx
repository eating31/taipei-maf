import React, { useContext } from 'react'
import { Button, InputGroup, Form, Modal } from 'react-bootstrap';
import { Context } from '../../Contexts/Context';
import * as formik from 'formik';
import * as yup from 'yup';


function SignUp() {
  const { signupModal, setSignupModal } = useContext(Context)

  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
    username: yup.string().required(),
    checkPassword: yup.string().required(),
    address: yup.string().required(),
    gender: yup.string().required(),
    phone: yup.string().required(),
  });

  function handleClose() {
    setSignupModal(false)
  }

  function signUpMember() {
    //console.log(a)
    console.log(schema)
  }
  return (
    <Modal centered show={signupModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>會員註冊</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form>
      <InputGroup hasValidation>
        <Form.Group className="mb-3">
          <Form.Label>帳號</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required  isInvalid 
          />
        </Form.Group>
        </InputGroup>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>密碼</Form.Label>
          <Form.Control
            type="password"
            required 
          />
        </Form.Group>
        
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>確認密碼</Form.Label>
          <Form.Control
            type="password"
            required 
          />
        </Form.Group>
      </Form> */}

        <Formik
          validationSchema={schema}
          onSubmit={signUpMember}
          initialValues={{
            email: '',
            username: '',
            password: '',
            checkPassword: '',
            phone: '',
            address: '',
            gender: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>姓名</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isValid={touched.username && !errors.username}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>帳號</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>確認密碼</Form.Label>
                <Form.Control
                  type="password"
                  name="checkPassword"
                  value={values.checkPassword}
                  onChange={handleChange}
                  isValid={touched.checkPassword && !errors.checkPassword}
                />
              </Form.Group>

              <Button type="submit" onClick={signUpMember}>Submit form</Button>
            </Form>
          )}
        </Formik>

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