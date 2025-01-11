import React from "react";

const GamesSection = () => {
    return (
      <div className="sports">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="titlepage text_align_center">
                <h2>Our Sports Games</h2>
                <p>
                  Variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable.
                </p>
                <a className="read_more" href="sports.html">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="row d_flex">
            <div className="col-md-3">
              <div className="sports_main text_align_center">
                <figure>
                  <img src="images/sport1.png" alt="Sport 1" />
                </figure>
                <div className="sports_text">
                  <h3>Game 1</h3>
                  <p>
                    Available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                  <a className="read_more" href="sports.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sports_main text_align_center">
                <figure>
                  <img className="dorder" src="images/sport2.png" alt="Sport 2" />
                </figure>
                <div className="sports_text">
                  <h3 className="dark3">Game 2</h3>
                  <p>
                    Available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                  <a className="read_more" href="sports.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sports_main text_align_center">
                <figure>
                  <img src="images/sport3.png" alt="Sport 3" />
                </figure>
                <div className="sports_text">
                  <h3>Game 3</h3>
                  <p>
                    Available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                  <a className="read_more" href="sports.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default GamesSection;
