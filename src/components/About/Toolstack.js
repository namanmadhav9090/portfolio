import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiWindows } from "react-icons/di";
import {
  SiWindows,
  SiVisualstudiocode,
  SiPostman,
  SiFilezilla,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={ 4 } md={ 2 } className="tech-icons">
        <SiFilezilla />
      </Col>
    </Row>
  );
}

export default Toolstack;
