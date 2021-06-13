import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarrouselHome.css";

const CarrouselHome = () => {
  return (
      <Carousel fade className="carousel-inner">
        <Carousel.Item interval={3000} className="pos">
          <img
            className="d-block w-30"
            src="../../homeUno.jpeg"
            alt="home"
          />
          <Carousel.Caption>
            <h1>Bienvenidos a EALT Store</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000} className="pos">
          <img
            className="d-block w-30"
            src="../../homeDos.jpg"
            alt="home"
          />
          <Carousel.Caption>
          <h2>¡Estamos listas para el próximo desafío! </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000} className="pos">
          <img
            className="d-block w-30"
            src="../../homeTres.jpg"
            alt="home"
          />
          <Carousel.Caption>
            <h2>Nuestra misión es ayudarte a que conviertas
             todos tus rincones, </h2>
             <h2>en espacios con mucha onda! </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
};

export default CarrouselHome;
