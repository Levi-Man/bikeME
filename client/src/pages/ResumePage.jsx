

export default function ResumePage() {
    return (
        // bulletpoint resume displayed on page, with a download button for the user to get the actual resume file
        <div className="container pt-4 myOutlet">
            <h2>Resume</h2>
            <section className="features-icons bg-light text-left col-6">
                <div className="container">
                    <div className="row p-2">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="bi-window m-auto text-primary" />
                            </div>
                            <h3>Front-End</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">HTML</li>
                                <li className="list-group-item">CSS</li>
                                <li className="list-group-item">JavaScript</li>
                                <li className="list-group-item">Responsive Design</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">BootStrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-icons bg-light text-left col-6">
                <div className="container">
                    <div className="row p-2">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="bi-window m-auto text-primary" />
                            </div>
                            <h3>Back-End</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">APIs</li>
                                <li className="list-group-item">Node</li>
                                <li className="list-group-item">MySQL, Sequelize</li>
                                <li className="list-group-item">MongoDB, Mongoose</li>
                                <li className="list-group-item">REST</li>
                                <li className="list-group-item">GraphQL</li>
                                <li className="list-group-item">MERN</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}