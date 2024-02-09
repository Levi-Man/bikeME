// import all image resources for card displays
import { useState } from "react";
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


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const sliderImageUrl = [
    //First image url
    {
        url: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        url: "https://images.unsplash.com/photo-1615195095757-5670eacfc3c8?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    //Second image url
    {
        url: "https://images.unsplash.com/photo-1612426131812-7f046e5c9323?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdG9yY3ljbGVzfGVufDB8fDB8fHww",
    },
    //Third image url
    {
        url: "https://images.unsplash.com/photo-1558981033-0f0309284409?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    //Fourth image url

    {
        url: "https://images.unsplash.com/photo-1614826380482-584247564bde?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export const handleCategoryLink = (categoryLink) => {
    console.log(categoryLink);
    // const element = document.getElementById(categoryLink);
    // element.click();
    // document.getElementById('touringBikes').click();

    // let element = document.getElementById(target.id);
    // element.classList.add('active');
};

// default export function for portfolio component
export default function AllBikesPage() {
    const [open, setOpen] = useState(false);

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
                                        Scroll through our inventory and if you see a bike your like, click the view button to get more details on the bike and rental pricing.
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
                        </Accordion.Header>
                        <Accordion.Body>
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={false}
                                draggable={true}
                                showDots={true}
                                infinite={true}
                                partialVisible={true}
                                dotListClass="custom-dot-list-style"
                            >
                                {sliderImageUrl.map((imageUrl, index) => {
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
                                                    src={imageUrl.url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>Bike Name {index}</Card.Title>
                                                    <Card.Text>
                                                        Description - Some quick example text
                                                    </Card.Text>
                                                    <Button variant="outline-light" as={Link} to="/">
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
                                draggable={true}
                                showDots={true}
                                infinite={true}
                                partialVisible={true}
                                dotListClass="custom-dot-list-style"
                            >
                                {sliderImageUrl.map((imageUrl, index) => {
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
                                                    src={imageUrl.url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>Bike Name {index}</Card.Title>
                                                    <Card.Text>
                                                        Description - Some quick example text
                                                    </Card.Text>
                                                    <Button variant="outline-light" as={Link} to="/">
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
                                draggable={true}
                                showDots={true}
                                infinite={true}
                                partialVisible={true}
                                dotListClass="custom-dot-list-style"
                            >
                                {sliderImageUrl.map((imageUrl, index) => {
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
                                                    src={imageUrl.url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>Bike Name {index}</Card.Title>
                                                    <Card.Text>
                                                        Description - Some quick example text
                                                    </Card.Text>
                                                    <Button variant="outline-light" as={Link} to="/">
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
                                draggable={true}
                                showDots={true}
                                infinite={true}
                                partialVisible={true}
                                dotListClass="custom-dot-list-style"
                            >
                                {sliderImageUrl.map((imageUrl, index) => {
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
                                                    src={imageUrl.url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>Bike Name {index}</Card.Title>
                                                    <Card.Text>
                                                        Description - Some quick example text
                                                    </Card.Text>
                                                    <Button variant="outline-light" as={Link} to="/">
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
                                draggable={true}
                                showDots={true}
                                infinite={true}
                                partialVisible={true}
                                dotListClass="custom-dot-list-style"
                            >
                                {sliderImageUrl.map((imageUrl, index) => {
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
                                                    src={imageUrl.url}
                                                />
                                                <Card.Body>
                                                    <Card.Title>Bike Name {index}</Card.Title>
                                                    <Card.Text>
                                                        Description - Some quick example text
                                                    </Card.Text>
                                                    <Button variant="outline-light" as={Link} to="/">
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
