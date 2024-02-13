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
import { useRentalContext } from "../utils/GlobalContext";
// import bikesData from "../utils/SampleSeedData";

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

// default export function for portfolio component
export default function AllBikesPage() {
  const { AllBikes } = useRentalContext(); // this hook needs to be inside a function

  const sportBikeData = AllBikes.filter((bike) => bike.category === "Sport");
  const touringBikeData = AllBikes.filter(
    (bike) => bike.category === "Touring"
  );
  const adventureBikeData = AllBikes.filter(
    (bike) => bike.category === "Adventure"
  );
  const cruiserBikeData = AllBikes.filter(
    (bike) => bike.category === "Cruiser"
  );
  const retroBikeData = AllBikes.filter((bike) => bike.category === "Retro");

  // const [open, setOpen] = useState(false);

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
                {sportBikeData.map((bike, index) => {
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
                          <Card.Text>{bike.description}</Card.Text>
                          <Button
                            variant="outline-light"
                            as={Link}
                            to={`/bike/${bike._id}`}
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
                {touringBikeData.map((bike, index) => {
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
                          <Card.Text>{bike.description}</Card.Text>
                          <Button
                            variant="outline-light"
                            as={Link}
                            to={`/bike/${bike._id}`}
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
                {adventureBikeData.map((bike, index) => {
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
                          <Card.Text>{bike.description}</Card.Text>
                          <Button
                            variant="outline-light"
                            as={Link}
                            to={`/bike/${bike._id}`}
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
                {cruiserBikeData.map((bike, index) => {
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
                          <Card.Text>{bike.description}</Card.Text>
                          <Button
                            variant="outline-light"
                            as={Link}
                            to={`/bike/${bike._id}`}
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
                {retroBikeData.map((bike, index) => {
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
                          <Card.Text>{bike.description}</Card.Text>
                          <Button
                            variant="outline-light"
                            as={Link}
                            to={`/bike/${bike._id}`}
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
