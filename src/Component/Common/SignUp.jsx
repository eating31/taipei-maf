import React, { useContext } from 'react'
import { Button, InputGroup, Form, Modal } from 'react-bootstrap';
import { Context } from '../../Contexts/Context';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as formik from 'formik';
import Finder from '../../API/Finder';

function SignUp() {
  const { signupModal, setSignupModal } = useContext(Context)

  const handleKeyPress = (e) => {
    // 判斷是否按下的是 "Enter"
    if (e.key === 'Enter') {
      signUpMember(e);
    }
  };

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

  function signUpMember(values, isValid) {
    console.log(values)
    console.log(isValid)
    if (isValid) {
      if (values.password === values.checkPassword) {
        Finder.post('/user/register', { email: values.email, username: values.username, phone: values.phone, address: values.address, gender: values.gender, password: values.password })
          .then(data => {
            console.log(data)
            alert('註冊成功')
            // to do clear data
            setSignupModal(false)
          }).catch(err => {
            console.log(err)
            alert(err.response.data)
          })
      } else {
        alert('兩次密碼不一致，確請再次確認')
      }
    } else {
      alert('欄位皆為必填')
    }

  }
  return (
    <Modal centered show={signupModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>會員註冊</Modal.Title>
      </Modal.Header>
      <Modal.Body>

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
          {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>姓名</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  required
                  isValid={touched.username && !errors.username}
                  onKeyDown={handleKeyPress}
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
                  isValid={!errors.email}
                  onKeyDown={handleKeyPress}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>電話</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  required
                  isValid={touched.phone && !errors.phone}
                  onKeyDown={handleKeyPress}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>地址</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  required
                  isValid={touched.address && !errors.address}
                  onKeyDown={handleKeyPress}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className='pe-3'>性別 : </Form.Label>
                <Form.Check
                  inline
                  label="男性"
                  name="gender"
                  type='radio'
                  value='male'
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="女性"
                  name="gender"
                  type='radio'
                  value='female'
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  name="gender"
                  label="其他"
                  type='radio'
                  value='other'
                  onChange={handleChange}
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
                  required
                  onKeyDown={handleKeyPress}
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
                  onKeyDown={handleKeyPress}
                  isValid={touched.checkPassword && !errors.checkPassword}
                />
              </Form.Group>
              <div className='d-flex justify-content-end'>
                <Button variant="secondary" className='mx-3' onClick={handleClose}>取消</Button>
                <Button type="submit" >確定註冊</Button>
              </div>

            </Form>
          )}
        </Formik>

      </Modal.Body>
    </Modal>
  )
}

export default SignUp