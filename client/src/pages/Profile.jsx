import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Carousel,
    Image,
    ListGroup,
    Badge,
} from "react-bootstrap";
import "../singleView.css";
import { useRentalContext } from "../utils/GlobalContext";
// import bikesData from "../utils/SampleSeedData";


export default function ProfilePage() {
    const { user } = useRentalContext();


    const contracts = user.contracts;
    const [justifyActive, setJustifyActive] = useState("tab1");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };






    return (
        <Container>
            <div className="myOutlet">
                <Row className="justify-content-md-center">

                    <h2 className="profileTitle">{`Bike Rental history - ${user.username}`}</h2>

                    <Col md={6}>
                        {contracts.map((contract, index) => {
                            return (
                                <div>
                                    <Card>
                                        <Card.Header>{`Rental Details for Contract ID: (${contract._id})`}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{ }</Card.Title>
                                            <Card.Text>
                                                <Row className="justify-content-between">
                                                    <Col >
                                                        <ListGroup as="ol" variant="flush">
                                                        <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start"
                                                            >
                                                                <div className="ms-2 me-auto">
                                                                    <div className="fw-bold">Date</div>
                                                                </div>
                                                                {contract.createdAt}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start"
                                                            >
                                                                <div className="ms-2 me-auto">
                                                                    <div className="fw-bold">Bike Description</div>
                                                                </div>
                                                                {contract.bikeInfo}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start"
                                                            >
                                                                <div className="ms-2 me-auto">
                                                                    <div className="fw-bold">Rental Term (days)</div>
                                                                </div>
                                                                {contract.duration}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start"
                                                            >
                                                                <div className="ms-2 me-auto">
                                                                    <div className="fw-bold">Rental ($/day)</div>
                                                                </div>
                                                                {contract.rentalPerDay}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start"
                                                            >
                                                                <div className="ms-2 me-auto">
                                                                    <div className="fw-bold">Insurance ($/day)</div>
                                                                </div>
                                                                {contract.insurancePerDay}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start"
                                                            >
                                                                <div className="ms-2 me-auto">
                                                                    <div className="fw-bold">Subtotal ($)</div>
                                                                </div>
                                                                {contract.rentalPriceSub}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item
                                                                as="li"
                                                                className="d-flex justify-content-between align-items-start"
                                                            >
                                                                <div className="ms-2 me-auto">
                                                                    <div className="fw-bold">Total ($)</div>
                                                                </div>
                                                                {contract.rentalPriceTotal}
                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                    </Col>

                                                </Row>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            );
                        })}

                    </Col>
                </Row>
            </div>
        </Container>
    );
}



