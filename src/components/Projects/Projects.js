import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import music from "../../Assets/Projects/music.jpg";
import datahub from "../../Assets/Projects/datahub.png";
import ems from "../../Assets/Projects/ems.png";
import mellowplex from "../../Assets/Projects/mellowplex.png";
import spryntz from "../../Assets/Projects/spryntz.jpg";
import ornat from "../../Assets/Projects/ornat.jpg";
import pessoai from "../../Assets/Projects/pessoai.png";
import ett from "../../Assets/Projects/ett.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mellowplex}
              isLive={true}
              title="Mellowplex"
              description="Mellowplex is an World's first movie metaverse, Movie Databases, Metaverse, NFT, Reviews of movies and Photos | Videos about actors and movies, imformations about the upcomming movies (Hero, Heroine and other actors, directors, music directors, etc...), i worked as a part of the project for designing responsive UI for all devices, Regular Maintenance and Updation."
              Link="https://www.mellowplex.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pessoai}
              isLive={true}
              title="Pessoa AI"
              description="Pessoa AI is an Office based concept project, That was made with react js and nest js, only admin can create a member and then give access to enter the site. Admin have an master control (add member, remove member, assign tasks, revoke tasks). website can supports with dark mode and light mode."
              Link="https://64621832413bb40065f21386--ephemeral-tartufo-6dceae.netlify.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isLive={false}
              title="Employee management system"
              description="EMS (Employee management system) was made with PHP and MYSQL for maintaining the Employee details for company, Admin can create a employee, assign tasks, add salary, manage leave, User can aply leave, view assigned tasks and update the status."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spryntz}
              isLive={false}
              title="Sprytz ( Order Mobile App )"
              description="Worked on Sprytz mobile oder application, The project contains three login system ( Onboarding, user and restaurant ) in a single application, seprate there screens with there login credentials, users will order there foods and dishes and also view the past orders, faq, and track the delivery partner with map."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spryntz}
              isLive={false}
              title="Sprytz ( Dispatcher Mobile App )"
              description="worked on Sprytz mobile dispatcher application, In this application delivery partner accept the order after the restaurant accept the order from the user then the restaurant assigned the task or order to the delivery partner. Then the delivery partner recive the foods from restaurant and deliver the foods to user with the help of map."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datahub}
              isLive={false}
              title="Datahub"
              description="Worked on the datahub mobile application, it used to collect the user data (Survey collecting application) with multiple conditional rendering. The components and also render the components showing and hiding by other components value, Rendering the complete UI with backend data like height, width, color, language, ltr and rtl concepts."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isLive={false}
              title="P.S Music"
              description="music application made with Java in android studio to listen the local music from our mobile, We can customise the color and design as per the users need and we can also create a playlist, add or remove favourite songs, we can change the songs by next and previous, loop a song or list and also we can shuffle the songs list, users can feel more user friendly."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ornat}
              isLive={false}
              title="ORNAT (Native Organics)"
              description="ORNAT made with flutter (dart) and firebase for selling and buying the organic products from this application with normal price, users can buy the products like vegetables, fruits, oils, nuts, snacks, dairy products, honey and etc..., seller can sell the products through this app."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ett}
              isLive={false}
              title="ETT"
              description="ETT made with React Native, express js and mongodb for Team Leaders can monitor the team members activites like performances of the members, assign tasks, monitor leave of the team members by approve or cancel the requests, Admin can Add or Remove the members."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
