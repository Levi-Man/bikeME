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




export default function ContractPage() {
    const { user, shoppingCart } = useRentalContext();
    console.log('contractpage', shoppingCart);




    return (
        <Container fluid>
            {!shoppingCart ? (
                <div>... Loading</div>
            ) : (
                <div>
                    <h2>Contract Page</h2>
                    <Row>
                        <Col sm={8}>{shoppingCart.userName}</Col>
                        <Col sm={8}>{shoppingCart.bikeInfo}</Col>
                        <Col sm={8}>{shoppingCart.rentalPerDay}</Col>
                        <Col sm={8}>{shoppingCart.insurancePerDay}</Col>
                        <Col sm={8}>{shoppingCart.duration}</Col>
                        <Col sm={8}>{shoppingCart.rentalPriceSub}</Col>
                        <Col sm={8}>{shoppingCart.rentalPriceTotal}</Col>

                    </Row>
                    <Button
                        id="rentButton"
                        variant="danger"
                        as={Link}
                        to="/contract"
                    // onClick={handleRentContract}
                    >
                        Cancel
                    </Button>
                    <Button
                        id="rentButton"
                        variant="primary"
                        as={Link}
                        to="/contract"
                    // onClick={handleRentContract}
                    >
                        Checkout to Rent
                    </Button>
                </div>

            )}
        </Container>
    );
}