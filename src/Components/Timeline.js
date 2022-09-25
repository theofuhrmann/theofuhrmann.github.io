import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import Discoverfy from "../Images/discoverfy.jpeg";
import Picnic from "../Images/picnic.jpg";
import Tempsdelleure from "../Images/tempsdelleure.png";
import Sitgespc from "../Images/sitgespc.jpg";

function Timeline() {
  return (
    <>
      <Helmet>
        <title>Théo's Portfolio | Timeline </title>
      </Helmet>
      <div className="content">
        <h1 style={{ color: "rgb(205, 111, 76)" }}>Timeline ⏳</h1>
        <ul className="content-ul">
          <li className="content-li">
            <div className="timeline-header">
              <img className="timeline-picture" src={Discoverfy} alt="" />
              <div style={{ marginLeft: "20px" }}>
                <h2> Full-Stack developer </h2>
                <h3> DISCOVERFY </h3>
                <p>
                  <i>Feb. 2022 - July 2022</i>
                </p>
              </div>
            </div>
            <p>
              Discoverfy is a startup based in Barcelona that offers a SaaS
              focusing on Product Discovery Software for retailers, ecommerce
              and marketplaces.
              <br />
              <br />I Designed and developed brand new front-end and back-end
              features following <b>Agile</b> and <b>Scrum</b> methodologies.
              Another big part of my work consisted in troubleshooting API data,
              UI, and UX inconsistencies using <b>PostgreSQL</b>, <b>Node.js</b>{" "}
              and <b>React</b>. In addition, I integrated Shopify installation
              methods to run the product on the Shopify platform. I also
              implemented a new interface for the product's landing page.
              <br />
              <br />
            </p>
            <a
              className="button-link"
              href="https://discoverfy.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discoverfy
            </a>
          </li>
          <li className="content-li">
            <div className="timeline-header">
              <img className="timeline-picture" src={Picnic} alt="" />
              <div style={{ marginLeft: "20px" }}>
                <h2> Waiter </h2>
                <h3> Pic Nic </h3>
                <p>
                  <i>Apr. 2019 - Sept. 2019</i>
                </p>
              </div>
            </div>
            <p>
              Pic Nic is a high-end restaurant by the sea located in Sitges.
              <br />
              <br />
              During my stay I managed multiple sections of the restaurant. I
              was put in charge of ensuring customer satisfaction through a
              tailored and consistent service due to my fluency in{" "}
              <b>English</b> and <b>French</b>. I worked with a staff of 20+
              members, which taught me valuable lessons on how to work with a{" "}
              <b>big team</b>.
              <br />
              <br />
            </p>
            <a
              className="button-link"
              href="https://www.restaurantpicnic.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pic Nic
            </a>
          </li>
          <li className="content-li">
            <div className="timeline-header">
              <img className="timeline-picture" src={Sitgespc} alt="" />
              <div style={{ marginLeft: "20px" }}>
                <h2> 3D Printing Instructor </h2>
                <h3> Sitges PC </h3>
                <p>
                  <i>June 2018 - Dec. 2018</i>
                </p>
              </div>
            </div>
            <p>
              Sitges PC is a computer shop in Sitges that specialises in
              computer service and support. It also offers web page design and
              hosting and provides technical assistance with a variety of fields
              within hardware and software.
              <br />
              <br />
              I ran classes on how to use Tinkercad and Slic3r, a 3D modeling
              software program and a 3D slicing engine, respectively. During the
              courses I instructed students on the 3D printing process and
              techniques. I also had the opportunity to assemble the communal 3D
              printing machine.
              <br />
              <br />
            </p>
            <a
              className="button-link"
              href="https://sitgespc.com/servicio-tecnico-informatico/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitges PC
            </a>
          </li>
          <li className="content-li">
            <div className="timeline-header">
              <img className="timeline-picture" src={Tempsdelleure} alt="" />
              <div style={{ marginLeft: "20px" }}>
                <h2> Certified LEGO Robotics Instructor </h2>
                <h3> Temps de Lleure </h3>
                <p>
                  <i>Sept. 2017 - June 2018</i>
                </p>
              </div>
            </div>
            <p>
              Temps de Lleure specialises in leisure time, it offers a lot of
              fun and educational activities for kids.
              <br />
              <br /> I received a certified LEGO WeDo robotics training which
              allowed me to create and organize lesson plans on LEGO WeDo 1.0,
              LEGO WeDo 2.0, and <b>Scratch</b>. I used the lessons to teach 6
              to 10 year old children how to build and program LEGO robots with
              the aforementioned technologies. During the lessons I engaged
              students in solving environmental and technological issues though
              robotics.
              <br />
              <br />
            </p>
            <a
              className="button-link"
              href="https://www.tempsdelleure.cat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Temps de Lleure
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Timeline;
