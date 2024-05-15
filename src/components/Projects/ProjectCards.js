import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsEye, BsGithub } from "react-icons/bs";
import { Modal } from "react-bootstrap";

import datahubLogo from "../../Assets/Projects/datahub_logo.jpg";
import spryntzLogo from "../../Assets/Projects/Spryntz_logo.jpg";
import musicLogo from "../../Assets/Projects/music_logo.png";
import ornatLogo from "../../Assets/Projects/ornat_logo.jpeg";
import ettLogo from "../../Assets/Projects/ett_logo.png";

function ProjectCards(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const year = new Date().getFullYear();

  const formatImage = (title) => {
    switch (title) {
      case "Sprytz ( Order Mobile App )":
      case "Sprytz ( Dispatcher Mobile App )":
        return spryntzLogo;
      case "Datahub":
        return datahubLogo;
      case "P.S Music":
        return musicLogo;
      case "ORNAT (Native Organics)":
        return ornatLogo;
      case "ETT":
        return ettLogo;
      default:
        return props.imgPath;
    }
  };

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button onClick={() => setIsModalOpen(true)}>
            <BsEye /> &nbsp; View
          </Button>
          {"\n\n"}
          {props.isLive && props.Link && (
            <Button
              variant="primary"
              href={props.Link}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Go to WebSite
            </Button>
          )}
          {props.Github && props.GithubLink && (
            <Button
              variant="primary"
              href={props.GithubLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsGithub /> &nbsp; Github
            </Button>
          )}
        </Card.Body>
      </Card>
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <img
            src={formatImage(props.title)}
            className="img-fluid"
            alt="avatar"
            style={{ marginBottom: "30px" }}
          />
          {props.description}
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer" style={{ justifyContent: "center", alignItems: "center" }}>
          Copyright © {year} Pazhanisamy K
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;
