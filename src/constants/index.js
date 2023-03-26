import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  opencv,
  tailwind,
  nodejs,
  firebase,
   figma,
  flutter,
  robopreneur,
  armechatronics,
  jazari,
  joc,
  temi,
  aquaponic,
  gate,
  smartglass,
  threejs,
  tensorflow

} from "../assets";

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
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "AI programmer",
    icon: backend,
  },
  {
    title: "Robotics Developer",
    icon: creator,
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
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Firebase",
    icon: firebase,
  }, 
  
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },

  {
    name: "Python",
    icon: python,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "Tensoflow",
    icon: tensorflow,
  },
  
   
];
const experiences = [
  {
    title: "Software Engineer",
    company_name: "Robopreneur Sdn Bhd",
    icon: robopreneur, iconBg: "#383E56",
    date: "July 2021 - October 2021",
    points: ["Led a team of 2 developers in designing and developing 2 Flutter mobile applications for a project to automate restaurant operations via service robots.", "Developed a Food ordering app for customers to place orders, get e-reciept, and make payments via Temi robot.", "Developed a Kitchen system app for kitchen staffs to manage orders and send robots to tables when orders are completed.", "Started working on the project as a trainee, but took the lead in the development of the apps and led the team to a successful project completion."],
  },
  {
    title: "Software Developer Intern",
    company_name: "AR Mechatronics PLT",
    icon: armechatronics,
    iconBg: "#E6DEDD",
    date: "July 2020 - October 2020",
    points: [
      "Worked with senior developers in the design, development, testing and deployment of 1 Flutter mobile application.",
      "Developed a new mobile app feature (Gate Controller) for the company’s best-selling app which resulted in a 15% increase in overall revenue.",
      "Underwent professional training to gain expertise in Flutter web and mobile app development by completing 15 training sessions."
    ],
  },
  {
    title: "Multimedia & IT Support",
    company_name: "Job on Campus, UTM",
    icon: joc,
    iconBg: "#E6DEDD",
    date: "October 2020 - February 2021",
    points: [
      "Designed posters and banners for events attended by over 1000 students.",
      "Improved faculty website pages using WordPress which increased visitor traffic by 15%."
    ],
  },
  {
    title: "Robotics Instructor",
    company_name: "Jazari Robotics Club, UTM",
    icon: jazari,
    iconBg: "#383E56",
    date: "January 2020 - January 2021",
    points: [
      "Tutored web-based and mobile app development with Flutter and Arduino.",
      "Conducted coding lessons to 15 students aged 10 years old to improve their understanding of programming.",
      "Mentored 15 students in the development of a Bluetooth-controlled robot and supported their participation in a local robotic competition."
    ],
  },

];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [{
  name: "Temi Robot’s Food Ordering App & Kitchen System App", 
  description: "A full-stack Flutter and Firebase application for customers to place orders and make payments through Temi Robots, and a kitchen system app for managing orders and sending robots to tables when orders are completed.", 
  tags: [{ name: "flutter", color: "blue-text-gradient", }, { name: "firebase", color: "orange-text-gradient", }, { name: "restapi", color: "green-text-gradient", },],
  image: temi,
  source_code_link: "https://qayyum1999.github.io/MackD_kiosk_bootleg/",
  points: [
    "Developed Fullstack apps with Flutter and Firebase.",
    "Implemented Firebase as database, cloud function and cloud storage.",
    "Integrated REST APIs for payment gateway with Paynet, and receipt email automation using EmailJS.",
  ],
},
{
  name: "Smart Aquaponic Monitoring App",
  description:
    "A full-stack IoT web app using Flutter and Arduino to monitor water quality parameters and send push notifications based on sensor data.",
  tags: [
    {
      name: "flutter",
      color: "blue-text-gradient",
    },
    {
      name: "arduino",
      color: "green-text-gradient",
    },
    {
      name: "firebase",
      color: "orange-text-gradient",
    },
  ],
  image: aquaponic,
  source_code_link: "https://qayyum1999.github.io/smart_aquaponic/",
  points: [
    "Developed a Fullstack IoT web app using Flutter and Arduino to monitor water quality parameters.",
    "Utilized Firebase as a real-time database to get sensor data and sensor alert using push notifications through the app.",
  ],
},
{
  name: "Gate Controller App",
  description:
    "A residential system app that allows users to remotely control the entrance and exit gates of their location.",
  tags: [
    {
      name: "flutter",
      color: "blue-text-gradient",
    },
    {
      name: "restapi",
      color: "green-text-gradient",
    },
    {
      name: "http",
      color: "pink-text-gradient",
    },
  ],
  image: gate,
  source_code_link: "https://qayyum1999.github.io/myredsgatecontroller.github.io",
  points: [
    "Developed the app's frontend with Flutter and integrated REST API using various HTTP requests to a database.",
    "Created a feature for a residential system app that allows users to remotely control the entrance and exit gates of their location.",
    "Provided users with the ability to remotely control the gates of their residence through the app.",
  ],
},
{
  name: "Smart Glass with AI Assistant for Blind",
  description:
    "A final year project involving the development of a voice assistant that recognizes English and Malay speech and responds to voice commands, an object detection software that can identify indoor and outdoor objects, and a text recognition software that can read English texts for improving readability for the blind.",
  tags: [
 
    {
      name: "python",
      color: "green-text-gradient",
    },
    {
      name: "opencv",
      color: "pink-text-gradient",
    },
    {
      name: "tensorflow",
      color: "yellow-text-gradient",
    },
    {
      name: "AI",
      color: "blue-text-gradient",
    },
    {
      name: "NLP",
      color: "orange-text-gradient",
    },   
  ],
  image: smartglass,
  source_code_link: "https://photos.google.com/share/AF1QipO0NeZ_jtHqRbds4V9tMcp0iAfDIjpW4S6Tow4B-hd9EEcBQkU8u1Xi5zNThVNlaw/photo/AF1QipOP4f5QcDoTWJ6VXY3bWS8o4W2GbROmNeoPdKBv?key=cG5wVnhfWFdHR2xIWXYxZTctVWdzT3EyZmw5TDJB",
  points: [
    "Developed voice assistant that recognizes English and Malay speech and responds to voice commands.",
    "Built object detection software that can identify indoor and outdoor objects.",
    "Built text recognition software that can read English texts for improving readability for the blind.",
  ],
},
];
export { services, technologies, experiences, testimonials, projects };