import React, { useContext,useState, useEffect } from 'react'
import { Dropdown, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Context } from '../../Contexts/Context';
import Login from './Login';
import Logo from '../../Image/navbarLogo.png'

function TopNavbar() {
    const { setLoginModal } = useContext(Context)
    const [brandHeight, setBrandHeight] = useState(60);

    useEffect(() => {
        // 監聽視窗寬度變化，根據視窗寬度修改 Brand 的高度
        const handleResize = () => {
          if (window.innerWidth <= 992) {
            setBrandHeight(35);
          } else {
            setBrandHeight(60);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        // 初始設定
        handleResize();
    
        // 清除事件監聽
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand className="p-0" href="/">
                        <img
                            alt="logo"
                            src={Logo}

                            height={brandHeight}
                            className="d-inline-block align-center"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="my-2 ms-auto fs-5 px-3">
                            <NavDropdown title="關於本會" className='px-3'>
                                <NavDropdown.Item href="/about">理事長簡介</NavDropdown.Item>
                                <NavDropdown.Item href="/about">本會簡介</NavDropdown.Item>
                                <NavDropdown.Item href="/about">組織章程</NavDropdown.Item>
                                <NavDropdown.Item href="/about">會議記錄</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/download" className='px-3'>檔案下載</Nav.Link>
                            <Nav.Link href="/news" className='px-3'>訊息公告</Nav.Link>
                            <Nav.Link href="/activity" className='px-3'>活動報名</Nav.Link>
                            <NavDropdown title="相關資源" className='px-3'>
                                <NavDropdown title="體育會" drop='end' className='ps-sm-2 ps-3'>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="運動中心" drop='end' className='ps-sm-2 ps-3'>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                    <Dropdown.Item href="#action7">子選單項目1</Dropdown.Item>
                                    <Dropdown.Item href="#action8">子選單項目2</Dropdown.Item>
                                </NavDropdown>
                                <NavDropdown.Item href="/source">協會</NavDropdown.Item>
                                <NavDropdown.Item href="/source">委員會</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link className='px-3' target="_blank" href="https://www.facebook.com/profile.php?id=100094196177790" >
                                活動剪影
                            </Nav.Link>
                            <Nav.Link className='px-3' onClick={() => setLoginModal(true)} >
                                會員登入
                            </Nav.Link>
                            <NavDropdown title=" Hi, Name" className='px-3'>
                                <NavDropdown.Item href="/profile">個人資料</NavDropdown.Item>
                                <NavDropdown.Item href="/manage">管理</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Login />
        </>
    )
}

export default TopNavbar