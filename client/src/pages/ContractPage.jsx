import react, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Image,
    Card,
    Button,
    Badge,
} from "react-bootstrap";
import { useRentalContext } from "../utils/GlobalContext";

import logo from '../assets/site-footer2-logo.png'
import '../contract.css';
import { CREATE_CONTRACT, ADD_CONTRACT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";




export default function ContractPage() {
    const { user, addUser, shoppingCart } = useRentalContext();
    const [createContract, { createContractError }] = useMutation(CREATE_CONTRACT);
    const [addContract, { addContractError }] = useMutation(ADD_CONTRACT);


    const handleRentContract = async () => {

        try {
            const contractData = await createContract({
                variables: {
                    ...shoppingCart
                },
            });
          
            const newContract = contractData.data.createContract;

            const updatedUser = await addContract({
                variables: {
                    userId: Auth.getProfile().data._id,
                    contractId: newContract._id
                }
            });
        
            addUser(updatedUser.data.addContractToUser);
            
            window.alert("Your new contract has been added to your profile.")
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <Container >
            <div className="myOutlet">
                <div className="purchaseCard">
                    <Container fluid className="purchaseContainer">
                        {!shoppingCart ? (
                            <div>... Loading</div>
                        ) : (
                            <div>
                                <h2>Contract</h2>
                                <br />
                                <Row>
                                    <Col sm={6}>Username</Col>
                                    <Col xs={6}><strong>{shoppingCart.userName}</strong></Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col sm={6}>Bike Description</Col>
                                    <Col xs={6}><strong>{shoppingCart.bikeInfo}</strong></Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col sm={6}>Rental (per day)</Col>
                                    <Col xs={6}><strong>{"$" + shoppingCart.rentalPerDay}</strong></Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col sm={6}>Insurance (per day)</Col>
                                    <Col xs={6}><strong>{"$" + shoppingCart.insurancePerDay}</strong></Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col sm={6}>Term (days)</Col>
                                    <Col xs={6}><strong>{shoppingCart.duration}</strong></Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col sm={6}>Sub total</Col>
                                    <Col xs={6}><strong>{"$" + shoppingCart.rentalPriceSub}</strong></Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col sm={6}>Tax(HST)</Col>
                                    <Col xs={6}><strong>{"$" + ((shoppingCart.rentalPriceSub * 0.13).toFixed(2))}</strong></Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col sm={6}><h3>Total: </h3></Col>
                                    <Col xs={6}><h3>{"$" + shoppingCart.rentalPriceTotal}</h3></Col>
                                </Row>
                                <br />
                                <Row className="buttonGroup">
                                    <Col >
                                        <Button
                                            id="checkoutBtn"
                                            variant="success"
                                            size="lg"
                                            as={Link}
                                            to="/"
                                            onClick={handleRentContract}
                                        >
                                            Checkout to Rent
                                            <Image className='checkoutLogo' src={logo} width="70" height="50" />
                                        </Button>
                                    </Col>
                                    <br />
                                    <Col >
                                        <Button
                                            id="cancelBtn"
                                            variant="secondary"
                                            as={Link}
                                            to="/contract"
                                        >
                                            Cancel
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </Container>
                </div>
            </div>
        </Container>
    );
}