export const contacts = [
  {
    icon: 'fa-map-marker',
    text: 'Brasov, Brasov',
  },
  {
    icon: 'fa-mobile',
    text: '+4 0744 598 995',
    url: 'tel:+40744598995'
  },
  {
    icon: 'fa-envelope-o',
    text: 'david.gelu90@gmail.com',
    url: 'mailto:david.gelu90@gmail.com'
  },
  {
    icon: 'fa-linkedin-square',
    text: 'in/gelu-fanel-david/',
    url: 'https://www.linkedin.com/in/gelu-fanel-david/'
  },
  {
    icon: 'fa-link',
    text: 'davidgelu.netlify.app',
    url: 'https://davidgelu.netlify.app'
  },
  {
    icon: 'fa-github',
    text: 'github.com/david-gelu',
    url: 'https://github.com/david-gelu'
  }
]

export const skills = [
  'Html',
  'Css / Scss',
  'Bootstrap',
  'Styled-components',
  'Javascript',
  'React',
  'Typescript',
  'NodeJs',
  'NextJs',
  'MongoDB',
  'GitHub / Gitlab',
]

export const education = [
  'Introduction to MongoDB',
  'Faculty of Economic Sciences and Business Administration - Marketing - 2022 - Present',
  'ItSchool Web Design (Front - end) Cours - ANC accreditation',
  'freeCodeCamp Courses - Online',
  'Udemy Courses - Online',
  'Codecademy Courses - Online',
  'Youtube Videos - Online',
  'National College of Agriculture and Economy Tecuci - 2009',
]

export const personalSkills = [
  { skill: 'Teamworking', icon: 'fa-people-group' },
  { skill: 'Problem-solving', icon: 'fa-triangle-exclamation' },
  { skill: 'Time Management', icon: 'fa-clock' },
]

export const languages = [
  'English - working proficiency',
  'Romanian - native',
]

export const workExperience = [
  {
    title: 'Web Developer - Everseen Limited - 09.2020 - currently',
    items: [
      'Developed reusable components in a Node.js environment using React, TypeScript, SCSS, Bootstrap, Styled Components, MongoDb, ElasticSearch — ensuring cross-browser compatibility and optimal performance.',
      'Collaborated with UX/UI designers to translate design concepts into functional, user-centric interfaces, driving iterative improvements to enhance the overall user experience.',
      'Proficient in Agile methodologies, leveraging Jira and Confluence for efficient project management and collaboration. Skilled in GitLab for version control, ensuring code integrity and seamless team coordination.',
      'Skilled in developing and optimizing scalable interfaces to ensure seamless user experiences and support business growth.',
      'Collaborative team player skilled in driving results through effective communication, problem-solving, and leveraging collective expertise to achieve high-quality outcomes.',
    ],
  },
  {
    title: 'Head of FASO department - Moemax Ro - 09.2018 - 06.2020',
    items: [
      'Optimizing workflows to improve operational efficiency and productivity.',
      'Ensuring seamless coordination and effective communication for smooth operations.',
      'Managing inventory with precision, including daily stock checks and price verification.'
    ],
  },
  {
    title: 'Sales assistant - FASO department - Moemax Ro - 11.2017 - 09.2018',
    items: [
      'Provided expert customer service, assisting with inquiries and enhancing shopping experiences.',
      'Optimized product displays to improve accessibility and boost customer engagement.',
      'Conducted daily stock checks to maintain inventory accuracy and ensure product availability.'
    ]
  },
  {
    title: 'Sales assistant - Electrical and Garden department - Leroy Merlin - 06.2016 - 11.2017',
    items: [
      'Assisted customers by addressing inquiries and recommending suitable products.',
      'Optimized product displays in Electrical and Garden departments to enhance visibility.',
      'Conducted daily stock checks to ensure product availability and maintain optimal levels.'
    ],
  },
  {
    title: 'Head of Fresh department - Billa Roamnia - 09.2015 - 06.2016',
    items: [
      'Optimized department operations for maximum efficiency and effectiveness.',
      'Managed order processing and inventory to maintain stock levels and minimize waste.',
      'Fostered cross-team communication to ensure smooth workflows and collaboration.'
    ],
  },
  {
    title: 'Trade worker - Billa Roamnia - 04.2015 - 09.2015',
    items: [
      'Ensured efficient stocking of shelves, maintained product availability, and provided exceptional customer service through prompt assistance and support.'
    ],
  },
]

export interface Certification {
  title: string;
  items: string[];
  icon?: string; // Optional icon property
}

export const certifications: Certification[] = [
  {
    title: 'MongoDB',
    items: ['Introduction to MongoDB (Date: February - 2024)'],
  },
  {
    title: 'Microsoft',
    items: ['MTA: Introduction to Programming Using HTML and CSS (Date: July - 2021)'],
  },
  {
    title: 'It School',
    items: ['Front-end Web Design Certification : ANC accreditation cod COR 216613 (Date: July 2019 - December 2019)'],
  },
  {
    title: 'freeCodeCamp',
    items: [
      'Responsive Web Design Certification (Date: December 2019)',
      'Front End Libraries Certification ( Date: January 2020)',
      'JavaScript Algorithms and Data Structures Certification (Date: January 2020)',
      'Data Visualization D3.Js Certification (Date: February 2020)',
    ],
  },
  {
    title: 'Udemy',
    items: [
      'Certification of Complete Web Developer Course( Date: February 2020)',
      'Git started with GitHub Certification (Date: February 2020)',
      'Photoshop for Web Design Beginners Certification (Date: February 2020)',
      'Basic of Scrum Certification (Date: February 2020)',
    ],
  },
]