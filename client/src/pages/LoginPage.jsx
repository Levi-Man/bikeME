import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
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
    Col,
    Form,
    Button,
    Alert
} from "react-bootstrap";





export default function LoginPage() {
    const [loginUser, { loginError }] = useMutation(LOGIN_USER);
    const [addUser, { registrationError }] = useMutation(ADD_USER);
    const [userName, setUserName] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [age, setAge] = useState('');
    const [yearsDriving, setYearsDriving] = useState('');
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!loginEmail || !loginPassword) {
            return;
        }

        try {
            const { data } = await loginUser({
                variables: { email: loginEmail, password: loginPassword },
            });
            const { token } = data.login;
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
    };


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addUser({
                variables: {
                    username: userName,
                    email: registerEmail,
                    password: registerPassword,
                    age: parseInt(age),
                    yearsDriving: parseInt(yearsDriving)
                },
            });
            const { token } = data.addUser;
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
    };


    return (
        <Container>
            <div className='myOutlet'>
                <Row>
                    <Col sm>
                        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Email address'
                                id='loginEmail'
                                type='email'
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Password'
                                id='loginPassword'
                                type='password'
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                            <MDBBtn className="mb-4"
                                onClick={handleLogin}>
                                Login in
                            </MDBBtn>
                        </MDBContainer>
                    </Col>

                    <Col sm>
                        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                            <MDBInput
                                wrapperClass='mb-2'
                                label='Username'
                                id='userName'
                                type='text'
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <MDBInput
                                wrapperClass='mb-2'
                                label='Email address'
                                id='registerEmail'
                                type='email'
                                onChange={(e) => setRegisterEmail(e.target.value)}
                            />
                            <MDBInput
                                wrapperClass='mb-2'
                                label='Password'
                                id='registerPassword'
                                type='password'
                                onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                            <MDBInput
                                wrapperClass='mb-2'
                                label='Age'
                                id='age'
                                type='number'
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <MDBInput
                                wrapperClass='mb-2'
                                label='Years Driving'
                                id='yearsDriving'
                                type='number'
                                onChange={(e) => setYearsDriving(e.target.value)}
                            />
                            <MDBBtn className="mb-4" onClick={handleRegister}>Register</MDBBtn>
                        </MDBContainer>
                    </Col>
                </Row>

            </div>
        </Container>
    );
}




