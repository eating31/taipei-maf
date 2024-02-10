import React,{useEffect, useState} from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function Profile() {
  const [isEdit, setIsEdit] = useState(false)

  const [name, setName] =useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const initialUserData = {
    username: 'emma',
    email: 'user@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleSaveClick = () => {
    // 在實際應用中，這裡應該有邏輯來儲存修改後的資訊，例如發送 API 請求。
    // 這裡只是簡單示範，將修改後的資料設置回狀態。
    setIsEdit(false);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div style={{ "minHeight": "75vh" }}>
      <Container >
        <div className='d-flex mt-3'>
          <div className='fs-3'>個人資料管理</div>
        </div>
        <hr />
        <Row className='py-4'>
          <Col xs={12} md={6}>
          <p className='fs-4'>基本資料</p>
          {isEdit 
          ?
          <div className='px-3'>
          
          <label>名稱：</label>
          <input type="text" name="email" value={userData.username} onChange={handleChange} />
          <br />
          <br />
          <label>信箱：</label>
          <input type="text" name="email" value={userData.email} onChange={handleChange} />
          <br />
          <br />
          <label>電話：</label>
          <input type="text" name="phone" value={userData.phone} onChange={handleChange} />
          <br />
          <br />
          <label>地址：</label>
          <input type="text" name="address" value={userData.address} onChange={handleChange} />
          <br />
          <br />
          <div className='d-flex mb-5'>
          <Button variant='secondary' className="mx-5" onClick={()=> setIsEdit(true)}>取消</Button>
          <Button variant='warning' onClick={handleSaveClick}>儲存</Button>
          </div>

          </div>
          :
          <div className='px-3'>
        
            <p>名稱：{userData.username}</p>
            <p>信箱：{userData.email}</p>
            <p>電話：{userData.phone}</p>
            <p>地址：{userData.address}</p>
            <p>等級：一般會員</p>
            <p>加入時間： 2024-01-22</p>
            <Button className="mb-5 mx-5" onClick={()=> setIsEdit(true)}>修改基本資料</Button>
            </div>
          }
           
          </Col>
          <Col xs={12} md={6}>
            <p className='fs-4'>活動報名紀錄</p>
            <div style={{ height: '400px', overflowY: 'auto' }} className="border p-3">
              <Card className='my-3'>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to buil
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card >
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card >
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card >
                <Card.Body>
                  <Card.Title>Card Title Name</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Time</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Place</Card.Subtitle>
                  <Card.Text>
                    報名時間（？
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>



      </Container>
    </div>
  )
}

export default Profile