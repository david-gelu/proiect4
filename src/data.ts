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
  'Bachelor’s Degree – Marketing, Faculty of Economic Sciences and Business Administration (2022 – 2025)',
  'Introduction to MongoDB – 2024',
  'Front-End Web Design Certification (ANC Accredited) – IT School (2019)',
]

export const personalSkills = [
  { skill: 'Problem-solving mindset', icon: 'fa-brain' },
  { skill: 'Clean and maintainable code', icon: 'fa-code' },
  { skill: 'Team collaboration', icon: 'fa-people-group' },
  { skill: 'Adaptability and fast learning', icon: 'fa-bolt' },
  { skill: 'Ownership and responsibility', icon: 'fa-check' },
]

export const languages = [
  'Romanian – Native',
  'English – Professional working proficiency',
]

export const workExperience = [
  {
    title: 'Software Developer — Everseen Limited (Sep 2020 – Present)',
    items: [
      'Developed scalable web applications using React, TypeScript, Node.js, and MongoDB',
      'Built reusable UI components to improve maintainability and development efficiency',
      'Optimized rendering and performance to ensure smooth user experience',
      'Collaborated with UX/UI teams to deliver responsive, user-focused interfaces',
      'Worked in Agile environment using Jira, Confluence, and GitLab',
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
    items: ['Introduction to MongoDB – 2024'],
  },
  {
    title: 'Microsoft',
    items: ['MTA: HTML & CSS – 2021'],
  },
  {
    title: 'freeCodeCamp',
    items: [
      'Responsive Web Design',
      'JavaScript Algorithms and Data Structures',
      'Frontend Libraries',
    ],
  },
]