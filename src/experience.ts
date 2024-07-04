import { ExperienceProps } from "./ExperienceListing";

import abnlogo from "./abn_amro_logo.jpeg";
import nslogo from "./nslogo.jpeg";
import hetveerlogo from "./hetveer.jpeg";
import pixelsquarelogo from "./pixelsquarelogo.jpeg";

const RECENT_TILE = "Senior Python Developer, DevOps Engineer";

const EXPERIENCE: ExperienceProps[] = [
  {
    title: RECENT_TILE,
    company: "ABN AMRO",
    location: "Amsterdam, Nederland",
    start_date: "april 2023",
    current_experience: true,
    description: `
        Het ontwikkelen, beheren en ondersteunen van een stuk maatwerksoftware
        voor het beschikbaar stellen en transformeren van data op grootte
        schaal. Hierbij werd gebruik gemaakt van verschillende Azure services
        zoals Databricks, Data Factory en de pipelines. Tevens word ook veel
        DevOps gerelateerd werk verricht: denk hierbij aan het ontwikkelen en
        beheren van CI/CD pipelines en het onderhouden en productie-klaar maken
        van een Azure omgeving.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Azure",
      "DevOps",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
      "Azure Databricks",
      "Azure Functions",
      "Azure Data Factory",
    ],
    company_logo: abnlogo,
  },
  {
    title: RECENT_TILE,
    company: "Het Veer",
    location: "Amsterdam, Nederland",
    start_date: "oktober 2022",
    end_date: "april 2023",
    current_experience: false,
    description: `
        Het ontwikkelen en beheren van een applicatie die voor de real-time aansturing en testen zorgt van meerdere soorten middenspanningsinstallaties.
        Hierbij ligt mijn focus voornamelijk op Python development, te samen met het werk aan DevOps tools zoals Git, Jenkins en verschillende Microsoft Azure services. Tevens verzorg ik de front-end ontwikkeling.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
      "TypeScript",
      "JavaScript",
    ],
    company_logo: hetveerlogo,
  },
  {
    title: RECENT_TILE,
    company: "NS",
    location: "Utrecht, Nederland",
    start_date: "mei 2022",
    end_date: "oktober 2023",
    current_experience: false,
    description: `
        Het werk aan innovatie en uitdagende software development; een beslissingsondersteunende applicatie voor het en real-time inroosteren van spoorweg werkzaamheden. Hierbij ligt mijn focus op Python development in samenwerking met verschillende Microsoft Azure services.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
    ],
    company_logo: nslogo,
  },
  {
    title: "Eigenaar, hoofd ontwikkeling",
    company: "Pixelsquare B.V.",
    location: "Hulst, Nederland",
    start_date: "augustus 2019",
    current_experience: true,
    description: `
        Het werk aan innovatie en uitdagende software development; een beslissingsondersteunende applicatie voor het en real-time inroosteren van spoorweg werkzaamheden. Hierbij ligt mijn focus op Python development in samenwerking met verschillende Microsoft Azure services.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
    ],
    company_logo: pixelsquarelogo,
  },
  {
    title: "Eigenaar, hoofd ontwikkeling",
    company: "BeugelBuddy",
    location: "Hulst, Nederland",
    start_date: "maart 2021",
    current_experience: true,
    description: `
        Het ontwikkelen, beheren en ondersteunen van een automatisatie in de tandheelkunde; dit in de vorm van een softwarepakket wat beschikbaar is op het web en een smartphone of tablet. Hier werk ik voornamelijk met Python (meeste in Flask en Django), Node.js, Elixir, JavaScript en TypeScript, samen met de DevOps en methodologieën die ik bij Pixelsquare ook gebruik.
        Voor de front-end kanten werd er met het React framework gewerkt. Hier specialiseer ik me ook in, maar ben voornamelijk gefocust op het bouwen van back-ends.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "React.js",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
    ],
  },
  {
    title: "Full-stack developer",
    company: "ZorgSaam",
    location: "Terneuzen, Nederland",
    start_date: "juli 2019",
    end_date: "augustus 2019",
    current_experience: false,
    description: `
        Het ontwikkelen, beheren en ondersteunen van een geautomatiseerde database van instructies met versiebeheer; deze gebruikten medewerkers van ZorgSaam voor hun werk. Hier werkte ik ook met Laravel, en dezelfde DevOps en methodologieën als tijdens mijn stageperiode. Tevens werkte ik ook met PostgreSQL en verschillende NoSQL databases.
    `,
    tags: [
      "PHP",
      "Test-driven development",
      "PostgreSQL",
      "NoSQL",
      "Git",
      "Agile",
      "CI/CD",
    ],
  },
  {
    title: "Trainee full-stack developer",
    company: "ZorgSaam",
    location: "Terneuzen, Nederland",
    start_date: "augustus 2018",
    end_date: "januari 2019",
    current_experience: false,
    description: `
        Het ontwikkelen, beheren en ondersteunen van een scholingssysteem; medewerkers van ZorgSaam moesten in een periode een aantal scholingen doen en kregen daar punten voor. Dit moest geautomatiseerd worden. Hier werkte ik met Laravel, een framework gemaakt in PHP. Tevens kwamen MySQL en verschilde DevOps en methodologieën er bij kijken; Git, TDD en CI tools. 
        Dit was één van de projecten die ik daar deed.
    `,
    tags: ["PHP", "Test-driven development", "MySQL", "Git", "Agile", "CI/CD"],
  },
  {
    title: "Trainee full-stack developer",
    company: "Laveto",
    location: "Terneuzen, Nederland",
    start_date: "augustus 2017",
    end_date: "november 2017",
    current_experience: false,
    description: `
        Het ontwikkelen van een kwaliteitsmanagementsysteem voor de interne bedrijfsprocessen te automatiseren en verbeteren. Dit systeem is gemaakt in Laravel, waar ik op voorhand ervaring had opgedaan met een hobbyproject; een deel van een boekhoudsysteem, grotendeels gemaakt in Laravel.
    `,
    tags: ["PHP", "Test-driven development", "Git", "Agile", "CI/CD"],
  },

  {
    title: "Trainee service-support medewerker",
    company: "Scalda",
    location: "Terneuzen, Nederland",
    start_date: "september 2015",
    end_date: "mei 2016",
    current_experience: false,
    description: `
        Het ondersteunen en beheren van ICT-infrastructuur van de studenten, leraren en andere medewerkers van de school. Tevens ben ik in deze periode bezig geweest met een automatisering voor het beheren van donaties aan een goed doel, dit werd gedurende het schooljaar bijgehouden voor verschillende gehouden acties, gemaakt in React.js en Node.js.
    `,
    tags: [
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
      "React",
      "Node.js",
    ],
  },
  {
    title: "Trainee 1ste servicedesk medewerker medewerker",
    company: "OVET B.V.",
    location: "Terneuzen, Nederland",
    start_date: "maart 2015",
    end_date: "juli 2015",
    current_experience: false,
    description: `
        Het beheren van de eerste- en tweedelijns servicedesk. Dit betreft het onderhouden van de ICT-infrastructuur van de medewerkers van het bedrijf. Tevens werd meegedacht over het automatiseren van verschillende bedrijfsprocessen; dit gebeurde in een zelf gemaakt intranet.
    `,
    tags: ["Test-driven development", "Git", "Agile"],
  },

  {
    title: "Trainee service-support medewerker",
    company: "Scalda",
    location: "Terneuzen, Nederland",
    start_date: "september 2013",
    end_date: "juli 2014",
    current_experience: false,
    description: `
        Het ondersteunen en beheren van ICT-infrastructuur van de studenten, leraren en andere medewerkers van de school. In deze periode ben ik bezig geweest met een automatisering van de uitleen van laptops. Hier zaten bepaalde regels aan, waarvan de automatisering voorheen op papier en in een Excel sheet gebeurde. Deze automatisering is gemaakt in .NET en Python.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
    ],
  },

  {
    title: "Trainee service-support medewerker",
    company: "Scalda",
    location: "Terneuzen, Nederland",
    start_date: "januari 2013",
    end_date: "juli 2013",
    current_experience: false,
    description: `
      Het ondersteunen en beheren van ICT-infrastructuur van de studenten, leraren en andere medewerkers van de school. In deze periode ben ik bezig geweest met een automatisering van de uitleen van laptops. Hier zaten bepaalde regels aan, waarvan de automatisering voorheen op papier en in een Excel sheet gebeurde. Deze automatisering is gemaakt in .NET en Python.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
    ],
  },
];

export default EXPERIENCE;