// About Me landing page with a profile picture and information
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import heroImage from "../assets/hero-image.jpg";
import { Image, Button, Container, Nav } from 'react-bootstrap';

import { useQuery } from "@apollo/client";
import { QUERY_BIKES } from "../utils/queries";




export default function AboutPage() {

    const { loading, data } = useQuery(QUERY_BIKES);
    const bikes = data?.bikes || [];





    return (

        <Container fluid>
            <div id="homePageTop" className="container myOutlet">
                <div id="intro-example" class="heroOverlay text-center bg-image">
                    <div class="mask intro-picture" >
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <div class="text-white">
                                <h1 class="mb-3">Learn more about our service</h1>
                                <h5 class="mb-4">
                                    Four wheels move the body, two wheels move the soul
                                </h5>
                                <Button variant="outline-light" size="lg">
                                    <Nav.Link as={HashLink} to="/#aboutUsSection" eventKey="/#aboutUsSection">About Us</Nav.Link>
                                </Button>
                                <Button variant="outline-light" size="lg">
                                    <Nav.Link as={Link} to="/bikes" eventKey="/bikes">Our Bike Inventory</Nav.Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="features-icons bg-light d-flex">
                    <div className="container AboutMeBox">
                        <div className="row">
                            <div className="col">
                                <h2>About Me</h2>
                                <br></br>
                                <row>
                                    <p>
                                        Hello,
                                        <br></br>
                                        <br></br>
                                        I Syed am a graduate of the University of Toronto, Full-Stack Web Development Bootcamp. With a backgound in Energy Engineering from Ontario Tech Unversity, allowed me to transfer my time-management, organizational, and problem-solving skills to learn and apply software solutions/technologies for real-world problems.
                                    </p>
                                </row>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aboutUsSection" class="bg-light py-5">
                    <div class="container px-5">
                        <div class="row gx-5 justify-content-center">
                            <div class="col-xxl-8">
                                <div class="text-center my-5">
                                    <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Us</span></h2>
                                    <p class="lead fw-light mb-4">My name is Start Bootstrap and I help brands grow.</p>
                                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
}
