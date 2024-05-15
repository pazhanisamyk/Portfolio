import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf from "../../Assets/../Assets/Pazhanisamy K.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const renderResumePage = (pageNumber) => (
    <Row className="resume">
      <Document file={pdf} className="d-flex justify-content-center">
        <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
    </Row>
  );

  const renderDownloadButton = () => (
    <Row style={{ justifyContent: "center", position: "relative" }}>
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download Resume
      </Button>
    </Row>
  );

  return (
    <Container fluid className="resume-section">
      <Particle />
      {renderDownloadButton()}
      {renderResumePage(1)}
      {renderResumePage(2)}
      {renderDownloadButton()}
    </Container>
  );
}

export default ResumeNew;
