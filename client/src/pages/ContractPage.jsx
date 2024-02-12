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



export default function ContractPage() {
    const { user, shoppingCart } = useRentalContext();
    console.log('contractpage', shoppingCart);




    return (
        <Container >
            <div className="myOutlet">
                <div className="purchaseCard">
                    <Container fluid>
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
                                            to="/contract"
                                        // onClick={handleRentContract}
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
                                        // onClick={handleRentContract}
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