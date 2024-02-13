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

                <section id="aboutUsSection" class="bg-light py-5">
                    <div class="container px-5">
                        <div class="row gx-5 justify-content-center">
                            <div class="col-xxl-8">
                                <div class="text-center my-5">
                                    <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">Welcome to BikeME</span></h2>
                                    <p class="lead fw-light mb-4">What do you want to ride?</p>
                                    <p class="text-muted">
                                        Welcome to BikeME, the ultimate destination for motorcycle enthusiasts seeking unforgettable adventures on two wheels. Born from the collective passion of three avid riders, Syed, Indra, and Blessing, our journey began with a shared vision to redefine the motorcycle rental experience.
                                    </p>

                                    <p class="text-muted">
                                        At BikeME, we're not just in the business of renting motorcycles; we're in the business of creating memories. Our founders bring together their expertise, dedication, and love for motorcycles to curate an exceptional riding experience for every customer.
                                    </p>

                                    <p class="text-muted">
                                        With a commitment to excellence, we offer a diverse fleet of top-quality motorcycles, meticulously maintained to ensure both safety and performance. Whether you're craving the adrenaline rush of a high-powered sportbike, the freedom of a classic cruiser, or the versatility of an adventure bike, we have the perfect ride for you.
                                    </p>

                                    <p class="text-muted">
                                        But our dedication goes beyond just providing motorcycles. We're here to make your journey seamless and unforgettable. From personalized recommendations to comprehensive support, our team is dedicated to ensuring that every aspect of your rental experience exceeds your expectations.
                                    </p>

                                    <p class="text-muted">
                                        At BikeME, we believe that the thrill of the open road should be accessible to all. Whether you're embarking on a solo adventure, planning a group ride with friends, or looking to explore new destinations, we're here to make it happen.
                                    </p>

                                    <p class="text-muted">
                                        Join us at BikeME and let's embark on the ride of a lifetime together.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
}
