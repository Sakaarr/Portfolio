import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

// Import all skill icons
import meter1 from "../assets/img/py.png";
import meter2 from "../assets/img/html.webp";
import meter3 from "../assets/img/django.png";
import meter5 from "../assets/img/post.png";
import meter6 from "../assets/img/mysql.webp";
import meter7 from "../assets/img/git.png";
import meter8 from "../assets/img/postman.svg";
import meter9 from "../assets/img/boot.png";
import meter10 from "../assets/img/tail.png";
import meter11 from "../assets/img/react.png";
import meter12 from "../assets/img/celery.jpeg";
import meter13 from "../assets/img/restful.png";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      const skillSection = document.getElementById("skills");
      if (skillSection) {
        const sectionTop = skillSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const skills = [
    { name: "Python", image: meter1 },
    { name: "HTML", image: meter2 },
    { name: "Django", image: meter3 },
    { name: "Django Rest Framework", image: meter3 },
    { name: "RESTful APIs", image: meter13 },
    { name: "Celery", image: meter12 },
    { name: "React.js", image: meter11 },
    { name: "Tailwind CSS", image: meter10 },
    { name: "Bootstrap", image: meter9 },
    { name: "PostgreSQL", image: meter5 },
    { name: "MySQL", image: meter6 },
    { name: "Git and Github", image: meter7 },
    { name: "Postman", image: meter8 }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill relative py-20 overflow-hidden" id="skills">
      <div className="container mx-auto px-4">
        <div className={`skill-bx rounded-3xl bg-gray-900 text-center p-12 shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4 text-white">Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Here are the technologies and tools I work with, spanning backend development, APIs, and AI/ML.
            These are the skills I've built through hands-on projects in backend systems, web APIs, and machine learning.
          </p>
          
          <Carousel 
            responsive={responsive} 
            infinite={true} 
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            className="skill-slider"
          >
            {skills.map((skill, index) => (
              <div key={index} className="px-4">
                <div className="skill-item p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 h-56 flex flex-col justify-center items-center">
                  <div className="skill-image-container mb-4 h-24 flex items-center justify-center">
                    <img src={skill.image} alt={skill.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h5 className="text-xl font-medium text-white">{skill.name}</h5>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <img className="background-image-left opacity-10" src={colorSharp} alt="Background decoration" />
    </section>
  );
}