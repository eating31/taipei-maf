import React from 'react'
import { Dropdown, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import test from '../../Image/test0.png';
function Related() {

    const reference = [test, test, test, test, test]

    return (

        <div>
            <Container>
                <div className='fs-3 p-4'> 相關連結</div>
                <div className='d-flex justify-content-center  flex-wrap'>
                    {reference.map((each,index) => {
                        return (
                            <img
                                key={index}
                                src={each}
                                alt="Logo"
                                className="img-fluid"
                                style={{ width: 'auto', height: '150px' }}
                            />
                        )
                    })}


                </div>

            </Container>
        </div>
    )
}

export default Related