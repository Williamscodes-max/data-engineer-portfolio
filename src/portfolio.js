/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/spalshscreen.json"; // Rename to your file name for custom animation

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
  username: "Zainab Olubuade",
  title: "Hi there, I'm Zainab",
  subTitle: emoji(
    "Data Engineer passionate about building scalable data pipelines, transforming raw data into actionable insights, and designing efficient data systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Temitope-Zee",
  linkedin: "https://www.linkedin.com/in/olubuade-zainab-02a602193/",
  gmail: "olubuadezainab05@gmail.com",
  // facebook: "https://www.facebook.com/zainab.olubuade",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ENGINEER WHO BUILDS DATA SYSTEMS AND PIPELINES",
  skills: [
    "⚡ Build scalable ETL/ELT pipelines",
    "⚡ Design and optimize databases and data warehouses",
    "⚡ Work with large datasets and automate data workflows",
    "⚡ Transform raw data into analytics-ready formats"
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {
      skillName: "Apache Airflow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ALX Africa",
      logo: require("./assets/images/alx2.png"),
      subHeader: "Data Engineering Program",
      duration: "September 2025 - September 2026",
      desc: ""
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Computing",
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
      role: "Data Engineer",
      company: "",
      companylogo: require("./assets/images/alx2.png"),
      date: "June 2024 – Present",
      desc: "Designed and maintained scalable data pipelines for collecting, transforming, and processing structured data. Worked with SQL, Python, and cloud-based tools to support analytics, reporting, and business intelligence solutions. Collaborated with cross-functional teams to improve data quality, automate workflows, and optimize database performance."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "data Engineer Intern",
      company: "",
      companylogo: require("./assets/images/alx3.jpeg"),
      date: "May 2024 – May 2025",
      desc: "Assisted in building ETL workflows and data processing scripts for internal reporting systems. Supported senior engineers in cleaning, validating, and organizing large datasets for analysis. Gained hands-on experience with SQL databases, data modeling, and workflow automation tools."
    },
    {
      role: "Data Analyst Intern",
      company: "",
      companylogo: require("./assets/images/alx4.jpeg"),
      date: "Jan 2023 – Sep 2023",
      desc: "Collected, analyzed, and visualized data to support business decision-making and reporting. Created dashboards and reports using spreadsheet and BI tools while identifying trends and insights from operational datasets. Assisted with data cleaning, documentation, and performance tracking tasks.."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Data Projects",
  subtitle: "DATA PIPELINES, SYSTEMS AND ANALYTICS PROJECTS",

  projects: [
    {
      image: require("./assets/images/pipeline.webp"),
      projectName: "ETL Pipeline System",
      projectDesc:
        "Built an automated ETL pipeline to extract data from a public API, transform it using Python, and load it into PostgreSQL for analytics.",
      footerLink: [
        {
          name: "View Code",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/datawarehouse.png"),
      projectName: "Data Warehouse Design",
      projectDesc:
        "Designed a scalable data warehouse with fact and dimension tables to support business intelligence queries and reporting.",
      footerLink: [
        {
          name: "View Code",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/dashboard.png"),
      projectName: "Analytics Dashboard",
      projectDesc:
        "Developed a dashboard to visualize key metrics and trends from processed datasets using modern frontend tools.",
      footerLink: [
        {
          name: "View Live",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, achievements, and professional milestones that reflect my growth in data engineering and analytics.",
  achievementsCards: [
    {
      title: "ALX Data Analyst Program",
      subtitle: "Data Analyst Certification",
      image: require("./assets/images/dataanalytic.jpeg"),
      imageAlt: "ALX Data Analyst Program Logo",
      footerLink: [
        {
          name: "Certification"
          // url: ""
        },
        {
          name: "Link",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Github",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    // {
    //   title: " ALX Professional Development Skills",
    //   subtitle:
    //     "Professional Skills Development",
    //   image: require("./assets/images/professional division.jpeg"),
    //   imageAlt: "ALX Professional Development Skills Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    {
      title: "ALX Python Training",
      subtitle: "Python Programming Certification",
      image: require("./assets/images/pythontraining.jpeg"),
      imageAlt: "Python Training Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Project Link",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  title: "TALKS",
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
  number: "+2348077070982",
  email_address: "olubuadezainab05@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
