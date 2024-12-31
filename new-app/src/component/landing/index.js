import styles from './index.css';
import { fill } from "@cloudinary/url-gen/actions/resize";
import React, { useEffect, useState } from "react";
import axios from "axios";

let Landing = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light navbar-expand-lg ">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <img src="image.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    {/* Bliken */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-primary text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div>
                <BannerSection />
                <div className="container">
                    {/* <SaleCard /> */}
                    {/* sale */}
                    {/* <h2>New Products!</h2> */}
                    {/* <NewCard /> */}
                    <ProductCard />
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

let BannerSection = () => {
    return (
        <div className="banner position-relative">
            <img
                src="motor.png" alt="Banner Background" className="img-fluid w-100"
            />
            <div className="banner-text position-absolute top-50 start-50 translate-middle text-center text-white">
                <h2 className="display-3 fw-bold">The worldwide best seller product is here</h2>
                <p className="lead">Limited stock! Buy BMW 430I XDRIVE before sold out</p>
                {/* #newproduct */}
                <a href="#" className="btn btn-primary btn-lg mt-3">
                    Discover new product
                </a>
            </div>
        </div>
    );
}

let SaleCard = () => {
    return (
        <div className="container mt-5 mb-5 text-center">
            <h2 className=" mb-4">On Sale! Don't miss it</h2>
            <div className="row  g-4">
                <div className="col">
                    <div className="card card-sale " >
                        <img src="vespa.png" className="card-img-top" alt="..." />
                        <div className="card-body mb-2">
                            <h5 className="card-title">VESPA LX 125</h5>
                            <p className="card-text"> Some quick example text. </p>
                        </div>
                        <button className="btn btn-primary m-2" type="submit">Buy</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-sale">
                        <img src="vespa2.png" className="card-img-top" alt="..." />
                        <div className="card-body mb-2">
                            <h5 className="card-title">VESPA SPRINT 150 ABS</h5>
                            <p className="card-text">The sporty elegence for your bold city lifestyle</p>
                        </div>
                        <button className="btn btn-primary m-2" type="submit">Buy</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-sale">
                        <img src="vespa3.png" className="card-img-top" alt="..." />
                        <div className="card-body mb-2">
                            <h5 className="card-title">Vespa 946 Dragon</h5>
                            <p className="card-text">A true masterpiece of Italian manufacturing, the Vespa 946 Dragon is a collector's item, a limited edition numbered series of 1888</p>
                        </div>
                        <button className="btn btn-primary m-2" type="submit">Buy</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-sale">
                        <img src="vespa2.png" className="card-img-top" alt="..." />
                        <div className="card-body mb-2 ">
                            <h5 className="card-title">VESPA SPRINT 150 ABS</h5>
                            <p className="card-text">The sporty elegence for your bold city lifestyle</p>
                        </div>
                        <button className="btn btn-primary m-2" type="submit">Buy</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-sale">
                        <img src="vespa.png" className="card-img-top" alt="..." />
                        <div className="card-body mb-2">
                            <h5 className="card-title">VESPA LX 125</h5>
                            <p className="card-text">Some quick example text.</p>
                        </div>
                        <button className="btn btn-primary m-2" type="submit">Buy</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-sale">
                        <img src="vespa3.png" className="card-img-top" alt="..." />
                        <div className="card-body mb-2">
                            <h5 className="card-title">Vespa 946 Dragon</h5>
                            <p className="card-text">A true masterpiece of Italian manufacturing, the Vespa 946 Dragon is a collector's item, a limited edition numbered series of 1888</p>
                        </div>
                        <button className="btn btn-primary m-2" type="submit">Buy</button>
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
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">VESPA LX 125</h5>
                                <p className="card-text"> Some quick example text. </p>
                                <button className="btn btn-primary" type="submit">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">VESPA SPRINT 150 ABS</h5>
                                <p className="card-text">The sporty elegence for your bold city lifestyle</p>
                                <button className="btn btn-primary" type="submit">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa3.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">VESPA LX 125</h5>
                                <p className="card-text">Some quick example text.</p>
                                <button className="btn btn-primary" type="submit">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">VESPA SPRINT 150 ABS</h5>
                                <p className="card-text">The sporty elegence for your bold city lifestyle</p>
                                <button className="btn btn-primary" type="submit">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ width: "200px" }}>
                            <img src="vespa.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">VESPA LX 125</h5>
                                <p className="card-text">Some quick example text.</p>
                                <button className="btn btn-primary" type="submit">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/type`)
            .then((response) => {
                setProducts(response.data.data); // Access nested `data` property
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div className="container mt-5 mb-5 text-center">
        <h2 className="mb-4">Product</h2>
    
        <div className="row g-4">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((data) => (
              <div key={data.id} className="col-md-4"> {/* Adjust column size as needed */}
                <div className="card card-sale">
                  <img
                    src={`https://res.cloudinary.com/dsfqsjycy/image/upload/${data.asset.path}`}
                    alt={data.name}
                    className="card-img-top"
                  />
                  <div className="card-body mb-2">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-price">
                      Rp{(data.price / 1e6).toFixed(2)} Juta
                    </p>
                  </div>
                  <button className="btn btn-primary m-2" type="button">
                    Buy
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p> 
          )}
        </div>
      </div>
    );
};

// export default LandingList;
export default Landing;