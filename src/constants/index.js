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
    git,
    figma,
    docker,
    threejs,
    fst,
    logo,
  } from "../assets";
  import IMG from '../assets/IMG.jpg'

  import skillswap from '../assets/skillswap.png'
  import softfast from '../assets/softfast.png'
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
      title: "Bachelor's Degree in Computer Science",
      company_name: "FST TANGER",
      icon: fst,
      iconBg: "#E6DEDD",
      date: "September 2022 - June 2025",
      points: [
        "Built and maintained small to mid-sized web projects, applying foundational knowledge of HTML, CSS, JavaScript, and React.",
        "Worked on academic and personal projects independently and in team settings, gaining experience in project planning and (Git).",
        "Developed responsive websites and gained familiarity with debugging.",
        "Participated in code reviews and practiced collaborative coding, receiving feedback to improve coding practices and project efficiency.",
      ],
    },
    {
      title: "Master's degree in Software Engineering",
      company_name: "SOON",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Feb 2027",
      points: [
        "Specializing in software design, architecture, and development of large-scale systems.",
        "Conducting research on software development methodologies and best practices.",
        "Developing robust, maintainable, and scalable software solutions to meet complex requirements.",
        "Collaborating with academic and industry experts to implement cutting-edge software engineering practices in real-world projects.",
      ],
    },
    {
      title: "First Job as a Full-Stack Developer.",
      company_name: "SOON",
      icon: logo,
      iconBg: "#383E56",
      date: "2027",
      points: [
        "Building and maintaining full-stack applications with a focus on scalability and performance.",
        "Working with cutting-edge technologies to develop high-quality, user-friendly products.",
        "Contributing to team efforts by participating in agile development and sprint planning.",
        "Engaging in client discussions to gather requirements and deliver customized solutions.",
      ],
    },
    {
      title: "Launching my Business.",
      company_name: "Self-Employed",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "One Day",
      points: [
        "Establishing a tech startup to provide innovative web and mobile solutions.",
        "Managing all aspects of the business, including marketing, sales, and product development.",
        "Building a team of talented professionals to create cutting-edge digital products.",
        "Focusing on customer-centric solutions to solve real-world problems.",
      ],
    },
  ];
 
  const testimonials = [
    {
      testimonial:
        "Your testimonials will help me further develop myself. You can send a testimonial on the Contact Us page.",
      name: "Saber Ben Hamda (owner of the website)",
      image: IMG,
    },
  ];
  
  const projects = [
    {
      name: "skillSwap",
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
      image: skillswap,
      source_code_link: "https://github.com/saberBenhamda0/skillSwap",
      live_demo_link:"http://myappsfrontends.s3-website-us-east-1.amazonaws.com/",
    },
    {
      name: "softfast",
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
      image: softfast,
      source_code_link: "https://github.com/saberBenhamda0/softfast",
      live_demo_link:"http://softfast.s3-website-us-east-1.amazonaws.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };