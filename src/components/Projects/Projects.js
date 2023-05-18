import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import web3 from '../../Assets/Projects/home-bg.jpg';
import suicide from "../../Assets/Projects/suicide.png";
import social_blog from "../../Assets/Projects/blog.png";

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
              imgPath={web3}
              isBlog={false}
              title="nft_market"
              description="NFT Marketplace is an innovative project that revolutionizes the way we buy, sell, and collect digital assets. It provides a secure and decentralized platform for artists, creators, and collectors to trade unique and authenticated NFTs (Non-Fungible Tokens). With an intuitive user interface and advanced blockchain technology, NFT Marketplace empowers users to explore and discover a vast array of digital art, virtual assets, and collectibles, fostering a vibrant community of digital enthusiasts. Join us and experience the future of digital ownership and creativity."    
              ghLink="https://github.com/namanmadhav9090/nft_market"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social_blog}
              isBlog={false}
              title="social_media_blog"
              description="My personal blog page build with React.js  which takes the content from makdown files and renders it using React.js. newletter feature , shate posts ,comment posts etc"
              ghLink="https://github.com/namanmadhav9090/social_media_blog"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="portfolio"
              description="Welcome to my personal portfolio website, where I showcase my skills, experience, and achievements. Through a clean and visually appealing design, I present a curated collection of my work in various fields such as web development, graphic design, and multimedia production."
              ghLink="https://github.com/namanmadhav9090/portfolio"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
