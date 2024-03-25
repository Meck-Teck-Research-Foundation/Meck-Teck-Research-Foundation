import React from "react";
import "./service.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Textblock() {
  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="text-block">
      <Slider {...settings}>
        <div className="b1">
          <h1>"We provide Workshops to Students in Various Institutions"</h1>
          <br />
          <h2>
            We dedicate ourselves to give training for the students in various
            institutions and colleges
          </h2>
        </div>
        <div className="b2">
          <h1>
            "We conduct Seminars under various topics needed to enhance the
            skills"
          </h1>
          <br />
          <h2>
            The seminars will leads to improvement in the level of the skills
            and knowledge under the assigned topic.
          </h2>
        </div>
        <div className="b3">
          <h1>"Internships for college students will be Provided"</h1>
          <br />
          <h2>
            Internship will be provided to the students under the streams
            include Augmented Reality,Iot,python ,java and so on.
          </h2>
        </div>
        <div className="b4">
          <h1>"We will also do the projects for all the departments"</h1>
          <br />
          <h2>
            The projects will be delivered to the clients according to their own
            needs also we add new features in it to enhance the level of the
            project.
          </h2>
        </div>
        <div className="b5">
          <h1>
            "We give Web development and web designing training for the
            students"
          </h1>
          <br />
          <h2>
            We let students to entirely acquire knowledge in the web development
            area which includes full stack development.
          </h2>
        </div>
      </Slider>
    </div>
  );
}
