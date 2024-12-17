import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import datahub from "../../Assets/Projects/datahub.jpg";
import ems from "../../Assets/Projects/ems.png";
import mellowplex from "../../Assets/Projects/mellowplex.png";
import spryntz from "../../Assets/Projects/spryntz.jpg";
import shbs from "../../Assets/Projects/shbs.png";
import vcb from "../../Assets/Projects/vcb.png";

const projectsData = [
  {
    imgPath: mellowplex,
    isLive: true,
    Github: false,
    title: "Mellowplex",
    description: "Mellowplex is an World's first movie metaverse, Movie Databases, Metaverse, NFT, Reviews of movies and Photos | Videos about actors and movies, imformations about the upcomming movies (Hero, Heroine and other actors, directors, music directors, etc...), i worked as a part of the project for designing responsive UI for all devices, Regular Maintenance and Updation.",
    Link: "https://www.mellowplex.io/"
  },
  {
    imgPath: ems,
    Github: true,
    GithubLink: "https://github.com/pazhanisamyk/EMS",
    isLive: false,
    title: "Employee management system",
    description: "EMS (Employee management system) was made with PHP and MYSQL for maintaining the Employee details for company, Admin can create a employee, assign tasks, add salary, manage leave, User can aply leave, view assigned tasks and update the status.",
  },
  {
    imgPath: shbs,
    Github: true,
    GithubLink: "https://github.com/pazhanisamyk/SHBS",
    isLive: false,
    title: "Seminar Hall Booking System",
    description: "SHBS (Seminar Hall Booking System) was made with PHP and MYSQL for maintaining the collage Seminar halls details, Admin can create, view, update, and delete the seminar halls details, manage halls bookings, User can book the free halls, view events are currently going in the halls and also view the upcomming events of the specific halls.",
  },
  {
    imgPath: spryntz,
    Github: false,
    isLive: true,
    Link: "https://play.google.com/store/apps/details?id=com.order.spryntz&pli=1",
    title: "Sprytz",
    description: "Worked on Sprytz mobile oder application, The project contains three login system ( Onboarding, user and restaurant ) in a single application, seprate there screens with there login credentials, users will order there foods and dishes and also view the past orders, faq, and track the delivery partner with map."
  },
  {
    imgPath: datahub,
    Github: false,
    isLive: true,
    Link: "https://datahub.ae/",
    title: "Datahub",
    description: "Worked on the datahub mobile application, it used to collect the user data (Survey collecting application) with multiple conditional rendering. The components and also render the components showing and hiding by other components value, Rendering the complete UI with backend data like height, width, color, language, ltr and rtl concepts."
  },
  {
    imgPath: vcb,
    Github: true,
    GithubLink: "https://github.com/pazhanisamyk/village-voice-mobile",
    isLive: false,
    title: "VCB",
    description: "VCB (Village Complaint Box) made with React Native, express js and mongodb for manage village problems related to Drinking water, current, trash, street light, road, waste water, etc... Admin can create, view, update, delete complaint boxes, users can access the complaint boxes and put complaints related to their problems and find solutions easily."
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col md={4} key={index} className="project-card">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
