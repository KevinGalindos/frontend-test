import { dummy } from "../../data/dummy";

import Slider from "react-slick";

import "./Benefits.scss";

export const Benefits = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="benefits" id="benefits">
      <div className="container">
        <div className="title">
          <h2>
            Entre los <span> beneficios </span> <p>que</p> <b>ofrecemos</b> se
            encuentran
          </h2>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            {dummy.benefits.map((item) => (
              <div key={item.id} className="box-img">
                <div className="content-icon">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="benefit-title">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
