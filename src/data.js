
export const professionalProjects = [
  {
    title: "New Computerised Transit System",
    subtitle: "Scala, Play, HTML, CSS, MongoDB, Github",
    description:
      "Building the digital frontend for traders to move goods between Common Transit Convention member countries.",
    image:
      "./ncts5-proj.png",
    link: "https://github.com/hmrc/manage-transit-movements-unloading-frontend",
  },
  {
    title: "One Stop Shop Core",
    subtitle: "Java, Spring Boot, RabbitMQ, MySQL, Docker, Jenkins, Kibana, Elasticsearch",
    description:
      "Built APIs to enable trades of B2C goods between Northern Ireland and EU member states.",
    image:
      "./oss-proj.png",
    link: "https://www.gov.uk/government/publications/eu-e-commerce-package/eu-vat-e-commerce-package",
  },
  {
    title: "Income Tax Subdomain",
    subtitle: "Java, Spring Boot, Gitlab, MongoDB, MySQL, Docker",
    description:
      "Delivered a range of dataset, calculation and functionality APIs to the software industry to enable them to develop accounting software.",
    image:
      "./itsd-proj.png",
    link: "https://developer.service.hmrc.gov.uk/guides/income-tax-mtd-end-to-end-service-guide/#income-tax-making-tax-digital-end-to-end-service-guide",
  }
];

export const practiceProjects = [
  {
    title: "City Driving School",
    subtitle: "NextJS, Tailwind",
    description:
      "Designed and built a Statically Generated (SG) website for a driving instructor based in London.",
    image:
      "./cds-project.png",
    link: "https://github.com/AdnanGondal/city-driving-school",
  },
  {
    title: "Save a Meal",
    subtitle: "React, Tailwind, Node, Express, Postgres",
    description:
      "This project involved all aspects of the software engineering lifecycle; including design, implementation and testing. ",
    image:
      "https://user-images.githubusercontent.com/43793942/140721187-6f044142-ac0b-495d-997e-db9469225a0f.png",
    link: "https://github.com/BledarF/save-a-meal",
  },
  {
    title: "World for Women",
    subtitle: "React, Bootstrap, Node, Express, Postgres",
    description:
      "A dashboard app that uses data from the World Bank. The project involved creating a REST API using Node and Express, to provide data to a React frontend.",
    image:
      "https://github.com/gsinghlak12/worldbank/raw/main/User_Manual_images/01-HomePage.png",
    link: "https://github.com/AdnanGondal/worldbank",
  },
];



export const experiences = [
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQH7y-XevzCvbA/company-logo_200_200/0/1613595886761?e=2159024400&v=beta&t=3QZ1HGtXRIJt_S6kz2OYPznzxVg7eUhEb0r5rypGasQ",
    role: "Software Engineer",
    company: "EY (Ernst & Young)",
    dates: "Jan 2022 - Present",
    location: "London, UK",
    descriptions: [
      "Develop and maintain RESTful APIs for government client with over 90% test coverage using Java 17 and the Spring Boot framework",
      "Working within a microservices architecture comprising over 20 applications, implementing asynchronous messaging with RabbitMQ and using MySQL for data storage",
      "Proficiently work with a Linux operating system, Jenkins for CI/CD pipelines, Docker for containerisation, Kibana for monitoring, Gitlab for source control",
      "Collaborate with the business team and customers to design and create technical specifications, database schemas and activity diagrams for internal and external use",
      "Actively contribute to agile ceremonies, pair programming, code reviews and mentoring junior developers in the team, enabling improved team productivity and code quality"
    ],
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg",
    role: "Software Engineer",
    company: "Sigma Labs",
    dates: "Aug 2021 - Present",
    location: "London, UK",
    descriptions: [
      "Full stack professional software engineering programme; coding individually and as part of team",
      "Server side programming: Creating REST APIs with Node and Express",
      "Frontend: Building professional designs using React and Tailwind. ",
    ],
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQH7y-XevzCvbA/company-logo_200_200/0/1613595886761?e=2159024400&v=beta&t=3QZ1HGtXRIJt_S6kz2OYPznzxVg7eUhEb0r5rypGasQ",
    role: "Coding Instructor",
    company: "Fire Tech",
    dates: "Apr 2019 - Aug 2021",
    location: "Remote, UK",
    descriptions: [
      "Inspired children aged 9-17 to work with technology through the teaching of curricula that focuses on coding, creativity and innovation.",
      "Required excellent communication, high energy and a strong attention to detail to ensure excellent outcomes for the students.",
    ],
  },
];

export const skills = [
  "HTML, CSS and JavaScript",
  "Node and Express",
  "React",
  "Java Spring Boot",
  "Tailwind",
  "Relational Databases (mySQL, Postgres)",
  "Scala Play",
  "Mongo",
  "Git / Github",
];


const webDevSkills = [
  {
    name: "HTML, CSS, JS",
    logo: "./logo/htmlcss.png",
  },
  {
    name: "React",
    logo: "./logo/react.png"
  },
  {
    name: "Typescript",
    logo: "./logo/typescript.png"
  },
  {
    name: "TailwindCSS",
    logo: "./logo/tailwind.svg",
  }
]

const backendSkills = [
  {
    name: "Java",
    logo: "./logo/java.png",
  },
  {
    name: "Spring Boot",
    logo: "./logo/springboot.png"
  },
  {
    name: "MySQL",
    logo: "./logo/mysql.png"
  },
  {
    name: "MongoDB",
    logo: "./logo/mongo.svg"
  }
]

const microserviceSkills = [
  {
    name: "RabbitMQ",
    logo: "./logo/rabbitmq.png"
  },
  {
    name: "Docker",
    logo: "./logo/docker.png"
  },
  {
    name: "Jenkins",
    logo: "./logo/jenkins.png"
  },
  {
    name: "Monitoring (ELK)",
    logo: "./logo/elk.svg"
  }
]

const toolingSKills = [
  {
    name: "Cloud Technologies",
    logo: "./logo/aws.png"
  },
  {
    name: "Unix Shell",
    logo: "./logo/unix.jpeg"
  },
  {
    name: "Git / Github",
    logo: "./logo/git.png"
  },
  {
    name: "Jira and Confluence",
    logo: "./logo/atlassian.png"
  }
]
export const skillsData = [
  ...webDevSkills,
  ...backendSkills,
  ...microserviceSkills,
  ...toolingSKills
];
