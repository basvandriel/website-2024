import abnlogo from "./abn_amro_logo.jpeg";
import nslogo from "./nslogo.jpeg";
import hetveerlogo from "./hetveer.jpeg";
import pixelsquarelogo from "./pixelsquarelogo.jpeg";
import TranslateableExperience from "./translateable_experience";

const RECENT_TILE = "Senior Python Developer, DevOps Engineer";

const EXPERIENCE: TranslateableExperience[] = [
  {
      title: RECENT_TILE,
      company: "ABN AMRO",
      company_city_key: 'amsterdam',
      company_country_key: 'netherlands',
      start: new Date(2023, 4),
      description_key: 'work_experience.abn_amro',
      tags: [
          "Python",
          "Data Science",
          "PostgreSQL",
          "NoSQL",
          "Test-driven development",
          "Automatic Testing",
          "Azure",
          "Threat Modeling",
          "DevOps",
          "Git",
          "Agile",
          "CI/CD",
          "Azure DevOps",
          "Azure Cloud",
          "Azure Databricks",
          "Apache Spark",
          "Azure Functions",
          "Azure Data Factory",
          "BitBucket",
          "JIRA",
          "RBAC",
          "OAUTH2",
          "IAM",
          "Apache Airflow",
          "Docker",
          "Kubernetes",
          "Containerisation",
      ],
      company_logo: abnlogo,
  },
  {
    title: RECENT_TILE,
    company: "Het Veer",
    company_city_key: 'gent',
    company_country_key: 'belgium',
    start: new Date(2022, 10),
    end: new Date(2023, 4),
    description_key: 'work_experience.het_veer',
    tags: [
      "Python",
      "Data Science",
      "FastAPI",
      "PostgreSQL",
      "NoSQL",
      "React",
      "Test-driven development",
      "Automatic Testing",
      "Embedded software development",
      "Git",
      "Threat Modeling",
      "Agile",
      "CI/CD",
      "Azure DevOps",
      "Azure Cloud",
      "Jenkins",
      "TypeScript",
      "JavaScript",
      "RBAC",
      "OAUTH2",
      "IAM",
      "Docker",
      "Kubernetes",
      "Containerisation",
    ],
    company_logo: hetveerlogo,
  },

  {
    title: RECENT_TILE,
    company: "NS",
    company_city_key: 'utrecht',
    company_country_key: 'netherlands',
    start: new Date(2022, 5),
    end: new Date(2023, 10),
    description_key: 'work_experience.ns',
    tags: [
      "Python",
      "Data Science",
      "FastAPI",
      "PostgreSQL",
      "NoSQL",
      "React",
      "JavaScript",
      "TypeScript",
      "Test-driven development",
      "Embedded software development",
      "Automatic Testing",
      "Threat Modeling",
      "RBAC",
      "OAUTH2",
      "IAM",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
      "Azure Cloud",
      "Docker",
      "Kubernetes",
      "Containerisation",
    ],
    company_logo: nslogo,
  },
  {
    title: "Eigenaar, hoofd ontwikkeling",
    company: "Pixelsquare B.V.",
    company_city_key: "hulst",
    company_country_key: 'netherlands',
    start: new Date(2019, 8),
    description_key: 'work_experience.pixelsquare',
    // Python, Flask, Django,
    tags: [
      "Python",
      "Flask",
      "Django",
      "C#",
      ".NET",
      ".NET Entity Framework",
      "Npgsql",
      "Xunit",
      "PostgreSQL",
      "MySQL",
      "JavaScript",
      "TypeScript",
      "Test-driven development",
      "Automatic Testing",
      "Embedded software development",
      "React",
      "Vue",
      "Backstage",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Containerisation",
    ],
    company_logo: pixelsquarelogo,
  },
  {
      title: "Eigenaar, hoofd ontwikkeling",
      company: "BeugelBuddy",
      company_city_key: 'hulst',
      company_country_key: 'netherlands',
      start: new Date(2021, 3),
      description_key: 'work_experience.beugelbuddy',
      tags: [
          "Python",
          "Data Science",
          "Flask",
          "Django",
          "FastAPI",
          "Node.js",
          "Exixir",
          "Test-driven development",
          "Automatic testing",
          "Embedded software development",
          "React.js",
          "JavaScript",
          "TypeScript",
          "Git",
          "Agile",
          "CI/CD",
          "WordPress",
          "AWS Serverless",
          "Azure DevOps",
          "Docker",
          "Kubernetes",
          "Containerisation",
          "Agile",
        ],
      company_logo: ""
  },
  {
    title: "Full-stack developer",
    company: "ZorgSaam",
    company_city_key: 'terneuzen',
    company_country_key: 'netherlands',
    start: new Date(2019, 7),
    end: new Date(2019, 8),
    description_key: 'work_experience.zorgsaam_fullstack',
    tags: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      "Test-driven development",
      "Automatic Testing",
      "PostgreSQL",
      "MySQL",
      "NoSQL",
      "WordPress",
      "Git",
      "BitBucket",
      "JIRA",
      "Agile",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Containerisation",
    ],
  },
  {
    title: "Trainee full-stack developer",
    company: "ZorgSaam",
    company_city_key: "terneuzen",
    company_country_key: 'netherlands',
    start: new Date(2018, 8),
    end: new Date(2019, 1),
    description_key: 'work_experience.zorgsaam_trainee',
    tags: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      "Test-driven development",
      "Automatic Testing",
      "PostgreSQL",
      "MySQL",
      "NoSQL",
      "WordPress",
      "Git",
      "Agile",
      "BitBucket",
      "JIRA",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Containerisation",
    ],
  },
  {
    title: "Trainee full-stack developer",
    company: "Laveto",
    company_city_key: 'terneuzen',
    company_country_key: 'netherlands',
    start: new Date(2017, 8),
    end: new Date(2017, 11),
    description_key: 'work_experience.laveto',
    tags: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "Test-driven development",
      "Automatic Testing",
      "Git",
      "Agile",
      "CI/CD",
      "PostgreSQL",
      "MySQL",
      "Agile",
    ],
  },

  {
    title: "Trainee service-support medewerker",
    company: "Scalda",
    company_city_key: 'terneuzen',
    company_country_key: 'netherlands',
    start: new Date(2015, 9),
    end: new Date(2016, 5),
    description_key: 'work_experience.scalda_2015',
    tags: [
      "Python",
      "C#",
      ".NET",
      ".NET Entity Framework",
      "Npgsql",
      "PostgreSQL",
      "MySQL",
      "Node.JS",
      "Test-driven development",
      "Automatic Testing",
      "JavaScript",
      "TypeScript",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
    ],
  },
  {
    title: "Trainee 1ste servicedesk medewerker medewerker",
    company: "OVET B.V.",
    company_city_key: 'terneuzen',
    company_country_key: 'netherlands',
    // location: "Terneuzen, Nederland",
    start: new Date(2015, 3),
    end: new Date(2015, 7),
    description_key: 'work_experience.ovet',
    tags: [
      "IT Support",
      "Test-driven development",
      "Infrastructure Management",
      "Automatic Testing",
      "Git",
      "Agile",
    ],
  },

  {
    title: "Trainee service-support medewerker",
    company: "Scalda",
    company_city_key: 'terneuzen',
    company_country_key: 'netherlands',
    // location: "Terneuzen, Nederland",
    start: new Date(2013, 9),
    end: new Date(2014, 7),
    description_key: 'work_experience.scalda_2013_2014',
    tags: [
      "Python",
      "C#",
      ".NET",
      ".NET Entity Framework",
      "Npgsql",
      "PostgreSQL",
      "MySQL",
      "Test-driven development",
      "Automatic Testing",
      "JavaScript",
      "TypeScript",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
    ],
  },

  {
      title: "Trainee service-support medewerker",
      company: "Scalda",
      company_city_key: "terneuzen",
      start: new Date(2013, 1),
      end: new Date(2013, 7),
      description_key: 'work_experience.scalda_2013',
      tags: [
          "Python",
          "C#",
          ".NET",
          ".NET Entity Framework",
          "Npgsql",
          "Xunit",
          "PostgreSQL",
          "MySQL",
          "JavaScript",
          "TypeScript",
          "React",
          "Vue",
          "Test-driven development",
          "Automatic Testing",
          "Embedded software development",
          "Git",
          "Agile",
          "CI/CD",
      ],
      company_country_key: "netherlands"
  },
];

export default EXPERIENCE;
