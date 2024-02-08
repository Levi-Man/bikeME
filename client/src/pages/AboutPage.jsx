// About Me landing page with a profile picture and information
import heroImage from "../assets/hero-image.jpg";
import { Image, Button, Container } from 'react-bootstrap';

export default function AboutPage() {
    return (
        <Container fluid>
            <div className="container myOutlet">
                <div id="intro-example" class="heroOverlay text-center bg-image">
                    <div class="mask intro-picture" >
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <div class="text-white">
                                <h1 class="mb-3">Learn more about our service</h1>
                                <h5 class="mb-4">
                                    Four wheels move the body, two wheels move the soul
                                </h5>
                                <a class="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                                    role="button" rel="nofollow" target="_blank">More</a>
                                <a class="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
                                    target="_blank" role="button">Our Bike Inventory</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="profileBox shadow p-3 mb-5">
                <img className="profileImage" src={profileImage} alt="ProfileImage" />
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
            </section> */}
            </div>
        </Container>
    );
}
