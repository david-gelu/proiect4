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
    text: 'linkedin.com/in/gelu-fanel-david/',
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
  'Shad-cn',
  'Tailwind',
  'Styled-components',
  'Javascript',
  'React',
  'React-query',
  'Typescript',
  'NodeJs',
  'Express',
  'NextJs',
  'Prisma',
  'NextAuth',
  'MongoDB',
  'GitHub / Gitlab',
]

export const education = [
  'Bachelor\'s Degree – Marketing, Faculty of Economic Sciences and Business Administration (2022 – 2025)',
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
      'Developed and maintained a real-time analytics dashboard using React, TypeScript, Node.js, and MongoDB, serving enterprise clients across multiple regions.',
      'Built and maintained a library of reusable UI components used across the platform, reducing development time and improving consistency.',
      'Optimized rendering performance and front-end load times, contributing to measurably smoother user experience across data-heavy views.',
      'Collaborated closely with UX/UI designers in a cross-functional team of 3–5 developers to deliver responsive, user-focused interfaces.',
      'Worked in an Agile environment using Jira, Confluence, and GitLab — participating in sprint planning and code reviews.',
    ],
  },
  {
    title: 'Head of FASO Department — Moemax Romania (Sep 2018 – Jun 2020)',
    items: [
      'Led daily operations for the department, coordinating a team to meet efficiency and productivity targets.',
      'Streamlined workflows and communication processes, reducing operational bottlenecks.',
      'Managed inventory with precision, including daily stock checks and price verification.',
    ],
  },
  {
    title: 'Sales Assistant — FASO Department, Moemax Romania (Nov 2017 – Sep 2018)',
    items: [
      'Delivered expert customer service, resolving inquiries and improving overall shopping experience.',
      'Maintained product displays for accessibility and customer engagement.',
      'Conducted daily stock checks to ensure accurate inventory levels.',
    ],
  },
  {
    title: 'Sales Assistant — Electrical & Garden Department, Leroy Merlin (Jun 2016 – Nov 2017)',
    items: [
      'Assisted customers with product selection across Electrical and Garden departments.',
      'Maintained product displays and conducted daily stock checks for optimal availability.',
    ],
  },
  {
    title: 'Head of Fresh Department — Billa Romania (Sep 2015 – Jun 2016)',
    items: [
      'Managed department operations, order processing, and inventory to minimize waste and maintain stock levels.',
      'Coordinated cross-team communication for smooth daily workflows.',
    ],
  },
  {
    title: 'Trade Worker — Billa Romania (Apr 2015 – Sep 2015)',
    items: [
      'Stocked shelves, maintained product availability, and provided customer assistance on the floor.',
    ],
  },
]

export interface Certification {
  title: string;
  items: string[];
  icon?: string;
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