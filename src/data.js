// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update the site. Nothing else needs touching
// for content changes.
// Empty link strings ('') render as dimmed "coming soon" buttons.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Akshat Shukla',
  roles: ['Full-Stack Developer', 'Java Developer', 'AI / ML Builder'],
  pitch:
    'B.Tech IT student who ships full-stack products, builds backend services, and trains ML models. I like turning messy data and vague ideas into things people can actually use.',
  email: 'akshatshukla0106@gmail.com',
  phone: '+91-9336672675',
  location: 'Pune, India',
  resume: '/Akshat_Shukla_Resume_MERN.pdf',
  photo: '/photo.jpeg', // drop your picture at public/photo.jpg
  links: {
    github: 'https://github.com/AKSHAT2801-PRO',
    linkedin: 'https://www.linkedin.com/in/akshatshukla07',
    leetcode: 'https://leetcode.com/u/me_Akshat_Shukla/',
  },
}

export const stats = [
  { value: 8.82, decimals: 2, suffix: '', label: 'CGPA, B.Tech IT' },
  { value: 80.8, decimals: 1, suffix: '', label: '12th' },
  { value: 94.2, decimals: 1, suffix: '', label: 'JEE MAINS 2024' },
  { value: 96.6, decimals: 1, suffix: '', label: 'MHTCET PCM 2024' },
]

export const education = [
  {
    school: 'D Y Patil College of Engineering, Pune',
    degree: 'B.Tech in Information Technology',
    period: 'Sep 2024 - Present',
    score: 'CGPA 8.82',
  },
  {
    school: 'Om Public School, Jaunpur',
    degree: 'CBSE Class XII',
    period: '2024',
    score: '80.8%',
  },
  {
    school: "St. Xavier's School, Jaunpur",
    degree: 'CBSE Class X',
    period: '2022',
    score: '88.8%',
  },
]

export const experience = [
  {
    title: 'Technical Lead',
    org: 'Neura AI Club, D Y Patil College of Engineering',
    orgLink: 'https://neura-ai-club-dypcoe.vercel.app',
    period: 'Present',
    points: [
      'Technical Lead of the college AI club, guiding members on web and AI projects.',
      "Building and maintaining the club's official website.",
    ],
  },
  {
    title: 'Freelance Full-Stack Developer',
    org: 'madeyoulookbysamiksha.in',
    orgLink: 'https://madeyoulookbysamiksha.in',
    period: 'Freelance',
    points: [
      'Designed, built and deployed a live client website end to end, including custom domain setup.',
      'Delivered a responsive, mobile-friendly UI from requirements to production.',
    ],
  },
]

export const projects = [
  {
    id: '01',
    title: 'AgroW',
    subtitle: 'Hyperlocal Farming Community Platform',
    domain: 'MERN',
    blurb:
      'A MERN platform that connects farmers with agricultural experts and service providers.',
    points: [
      'REST APIs for authentication, communities, marketplace and discussion forums, built with MVC architecture.',
      'Clerk authentication for secure user management.',
      'Gemini API integration for multilingual AI assistance.',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Clerk', 'Gemini API'],
    live: 'https://agro-w-frontend.vercel.app/',
    repo: '',
  },
  {
    id: '02',
    title: 'Horizon',
    subtitle: 'Meteor Trajectory Analysis & Visualization',
    domain: 'Full-Stack + Data',
    blurb:
      'A scientific visualization platform processing 50,263 real meteor observations from the Global Meteor Network.',
    points: [
      'Searchable event catalogues, orbital comparison dashboards, radiant sky maps and velocity-time charts.',
      'Monte Carlo simulation to estimate uncertainty in meteor velocity and orbital parameters.',
    ],
    tags: ['Next.js', 'React', 'Three.js', 'FastAPI', 'Python'],
    live: 'https://eventhorizonfrontend.vercel.app/',
    repo: '',
  },
  {
    id: '03',
    title: 'MPLADS Risk Tracker',
    subtitle: 'AI-Powered Scheme Monitoring Platform',
    domain: 'AI / ML',
    blurb:
      'An ML platform that analyzes MPLADS projects to flag anomalies, delays and cost inefficiencies.',
    points: [
      'Engineered features from project cost, fund utilization, timelines and attributes.',
      'Isolation Forest anomaly detection with a composite 0-100 project risk score.',
      'TF-IDF similarity to detect potentially duplicate project descriptions, served via FastAPI.',
    ],
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'Isolation Forest', 'TF-IDF'],
    live: '',
    repo: 'https://github.com/AKSHAT2801-PRO/MPLAD-WORKS-TRACKER',
  },
]

export const skillGroups = [
  {
    title: 'MERN / Web',
    items: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'JWT Auth',
      'MVC',
      'HTML5 / CSS3',
      'Three.js',
    ],
  },
  {
    title: 'Java / Backend',
    items: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'PostgreSQL', 'SQLite', 'OOP', 'DBMS'],
  },
  {
    title: 'AI / ML',
    items: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Feature Engineering',
      'Anomaly Detection',
      'TF-IDF',
      'Monte Carlo Simulation',
      'FastAPI',
    ],
  },
  {
    title: 'Core CS & Tools',
    items: [
      'C++',
      'JavaScript',
      'TypeScript',
      'SQL',
      'DSA',
      'Operating Systems',
      'Computer Networks',
      'Git / GitHub',
      'Postman',
    ],
  },
]

// devicon slug -> logo. `invert: true` is for logos that are black and would
// vanish on the dark background.
export const techStack = [
  { name: 'React', slug: 'react', cat: 'Frontend' },
  { name: 'Next.js', slug: 'nextjs', cat: 'Frontend', invert: true },
  { name: 'JavaScript', slug: 'javascript', cat: 'Frontend' },
  { name: 'TypeScript', slug: 'typescript', cat: 'Frontend' },
  { name: 'HTML5', slug: 'html5', cat: 'Frontend' },
  { name: 'CSS3', slug: 'css3', cat: 'Frontend' },
  { name: 'Three.js', slug: 'threejs', cat: 'Frontend', invert: true },
  { name: 'Node.js', slug: 'nodejs', cat: 'Backend' },
  { name: 'Express', slug: 'express', cat: 'Backend', invert: true },
  { name: 'Java', slug: 'java', cat: 'Backend' },
  { name: 'Spring Boot', slug: 'spring', cat: 'Backend' },
  { name: 'Hibernate', slug: 'hibernate', cat: 'Backend' },
  { name: 'FastAPI', slug: 'fastapi', cat: 'Backend' },
  { name: 'MongoDB', slug: 'mongodb', cat: 'Database' },
  { name: 'MySQL', slug: 'mysql', cat: 'Database' },
  { name: 'PostgreSQL', slug: 'postgresql', cat: 'Database' },
  { name: 'SQLite', slug: 'sqlite', cat: 'Database' },
  { name: 'Python', slug: 'python', cat: 'AI / ML' },
  { name: 'Scikit-learn', slug: 'scikitlearn', cat: 'AI / ML' },
  { name: 'Pandas', slug: 'pandas', cat: 'AI / ML', invert: true },
  { name: 'NumPy', slug: 'numpy', cat: 'AI / ML' },
  { name: 'C++', slug: 'cplusplus', cat: 'Tools' },
  { name: 'Git', slug: 'git', cat: 'Tools' },
  { name: 'GitHub', slug: 'github', cat: 'Tools', invert: true },
  { name: 'Postman', slug: 'postman', cat: 'Tools' },
]

export const techCategories = ['All', 'Frontend', 'Backend', 'Database', 'AI / ML', 'Tools']

export const cocurricular = [
  {
    tag: 'LEADERSHIP',
    title: 'Technical Lead, Neura AI Club',
    text: "Leading the technical side of the college's AI club and building its website.",
  },
  {
    tag: 'HACKATHONS',
    title: 'IIT Mandi Hackathon - Finalist',
    text: 'Qualified for the final round. Also took part in multiple national-level hackathons building software solutions in teams.',
  },
  {
    tag: 'PROBLEM SOLVING',
    title: '300+ DSA problems',
    text: 'Solved across LeetCode and GeeksforGeeks.',
  },
  {
    tag: 'ASSESSMENT',
    title: 'TCS iON NQT (IT) - 78.99%',
    text: '100% in the Programming Hands-On assessment (Python and C++).',
  },
  {
    tag: 'CERTIFICATIONS',
    title: 'Full Stack Web Development & Data Science',
    text: 'Full Stack Web Development (Jyesta) and Data Science (Code With Harry).',
  },
]

// Edit this list to match what you are actually learning right now.
export const learning = [
  { title: 'Spring Boot in depth', note: 'Layered services, security and testing' },
  // { title: 'System design fundamentals', note: 'Scaling, caching and database design' },
  // { title: 'Docker & CI/CD', note: 'Shipping projects with repeatable deploys' },
  { title: 'Applied machine learning', note: 'Beyond notebooks: serving and evaluating models' },
]

export const marquee = [
  'REACT',
  'NODE.JS',
  'MONGODB',
  'EXPRESS',
  'JAVA',
  'SPRING BOOT',
  'PYTHON',
  'FASTAPI',
  'SCIKIT-LEARN',
  'NEXT.JS',
  'THREE.JS',
]
