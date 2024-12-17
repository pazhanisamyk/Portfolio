import React from "react";
import { Card } from "react-bootstrap";

const AboutCard = () => (
  <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
        Hi, I'm <span className="purple">Pazhanisamy K</span> from &nbsp;
          <span className="purple">Panruti, TamilNadu, India.</span>
          <br />
          <br />
          I am currently working as a <span className="purple">Full Stack Developer</span> at <span className="purple"> Agile SoftLabs Pvt. Ltd, Pondicherry </span>.
          <br />
          <br />
          I hold a <span className="purple">Master of Science in Computer Science &nbsp;</span> 
          (M.Sc-CS)
          <br />
          <br />
           I have over 2+ years of experience specializing in front-end development in 
          <span className="purple"> Redblox Technologies Pvt. Ltd, Pondicherry </span>.
          <br />
          <br />
          Besides coding, I enjoy <span className="purple">gaming, farming, and traveling</span> in my free time!
        </p>
      </blockquote>
    </Card.Body>
  </Card>
);

export default AboutCard;
