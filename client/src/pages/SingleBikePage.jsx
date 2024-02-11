import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
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

export default function SingleBikePage() {
    const { AllBikes } = useRentalContext();
    const { id } = useParams();

    const currentBikeData = AllBikes.filter((bike) => bike._id === id);

    const [justifyActive, setJustifyActive] = useState("tab1");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const [rentalTerm, setRentalTerm] = useState(1);

    const handleRentalTerm = (e) => {
        const { target } = e;
        setRentalTerm(target.valueAsNumber);
    };

    const singleBikeUrls = currentBikeData[0].images.map((image) => image.url);

    return (
        <Container>
            <div className="myOutlet">
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <Carousel fade data-bs-theme="dark">
                            {singleBikeUrls.map((imageUrl, index) => {
                                return (
                                    <Carousel.Item interval={3000}>
                                        <Image
                                            className="single-bike-image"
                                            src={imageUrl}
                                            text="First slide"
                                        />
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel>
                    </Col>

                    <Col md={10}>
                        <Card>
                            <Card.Header>Rental Details</Card.Header>
                            <Card.Body>
                                <Card.Title>{ }</Card.Title>
                                <Card.Text>
                                    <Row className="justify-content-between">
                                        <Col md={5}>
                                            <ListGroup as="ol" variant="flush">
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Make</div>
                                                    </div>
                                                    {currentBikeData[0].make}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Model</div>
                                                    </div>
                                                    {currentBikeData[0].model}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Year</div>
                                                    </div>
                                                    {currentBikeData[0].year}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Mileage</div>
                                                    </div>
                                                    {`${currentBikeData[0].mileage} km`}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Category</div>
                                                    </div>
                                                    {currentBikeData[0].category}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Availability</div>
                                                    </div>
                                                    {currentBikeData[0].availability ? "Yes" : "No"}
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col md={5}>
                                            <ListGroup as="ol" variant="flush">
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Rental ($/day)</div>
                                                    </div>
                                                    {currentBikeData[0].bikePricePerDay}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Insurance ($/day)</div>
                                                    </div>
                                                    {`login required`}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subtotal</div>
                                                    </div>
                                                    {`login required`}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">HST (13%)</div>
                                                    </div>
                                                    {`login required`}
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Rental Term (days)</div>
                                                    </div>
                                                    <div className="fw-bold">{rentalTerm}</div>
                                                </ListGroup.Item>
                                                <ListGroup.Item
                                                    as="li"
                                                    className="d-flex justify-content-between align-items-start"
                                                >
                                                    <input
                                                        type="range"
                                                        className="form-range"
                                                        min="1"
                                                        max="7"
                                                        defaultValue={1}
                                                        onChange={handleRentalTerm}
                                                    ></input>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center ms-2 me-auto">
                                        <div className="fw-bold">{`Total Rental Price: login required`}</div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Button id="rentButton" variant="danger" as={Link} to="/contract">
                                Click here to Rent Bike
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
