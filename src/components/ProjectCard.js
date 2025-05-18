import React from "react";
import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, techStack, githubLink, liveLink }) => {
  return (
    <Col size={12} sm={6} md={4} className="mb-4">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="proj-description">{description}</span>
          
          {techStack && (
            <div className="tech-stack-container">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <div className="proj-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="proj-link">
                <FaGithub /> Code
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="proj-link">
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};