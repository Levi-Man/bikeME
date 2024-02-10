import { useState } from "react";
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


export default function SingleBikePage() {

    return (
        <Container fluid>
            <h2>Single Bike Page</h2>
            <Row>
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>
        </Container>
    );
}