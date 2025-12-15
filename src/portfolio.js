/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Siddhi Shah",
  title: "Hey, I'm Siddhi",
  subTitle: emoji(
    "Results-driven Software Developer with 5+ years of experience building secure, scalable applications and microservices using C#, Java, .NET, and AWS.Experienced Software Developer skilled in full-stack development, system design, and cloud-native architectures. Motivated to expand expertise in AI while contributing to innovative and high-performance engineering teams."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JBWxumixUP97ttTeszthKMa3tA5zJQ-O/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/sshah94/",
  gmail: "siddhi117@gmail.com",
    facebook: "https://www.facebook.com/siddhi.shah.336",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
    subTitle: "A FULL-STACK DEVELOPER FUELED BY CURIOSITY AND ALWAYS EAGER TO EXPERIMENT WITH EMERGING TECH.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
      emoji("⚡ Build microservices for a backend web and applications."),
    emoji(
      "⚡ Architect and manage scalable cloud infrastructure utilizing services like AWS Lambda, Docker, and Kubernetes for high availability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kent State Universit",
      logo: require("./assets/images/KSU.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2017 - Augusr 2018",
      desc: "Related Coursework: Big Data Analytics, Internet of Things, Parallel and Distributed Computing, Cloud Application Design, Multicore Computing, Advanced Database System Design, Software Testing Methodologies, Parallel and Distributed Algorithms, Software Engineering Methodologies, Software Systems Requirements and Interaction Design",
    },
    {
      schoolName: "Gujarat Technological University",
      logo: require("./assets/images/gtu_1.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "August 2011 - June 2015",
      desc: "Related Coursework:  Computer Architecture, Operating Systems, Database Management Systems (DBMS), Data Structures and Algorithms (DSA), Computer Networks, Data and File Structure, Web Application Development, Advance Java Technology, Theory Of Computation, Information Security",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer II",
      company: "United Wholesale Mortgage",
      companylogo: require("./assets/images/UWM.jfif"),
      date: "July 2023 – Nov 2025",
          desc: "At UWM, I develop and optimize microservices and performance-monitoring solutions that improve scalability, reliability, and system throughput. My work focuses on C#, .NET Core, Kafka, and Azure-based integrations, along with enhancing application security and automation.",
      descBullets: [
        "Tech Stack: C#, .NET Core, Kafka, Azure CosmosDB, Redis, Dynatrace, Docker, xUnit, React, AWS"
      ]
    },
    {
      role: "Software Developer",
      company: "Hyland Software Inc.",
      companylogo: require("./assets/images/hylandsite.png"),
      date: "August 2022 – May 2023",
        desc: "At Hyland, I built and enhanced RESTful APIs and authentication frameworks for the Hyland Experience Platform (HxP), improving access control and CI/CD reliability. My contributions streamlined cross-service communication and strengthened cloud-based workflows.",
      descBullets: [
            "Tech Stack: C#, .NET Core, PostgreSQL, AWS SQS/SNS, Git, Bitbucket, CI/CD Pipelines"
      ]  
    },
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services Limited",
      companylogo: require("./assets/images/tcs_2.webp"),
      date: "July 2019 – July 2022",
        desc: "At TCS, I worked as a Full Stack Developer, primarily focusing on backend development using Java and Spring Boot to build scalable enterprise applications for the aviation domain. I contributed to digitizing legacy paper-based workflows into web-based solutions. For another project I have developed an AWS QuickSight dashboard to monitor global employee compliance (e.g., YubiKey login adoption), improving transparency and reducing reporting costs by 50%.",
      descBullets: [
          "Tech Stack: Java, Spring Boot, Spring MVC, REST APIs, Angular, HTML, CSS, JavaScript, PostgreSQL, AWS QuickSight, JUnit, Git, Rally (Agile/Scrum)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "AWS Certified Cloud Practitioner with hands-on knowledge of core AWS services and cloud fundamentals.",
      image: require("./assets/images/cloud_prac.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certificate Credential",
          url: "https://www.credly.com/badges/a1c8c52e-615f-4139-acd6-ba2ab8ea0b7f/linked_in_profile"
        }
      ]
    },
    {
      title: "AWS Certified Developer Associate",
      subtitle:
        "AWS Certified Developer – Associate with expertise in building, deploying, and debugging cloud-native applications on AWS.",
      image: require("./assets/images/dev_assoc.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate Credential",
          url: "https://www.credly.com/badges/a308aab2-33cf-4a13-b259-ae3319d0042e/linked_in_profile"
        }
      ]
    },

    {
      title: "AI Appreciate Badge - AI FROM ALL",
        subtitle: "Earned the AI Appreciate Badge – AI for All, demonstrating foundational understanding of AI concepts, ethics, and real-world applications.",
      image: require("./assets/images/Appreciate_badge.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
            name: "Certificate Credential",
            url: "https://ai-for-all.in/#/badge?id=U2FsdGVkX19evnpgaXJlTRtjMDlgDGdsZ9wRP1p1L2u3SCviMe1Q2u3A4l"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "LET'S CHAT",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(330)475-6818",
  email_address: "siddhi117@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
