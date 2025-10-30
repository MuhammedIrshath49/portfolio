import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

// import components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
import cv from "../assets/files/resume.pdf";

// import icons
import { FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoMongodb,
  BiLogoPython,
} from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle, BsMoon, BsSun } from "react-icons/bs";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { FaMobileAlt, FaDocker } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  SiRecoil,
  SiKotlin,
  SiExpress,
  SiFlask,
  SiMysql,
  SiFirebase,
  SiGooglecloud,
  SiCisco,
  SiC,
} from "react-icons/si";

//import images
// import images (replace with your own images if available)
const Ataa = "";
const Elzero = "";
const Kasper = "";
const Leon = "";
const SokoNumber = "";
const GlobalShare = "";

// import style
import style from "./App.module.css";
import clsx from "clsx";

const skills = [
  {
    name: "C",
    icon: <SiC size="25px" color="white" />,
    cssName: "c",
  },
  {
    name: "C++",
    icon: <TbBrandCpp size="25px" color="white" />,
    cssName: "cpp",
  },
  {
    name: "Java",
    icon: <BiLogoJava size="25px" color="white" />,
    cssName: "java",
  },
  {
    name: "Python",
    icon: <BiLogoPython size="25px" color="white" />,
    cssName: "python",
  },
  {
    name: "C#",
    icon: <TbBrandCSharp size="25px" color="white" />,
    cssName: "csharp",
  },
  {
    name: "Kotlin",
    icon: <SiKotlin size="25px" color="white" />,
    cssName: "kotlin",
  },
  {
    name: "HTML5",
    icon: <AiFillHtml5 size="25px" color="white" />,
    cssName: "html",
  },
  {
    name: "CSS3",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "css",
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size="25px" color="white" />,
    cssName: "javascript",
  },
  {
    name: "Node.js",
    icon: <BiLogoNodejs size="25px" color="white" />,
    cssName: "nodejs",
  },
  {
    name: "React",
    icon: <FaReact size="25px" color="white" />,
    cssName: "react",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress size="25px" color="white" />,
    cssName: "expressjs",
  },
  {
    name: "Flask",
    icon: <SiFlask size="25px" color="white" />,
    cssName: "flask",
  },
  {
    name: "PHP",
    icon: <BiLogoPhp size="25px" color="white" />,
    cssName: "php",
  },
  {
    name: "MySQL",
    icon: <SiMysql size="25px" color="white" />,
    cssName: "mysql",
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb size="25px" color="white" />,
    cssName: "mongodb",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size="25px" color="white" />,
    cssName: "firebase",
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud size="25px" color="white" />,
    cssName: "googlecloud",
  },
  {
    name: "Git",
    icon: <BsGit size="25px" color="white" />,
    cssName: "git",
  },
  {
    name: "Docker",
    icon: <FaDocker size="25px" color="white" />,
    cssName: "docker",
  },
  {
    name: "Cisco Packet Tracer",
    icon: <SiCisco size="25px" color="white" />,
    cssName: "cisco",
  },
];

const projects = [
  {
    name: "Robotic Car",
    github: "https://github.com/MuhammedIrshath49/INF2004-P5H",
    description:
      "An autonomous robotic car project featuring advanced navigation, obstacle detection, and remote control capabilities. Built with embedded systems and IoT technologies for real-time monitoring and control.",
  },
  {
    name: "HDB Resale Price Analysis",
    github: "https://github.com/Jagatees/hdb_analysis",
    description:
      "A comprehensive data analysis project examining HDB resale prices in Singapore. Features data visualization, predictive modeling, and market trend analysis using machine learning algorithms.",
  },
  {
    name: "WellCalm Mobile Application",
    github: "https://github.com/inf2007/inf2007-group-iTechies-2025-code",
    description:
      "A mental wellness mobile application designed to help users manage stress and anxiety. Features meditation guides, mood tracking, and personalized wellness recommendations.",
  },
  {
    name: "AI Debater",
    frontend: "https://github.com/diniezikryy/sit-chatbot-react",
    backend: "https://github.com/diniezikryy/sit-chatbot-flask",
    description:
      "An intelligent debate system powered by AI that can engage in structured arguments on various topics. Features natural language processing, argument analysis, and real-time debate scoring.",
  },
];

function App() {
  const form = useRef();

  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(function () {
      emailjs
        .sendForm(
          "service_g9xcgsu",
          "template_5aejdk8",
          form.current,
          "McJzJwNXAspLS22Lx"
        )
        .then(() => {
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.message.value = "";
        });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={style.app}>
      {/* Navbar */}
      <div className={style.nav}>
        <a className={style.logo}>
          <FaReact color="var(--primary-main)" size="50px" />
          <h5>muhammed irshath</h5>
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <button className={style["theme-toggle"]} onClick={toggleDarkMode}>
          {darkMode ? (
            <BsSun size="20px" color="var(--primary-main)" />
          ) : (
            <BsMoon size="20px" color="var(--primary-main)" />
          )}
        </button>
        <div className={style["menu-icon"]}>
          <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            htmlFor="checkbox"
            onClick={() => setMenu(!menu)}
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
      {menu === true && (
        <ul className={style.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      {/* Home */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1>HEY, I&apos;M Muhammed Irshath</h1>
          <p>A penultimate software engineering student</p>
          <a
            href={cv}
            download="resume-PDF-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadButton>Download Resume</DownloadButton>
          </a>
        </div>
        <div className={style["scroll-icon"]}>
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
          <a
            className={style.github}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MuhammedIrshath49"
          >
            <AiFillGithub size="30px" color="black" />
          </a>
          <a
            className={style.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/muhammed-irshath/"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
          <a
            className={style.gmail}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:muhammedirshath49@gmail.com?subject=SendMail&body=Description"
          >
            <BiLogoGmail size="30px" color="black" />
          </a>
        </div>
      </div>

      {/* About */}
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title}>About Me</h2>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3>About Me</h3>
              <div>
                <p>
                  I am an <span>Information and Communications Technology</span>{" "}
                  student at the <span>Singapore Institute of Technology</span>.
                </p>

                <p>
                  In the final year of my diploma studies, I interned at{" "}
                  <span>EZ-Link Pte Ltd</span> in Singapore for six months. I
                  was pleased to be provided with opportunities to apply the
                  knowledge gained and practise the technical skills I acquired
                  during my studies to solve real-world problems in the
                  Financial Services sector.
                </p>

                <p>
                  As a <span>Quality Assurance Engineer Intern</span>, I was
                  part of the Business Development team and was responsible for
                  performing terminal certification testing and SAM (Secured
                  Access Module) Key Injection for merchant acquirers to ensure
                  requirements for various terminals are met before they are
                  deployed in service.
                </p>

                <p>
                  My degree studies have provided me with broad proficiency in
                  the use of various programming languages and software
                  development methodologies. I have also developed effective
                  communication skills while delivering presentations to large
                  audiences at university.
                </p>

                <p>
                  I am eager to hear about potential career opportunities, so I
                  would be pleased to chat about job openings in the software
                  engineering domain.
                </p>
              </div>
            </div>
            <div className={style["my-skill"]}>
              <h3>My Skills</h3>
              <div className={style.skills}>
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={`skill${index}`}
                      className={`${style.skill} ${style[skill.cssName]}`}
                    >
                      <div className={style["skill-name"]}>{skill.name}</div>
                      <div className={style["skill-icon"]}>{skill.icon}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="Projects" className={style.projects}>
        <div className={style.container}>
          <h2 className={style.title}>Projects</h2>
          <p>
            Here you will find some of the projects created with each project
            containing its own case study
          </p>
          <div className={style["projects-list"]}>
            {projects.map((project, index) => {
              return (
                <div key={`project${index}`} className={style.project}>
                  <div className={style["project-info"]}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={style["project-buttons"]}>
                      {project.github ? (
                        <IconButton
                          width="200px"
                          height="50px"
                          backgroundColor="black"
                          color="white"
                          link={project.github}
                          icon={<AiFillGithub size="25px" color="white" />}
                        >
                          Repository
                        </IconButton>
                      ) : (
                        <>
                          <IconButton
                            width="120px"
                            height="50px"
                            backgroundColor="var(--primary-main)"
                            color="white"
                            link={project.frontend}
                            icon={<AiFillGithub size="25px" color="white" />}
                          >
                            Frontend
                          </IconButton>
                          <IconButton
                            width="120px"
                            height="50px"
                            backgroundColor="black"
                            color="white"
                            link={project.backend}
                            icon={<AiFillGithub size="25px" color="white" />}
                          >
                            Backend
                          </IconButton>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="Contact" className={style.contact}>
        <div className={style.container}>
          <h2 className={style.title}>Contact</h2>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={clsx({ [style["inactive-form"]]: loading })}
          >
            <InputField
              width="700px"
              height="40px"
              name="name"
              placeholder="Enter Your Name"
              label="Name"
              type="text"
            />
            <InputField
              width="700px"
              height="40px"
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              type="email"
            />
            <TextAreaField
              width="700px"
              height="250px"
              name="message"
              placeholder="Enter Your Message"
              label="Message"
              type="text"
            />
            <SubmitButton
              icon={<RiSendPlaneFill size="20px" color="white" />}
              width="200px"
              height="60px"
              color="white"
              backgroundColor="var(--primary-main)"
            >
              Submit
            </SubmitButton>
            {loading && (
              <div className={style.loader}>
                <Loader />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div>
              <h3>muhammed irshath</h3>
              <p>Software Engineering Student at SIT, Singapore</p>
            </div>
            <div className={style.social}>
              <h3>Social</h3>
              <div className="">
                <a
                  className={style.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/MuhammedIrshath49"
                >
                  <AiFillGithub size="30px" color="white" />
                </a>
                <a
                  className={style.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/muhammed-irshath/"
                >
                  <AiFillLinkedin size="30px" color="white" />
                </a>
                <a
                  className={style.gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:muhammedirshath49@gmail.com?subject=SendMail&body=Description"
                >
                  <BiLogoGmail size="30px" color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className={style["copy-right"]}>
            © Copyright 2025. Made by <span>Muhammed Irshath</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
