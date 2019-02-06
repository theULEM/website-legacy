import React, { Component } from "react";
import ulem from "../ulem.png";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Navbar from "./layout/Navbar";
export default class Home extends Component {
  componentDidMount() {
    window.$(".carousel").carousel({
      interval: 1800
    });
  }

  slide1 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923553_Join%20Week%202019-5.jpg")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "center"
  };

  slide2 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923693_ULEM%202019%20Annual%20Meeting.png")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "center"
  };

  slide3 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923608_Taking%20It%20To%20The%20Streets%202019.jpeg")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "center"
  };

  render() {
    return (
      <div>
        <div className="container">
          <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4 pt-1" />
              <div className="col-4 text-center">
                <img src={ulem} alt="ulem" width="100%" />
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <i className="fas fa-search" />
              </div>
            </div>
          </header>
          <Navbar />
          <div className="jumbotron p-3 p-md-5 text-white rounded bg-centennial">
            <div className="col-md-6 px-0 font-dark">
              <h1 className="display-4 font-italic">Centennial</h1>
              <p className="lead my-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum inventore dolore veritatis esse quia explicabo minus
                quasi facere iste distinctio mollitia sed voluptate delectus,
                corrupti sapiente magni ab quae nobis.
              </p>
              <p className="lead mb-0">
                <Link to="#" className="text-white font-weight-bold">
                  Continue reading...
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel">
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  />
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active crop" style={this.slide1} />
                  <div class="carousel-item crop" style={this.slide2} />
                  <div class="carousel-item crop" style={this.slide3} />
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <br />
              <button className="btn btn-block btn-lg btn-outline-danger">
                <Link className="link" to="/">
                  Event Calendar
                </Link>
              </button>
            </div>
            <div className="col-md-4">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="theULEM"
                options={{ height: 500 }}
              />
            </div>
          </div>
        </div>
        <br />
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Train for Employment</h5>
                  <p class="card-text">
                    Need job skills? Interested in learning a new skill? Let us
                    help you!
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Sponsors</h5>
                  <p class="card-text">They can never be thanked enough!</p>
                  <br />
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Our Impact</h5>
                  <p class="card-text">
                    ULEM strives to empower communities and change lives every
                    day.
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Our Auxiliaries</h5>
                  <p class="card-text">
                    Interested in directly making an impact at the Urban League?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Become a Member</h5>
                  <p class="card-text">
                    Interested in joining the Urban League of Eastern
                    Massachusetts?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Stay in Touch</h5>
                  <p class="card-text">
                    Socialize and stay updated on what we are doing through
                    social media!
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h1>News</h1>
              <img
                src="http://www.ypnulem.org/uploads/I%20AM%20Empowered%20Scholarship.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                consequatur facilis ullam sapiente tempore alias accusamus
                incidunt maiores. Mollitia sunt nemo esse consequuntur ipsum
                adipisci aspernatur excepturi alias. Dolores, libero.
              </p>
            </div>
            <div className="col-md-4" />
          </div>
        </main>
      </div>
    );
  }
}
