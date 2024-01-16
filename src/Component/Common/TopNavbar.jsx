import React from 'react'
import { Dropdown, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function TopNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className=' d-flex justify-content-end'>
                    <Nav className="me-auto my-2 my-lg-0">
                        <NavDropdown title="關於本會" >
                            <NavDropdown.Item href="#action3">理事長簡介</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">本會簡介</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">組織章程</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">會議記錄</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/news">訊息公告</Nav.Link>
                        <Nav.Link href="/activity">活動報名</Nav.Link>
                        <NavDropdown title="相關資源" >
                            <NavDropdown title="體育會" drop='end'>
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
                            <NavDropdown title="運動中心" drop='end'>
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
                            <NavDropdown.Item href="#action5">協會</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">委員會</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link target="_blank" href="https://www.facebook.com/profile.php?id=100094196177790" >
                            活動剪影
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavbar