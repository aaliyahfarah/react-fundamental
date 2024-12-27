let Landing = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light navbar-expand-lg ">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <img src="image.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    {/* Bliken */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About us</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-light btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div>
                <div class="card text-bg-dark">
                    <img src="motor.png" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h5 class="card-title">NEW PRODUCT is here!</h5>
                        <p class="card-text">Get this product before sold!</p>
                        <button class="btn btn-light btn-outline-success" type="submit">Shop now!</button>
                    </div>
                </div>
                <div className="container">
                    <h2>On Sale! Don't miss it</h2>
                    <SaleCard />
                    {/* sale */}
                    <h2>New Products!</h2>
                    <NewCard />
                    <h1>hello world </h1>
                </div>

            </div>

            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p className="mb-0">© {new Date().getFullYear()} Bliken. All rights reserved.</p>
                    <p>
                        <a href="/privacy" className="text-white text-decoration-none mx-2">Privacy Policy</a>
                        <a href="/terms" className="text-white text-decoration-none mx-2">Terms of Service</a>
                    </p>
                </div>
            </footer>

        </div>

    )
}

let SaleCard = () => {
    return (
        <div className="container mt-4">
            <div className="d-flex overflow-auto card-group">
                <div class="row row-cols-1 row-cols-md-5 g-4">
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA LX 125</h5>
                                <p className="card-text"> Some quick example text. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa2.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA SPRINT 150 ABS</h5>
                                <p class="card-text">The sporty elegence for your bold city lifestyle</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa3.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Vespa 946 Dragon</h5>
                                <p className="card-text">A true masterpiece of Italian manufacturing, the Vespa 946 Dragon is a collector's item, a limited edition numbered series of 1888</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa2.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA SPRINT 150 ABS</h5>
                                <p class="card-text">The sporty elegence for your bold city lifestyle</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA LX 125</h5>
                                <p className="card-text">Some quick example text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa3.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Vespa 946 Dragon</h5>
                                <p className="card-text">A true masterpiece of Italian manufacturing, the Vespa 946 Dragon is a collector's item, a limited edition numbered series of 1888</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

let NewCard = () => {
    return (
        <div className="container mt-4">
            <div className="d-flex overflow-auto card-group">
                <div class="row row-cols-1 row-cols-md-5 g-4">
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA LX 125</h5>
                                <p className="card-text"> Some quick example text. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa2.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA SPRINT 150 ABS</h5>
                                <p class="card-text">The sporty elegence for your bold city lifestyle</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa3.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA LX 125</h5>
                                <p className="card-text">Some quick example text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa2.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA SPRINT 150 ABS</h5>
                                <p class="card-text">The sporty elegence for your bold city lifestyle</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa.png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">VESPA LX 125</h5>
                                <p className="card-text">Some quick example text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;