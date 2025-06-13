

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/images/initial.gif";

 const splashScreen = { 
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};


const illustration = {
  animated: true 
};

const greeting = {
  username: "Juhi Lasod",
  title: "Hi, I'm Juhi",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "",
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/juhilasod",
  linkedin: "https://www.linkedin.com/in/juhi-lasod-bb7295257",
  gmail: "juhilasod29@gmail.com",
  
  display: true
};


const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Build robust, scalable, and secure backend architectures to power seamless functionality and data flow in your web applications.")
  
  ],

  
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongo-db",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git-hub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "c language",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "devicon-vercel-original"
    },        
    {
      skillName: "VS Code",
      fontAwesomeClassname: "fas fa-code"
    },
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Banasthali University",
      logo: require("./assets/images/bv.jfif"),
      subHeader: "Master in Computer Application",
      duration: "July 2024 - May 2026",
      desc: "Participated in various hackathons organised by Banasthali Vidhyapith",
      descBullets: ["Shortlisted in top 30 teams in Hackcelestia in which over 250 teams participated PAN India."]
    },
    {
      schoolName: "Vikram University",
      logo: require("./assets/images/vku.png"),
      subHeader: "Bachelor in Computer Application",
      duration: "July 2021 - May 2024",
      desc: "Ranked no 1 in the college with a cgpa of 8.5 .",
      descBullets: ["Served as President of Student council of Computer."]
    }
  ]
};


const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "50%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  
};



const openSource = {
  showGithubProfile: "true",
  display: true 
};


const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/rakshak.png"),
      projectName: "RAKSHAK",
      projectDesc: "RAKSHAK is an emergency SOS website that sends instant alerts with your live location at the click of a button. The platform features secure JWT authentication and email notifications for added safety. Additionally, it includes a donation system to support those in crisis, integrating live location tracking and secure payments for seamless emergency response and community aid. ",
      footerLink: [
        // {
        //   name: "Visit Website",
        // },
        {
          name: "Visit git",
          url: "https://github.com/JuhiLasod/RAKSHAK"
        }
      ]
    },
    {
      image: require("./assets/images/login.png"),
      projectName: "Sign in/Sign up",
      projectDesc: "This is a fully functional web application featuring secure user authentication. It supports user registration, login, password reset via email with OTP verification, and persistent user data storage. The system ensures a seamless and secure experience for both new and returning users. All sensitive operations are backed with email notifications and encrypted data handling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://login-page-7.onrender.com/"
        },
        {
          name: "Visit git",
          url: "https://github.com/JuhiLasod/Login-Page"
        }
      ]
    },
    {
      image: require("./assets/images/npm.png"),
      projectName: "npm package",
      projectDesc: "Released a light-weight and customizable npm package that offers a sleek, beautifully animated button component with Smooth animations, Hover effects, Easy to use and style, Lightweight and minimal.Responsive by design, these buttons adapt flawlessly across all devices. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.npmjs.com/package/button-by-juhi-lasod"
        },
        {
          name: "Visit git",
          url: "https://github.com/JuhiLasod/button-by-juhi-lasod"
        }
      ]
    }
  ],
  display: true 
};



const achievementSection = {
};


const blogSection = { 
};


const talkSection = {
  title: "ACHIEVEMENTS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE."
  ),

  talks: [
    {
      title: "State level debater",
      subtitle: "An active member of Youth Committee, Neemuch",
     }
  ],
  display: true 
};


const podcastSection = {
};



// Resume Section
const resumeSection = {
//   title: "Resume",
//   subtitle: "Feel free to download my resume",

  
//   display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "juhilasod29@gmail.com"
};

// Twitter Section

const twitterDetails = {
  };

const isHireable = true; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
