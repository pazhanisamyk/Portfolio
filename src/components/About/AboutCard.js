import React from "react";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => (
  <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Pazhanisamy K</span> from{" "}
          <span className="purple">Panruti, TamilNadu, India.</span>
          <br />
          I am currently employed as a software developer at RedBlox Technologies Pvt. Ltd, Pondicherry.
          <br />
          I have completed Master of Science in Computer Science (MSc-CS).
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          {["Playing Games", "Farming", "Travelling"].map((activity, index) => (
            <li key={index} className="about-activity">
              <ImPointRight /> {activity}
            </li>
          ))}
        </ul>
      </blockquote>
    </Card.Body>
  </Card>
);

export default AboutCard;
