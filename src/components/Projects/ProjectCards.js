import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsEye } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import datahub_logo from "../../Assets/Projects/datahub_logo.jpg";
import Spryntz_logo from "../../Assets/Projects/Spryntz_logo.jpg";
import music_logo from "../../Assets/Projects/music_logo.png";
import ornat_logo from "../../Assets/Projects/ornat_logo.jpeg";
import ett_logo from "../../Assets/Projects/ett_logo.png";

function ProjectCards(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let date = new Date();
  let year = date.getFullYear();
  const FormatedImage = (title) => {
    switch (title) {
      case "Sprytz ( Order Mobile App )":
        return Spryntz_logo;
      case "Sprytz ( Dispatcher Mobile App )":
        return Spryntz_logo;
      case "Datahub":
        return datahub_logo;
      case "P.S Music":
        return music_logo;
      case "ORNAT (Native Organics)":
        return ornat_logo;
      case "ETT":
        return ett_logo;
      default:
        return props.imgPath

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
            <BsEye /> &nbsp; {"View"}
          </Button>
          {"\n"}
          {"\n"}

          {props.isLive && props.Link && (
            <Button
              variant="primary"
              href={props.Link}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; {"Go to WebSite"}
            </Button>
          )}
        </Card.Body>
      </Card>
      <Modal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <img src={FormatedImage(props.title)} className="img-fluid" alt="avatar" style={{ marginBottom: '30px' }} />
          {props.description}
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer" style={{ justifyContent: 'center', alignItems: 'center' }}>
          Copyright © {year} Pazhanisamy K
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProjectCards;
