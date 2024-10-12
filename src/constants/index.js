import {
    mobile,
    backend,
     web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    fst,
    logo,
  } from "../assets";
  import IMG from '../assets/IMG.jpg'

  import django from '../assets/tech/django.svg'
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend React Developer",
      icon: mobile,
    },
    {
      title: "Backend Django Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor's degree in Computer Science.",
      company_name: "FST TANGER",
      icon: fst,
      iconBg: "#E6DEDD",
      date: "March 2022 -  2025",
      points: [
        "Proficiency in developing and maintaining dynamic web applications using modern web development technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Master's degree",
      company_name: "soon",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Feb 2027",
      points: [
        "comming soon"
      ],
    },
    {
      title: "First job",
      company_name: "soon",
      icon: logo,
      iconBg: "#383E56",
      date: "2027",
      points: [

      ],
    },
    {
      title: "Launching my business.",
      company_name: "",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "One Day",
      points: [
      ],
    },
  ];
 
  const testimonials = [
    {
      testimonial:
        "Your testimonials will help me further develop myself. You can send a testimonial on the Contact Us page.",
      name: "Saber Ben Hamda (owner of the website)",
      designation: "CFO",
      company: "Web developer",
      image: IMG,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Skills Swap is an innovative platform designed to empower individuals by facilitating the exchange of skills. Whether you're looking to learn a new language, master a technical skill, or enhance your creative abilities, Skills Swap connects you with others who possess the expertise you seek. In return, you offer your own skills, creating a community-driven network of learning and collaboration. This project aims to democratize education, enabling users to grow personally and professionally by leveraging the knowledge and talents of others in a mutually beneficial exchange",
      tags: [        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "SoftFast is a cutting-edge marketplace tailored for developers to sell their code and digital products for profit. Designed to support creators in the tech industry, SoftFast offers a streamlined platform where developers can showcase their work, connect with potential buyers, and monetize their code. Whether you're a freelancer with a unique tool or a seasoned developer offering comprehensive software solutions, SoftFast provides the tools and visibility needed to turn your projects into profitable ventures.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };