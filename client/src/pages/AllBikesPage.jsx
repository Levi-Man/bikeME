// import all image resources for card displays
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Image,
    Card,
    Button,
    Badge,
    Accordion,
} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles.css";
import bikesData from "../utils/SampleSeedData";
// import { useQuery } from "@apollo/client";
// import { QUERY_BIKES, QUERY_SINGLE_BIKE } from "../utils/queries";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1400 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1400, min: 850 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 850, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

let bikeCategory;

export const bikeCategoryHandler = (categoryFromNav) => {
    bikeCategory = categoryFromNav;
}

// default export function for portfolio component
export default function AllBikesPage() {

    //65c8526a8a84605c540b7266
    // const {loading,data} = useQuery(QUERY_BIKES);
    // const {loading,data} = useQuery(QUERY_SINGLE_BIKE,{variables:{_id:"65c8526a8a84605c540b7266"}});

    console.log(data);


    const [open, setOpen] = useState(false);

    const sportBikesData = bikesData.filter((bike) => bike.category === 'Sport');
    const touringBikesData = bikesData.filter((bike) => bike.category === 'Touring');
    const adventureBikesData = bikesData.filter((bike) => bike.category === 'Adventure');
    const cruiserBikesData = bikesData.filter((bike) => bike.category === 'Cruiser');
    const retroBikesData = bikesData.filter((bike) => bike.category === 'Retro');

    return (
        <Container fluid>
            <div className="container myOutlet">
                <section className="features-icons bg-light d-flex">
                    <div className="container AboutMeBox">
                        <div className="row">
                            <div className="col">
                                <h2>Inventory Showcase</h2>
                                <br></br>
                                <row>
                                    <p>
                                        <br></br>
                                        Scroll through our inventory and if you see a bike your
                                        like, click the view button to get more details on the bike
                                        and rental pricing.
                                    </p>
                                </row>
                            </div>
                        </div>
                    </div>
                </section>

                <Accordion defaultActiveKey={["0", "1", "2", "3", "4"]} flush>
                    <Accordion.Item id="sportBikes" eventKey="0">
                        <Accordion.Header>
                            <h2>Sport</h2>
                        </Accordion.Header >
                        <Accordion.Body >
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                infinite={false}
                                partialVisible={false}
                                ssr={false}
                                dotListClass="custom-dot-list-style"
                            >
                                {sportBikesData.map((bike, index) => {
                                    return (
                                        <div id="sportBikes" className="slider">
                                            <Card
                                                key={index}
                                                style={{ width: "20rem" }}
                                                bg="dark"
                                                text={"dark" === "light" ? "dark" : "white"}
                                            >
                                                <Card.Img
                                                    id="cardImage"
                                                    variant="top"
                                                    src={bike.images[0].url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>{`${bike.make} ${bike.model} (${bike.year})`}</Card.Title>
                                                    <Card.Text>
                                                        {bike.description}
                                                    </Card.Text>
                                                    <Button
                                                        variant="outline-light"
                                                        as={Link}
                                                        to="/bike/:id"
                                                    >
                                                        view
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item id="touringBikes" eventKey="1">
                        <Accordion.Header>
                            <h2>Touring</h2>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                infinite={false}
                                partialVisible={false}
                                ssr={false}
                                dotListClass="custom-dot-list-style"
                            >
                                {touringBikesData.map((bike, index) => {
                                    return (
                                        <div className="slider">
                                            <Card
                                                key={index}
                                                style={{ width: "20rem" }}
                                                bg="dark"
                                                text={"dark" === "light" ? "dark" : "white"}
                                            >
                                                <Card.Img
                                                    id="cardImage"
                                                    variant="top"
                                                    src={bike.images[0].url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>{`${bike.make} ${bike.model} (${bike.year})`}</Card.Title>
                                                    <Card.Text>
                                                        {bike.description}
                                                    </Card.Text>
                                                    <Button
                                                        variant="outline-light"
                                                        as={Link}
                                                        to="/bike/:id"
                                                    >
                                                        view
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item id="adventureBikes" eventKey="2">
                        <Accordion.Header>
                            <h2>Adventure</h2>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                infinite={false}
                                partialVisible={false}
                                ssr={false}
                                dotListClass="custom-dot-list-style"
                            >
                                {adventureBikesData.map((bike, index) => {
                                    return (
                                        <div className="slider">
                                            <Card
                                                key={index}
                                                style={{ width: "20rem" }}
                                                bg="dark"
                                                text={"dark" === "light" ? "dark" : "white"}
                                            >
                                                <Card.Img
                                                    id="cardImage"
                                                    variant="top"
                                                    src={bike.images[0].url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>{`${bike.make} ${bike.model} (${bike.year})`}</Card.Title>
                                                    <Card.Text>
                                                        {bike.description}
                                                    </Card.Text>
                                                    <Button
                                                        variant="outline-light"
                                                        as={Link}
                                                        to="/bike/:id"
                                                    >
                                                        view
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item id="cruiserBikes" eventKey="3">
                        <Accordion.Header>
                            <h2>Cruiser</h2>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                infinite={false}
                                partialVisible={false}
                                ssr={false}
                                dotListClass="custom-dot-list-style"
                            >
                                {cruiserBikesData.map((bike, index) => {
                                    return (
                                        <div className="slider">
                                            <Card
                                                key={index}
                                                style={{ width: "20rem" }}
                                                bg="dark"
                                                text={"dark" === "light" ? "dark" : "white"}
                                            >
                                                <Card.Img
                                                    id="cardImage"
                                                    variant="top"
                                                    src={bike.images[0].url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>{`${bike.make} ${bike.model} (${bike.year})`}</Card.Title>
                                                    <Card.Text>
                                                        {bike.description}
                                                    </Card.Text>
                                                    <Button
                                                        variant="outline-light"
                                                        as={Link}
                                                        to="/bike/:id"
                                                    >
                                                        view
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item id="retroBikes" eventKey="4">
                        <Accordion.Header>
                            <h2>Retro</h2>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                infinite={false}
                                partialVisible={false}
                                ssr={false}
                                dotListClass="custom-dot-list-style"
                            >
                                {retroBikesData.map((bike, index) => {
                                    return (
                                        <div className="slider">
                                            <Card
                                                key={index}
                                                style={{ width: "20rem" }}
                                                bg="dark"
                                                text={"dark" === "light" ? "dark" : "white"}
                                            >
                                                <Card.Img
                                                    id="cardImage"
                                                    variant="top"
                                                    src={bike.images[0].url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>{`${bike.make} ${bike.model} (${bike.year})`}</Card.Title>
                                                    <Card.Text>
                                                        {bike.description}
                                                    </Card.Text>
                                                    <Button
                                                        variant="outline-light"
                                                        as={Link}
                                                        to="/bike/:id"
                                                    >
                                                        view
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    );
}