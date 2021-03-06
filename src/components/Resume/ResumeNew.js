import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Prakash_gupta.pdf";
import resumePic from "../../Assets/../Assets/resumePic.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://github.com/prakash817/my-portfolio/blob/master/src/Assets/Prakash%20gupta_%20FW16_049.pdf";
// const linkKumar =
//   "https://drive.google.com/file/d/18CDed0IDnYjLdOkujGYUAwGVroeuzm-P/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* <Row className="resume"> */}
        {/* <Document file={linkKumar} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
        <img src={resumePic} style={{ maxWidth: "50vw" }}/>
        {/* </Row> */}

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "2rem",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
