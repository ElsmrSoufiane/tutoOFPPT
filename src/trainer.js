const TrainerSection = () => {
    return (
      <div className="trannir">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center">
                <h2>Our Club Trainer</h2>
                <p>Some form, by injected humour, or randomised.</p>
              </div>
            </div>
          </div>
          <div className="row d_flex">
            <div className="col-lg-10 offset-lg-1 col-md-12">
              <div
                id="testimo"
                className="carousel slide our_trannir"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li data-target="#testimo" data-slide-to="0" className="active"></li>
                  <li data-target="#testimo" data-slide-to="1"></li>
                  <li data-target="#testimo" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="carousel-caption posi_in">
                        <div className="trannir_text">
                          <i>
                            <img src="images/clint.jpg" alt="Trainer" />
                          </i>
                          <h3>Denial Sork</h3>
                          <span>Trainer</span>
                          <ul className="social_icon text_align_center">
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-youtube-play"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Additional carousel items can be added here */}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#testimo"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#testimo"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default TrainerSection;  