import React, { useState } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

import {
    Container,
    Row,
    Col
} from "react-bootstrap";


export default function LoginPage() {

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (
        <Container>
            <div className='myOutlet'>
                <Row>
                    <Col sm>
                        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />


                            <MDBBtn className="mb-4">Login in</MDBBtn>
                        </MDBContainer>
                    </Col>

                    <Col sm>
                        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />


                            <MDBBtn className="mb-4">Register</MDBBtn>
                        </MDBContainer>
                    </Col>
                </Row>

            </div>
        </Container>
    );
}




