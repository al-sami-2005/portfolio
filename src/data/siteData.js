/* ═══════════════════════════════════════════════════
   DEFAULT SITE DATA — single source of truth
   Every section's hardcoded content lives here.
   The admin panel edits this via SiteDataContext.
═══════════════════════════════════════════════════ */

const defaultSiteData = {

  /* ── Header ── */
  header: {
    logo: 'MS',
    navLinks: ['about', 'experience', 'education', 'skills', 'projects'],
    ctaText: 'Contact',
  },

  /* ── Hero ── */
  hero: {
    firstName: 'Al',
    lastName: 'Sami',
    photo: '/hero-photo.png',
    eyebrow: 'Welcome to my portfolio',
    badgeText: 'Available for hire',
    roles: [
      'Machine Learning Engineer',
      'Software Developer',
      'Mobile App Developer',
      'AI & Robotics Enthusiast',
      'Full Stack Builder',
    ],
    stats: [
      { num: '3+',  label: 'Years Coding' },
      { num: '15+', label: 'Projects Built' },
      { num: '3',   label: 'Publications' },
      { num: '∞',   label: 'Coffees' },
    ],
    ctaButtons: [
      { label: 'View Projects', scrollTo: 'projects' },
      { label: 'Publications', scrollTo: 'publications' },
      { label: 'Contact', scrollTo: 'contact' },
    ],
    navPills: ['about','experience','education','skills','projects','publications'],
  },

  /* ── About ── */
  about: {
    sectionLabel: 'About Me',
    title: 'Here is a',
    titleAccent: 'little',
    titleEnd: 'background',
    photo: '/hero-photo.png',
    photoAlt: 'Al Sami — Software & ML Engineer',
    badge: { num: '3+', label: 'Yrs Experience' },
    bio: [
      "Hey 👋 I'm a Software & Machine Learning Engineer based in the United Kingdom. I completed my undergraduate in Mechatronic Engineering in South Africa, then earned my Masters in Computer Science with AI at the University of Nottingham.",
      "I'm passionate about AI, robotics, and building products that make a real impact. When I'm not coding I'm likely on a track bike, having competed nationally and internationally for South Africa 🇿🇦",
    ],
    stats: [
      { num: '3+',  label: 'Years Experience' },
      { num: '15+', label: 'Projects Built' },
      { num: '∞',   label: 'Coffees Brewed' },
    ],
  },

  /* ── Experience ── */
  experience: {
    sectionLabel: 'Experience',
    title: "Where I've",
    titleAccent: 'Worked',
    entries: [
      {
        title: 'Machine Learning Engineer',
        company: 'Tensora',
        date: 'Aug 2024 — Present',
        tags: ['Python', 'TF', 'PyTorch', 'GPU', 'Bittensor', 'K8s'],
        bullets: [
          'Built decentralised AI solutions on the Bittensor blockchain',
          'Fine-tuned 3D models, Computer Vision models, and LLMs',
          'Ran distributed GPU training pipelines in the cloud',
        ],
      },
      {
        title: 'Machine Learning Engineer',
        company: 'Key Three Data',
        date: 'Sep 2022 — Aug 2024',
        tags: ['Python', 'TensorFlow', 'GCP', 'OpenCV'],
        bullets: [
          'Automated first-person video → consumer data conversion platform',
          'Performed data preprocessing, cleaning, and deep analysis',
          'Integrated ML systems onto Google Cloud Platform at scale',
        ],
      },
      {
        title: 'Mobile App Developer',
        company: 'Co-Pilot Consulting',
        date: 'Jan 2021 — Aug 2024',
        tags: ['Flutter', 'Dart', 'Firebase', 'Git'],
        bullets: [
          'Lead dev on the Koinonia cross-platform church connectivity app',
          'Delivered polished front-end experiences with on-device database work',
          'Shipped production app to iOS and Android App Stores',
        ],
      },
    ],
  },

  /* ── Education ── */
  education: {
    sectionLabel: 'Education',
    title: 'Academic',
    titleAccent: 'Journey',
    entries: [
      {
        year: '2021 – 2022',
        degree: 'MSc Computer Science with Artificial Intelligence',
        school: 'University of Nottingham, UK',
        desc: 'Graduated with Merit. Dissertation on non-invasive determination of physical properties of objects using machine-learned interpolation of robot arm manipulations.',
        badge: '🎓 Masters — Merit',
        featured: true,
      },
      {
        year: '2016 – 2021',
        degree: 'BEng Mechatronic Engineering',
        school: 'University of Cape Town, South Africa',
        desc: 'Four-year engineering degree covering mechanical, electrical, and software engineering with embedded systems, control theory, and signal processing.',
        badge: '⚙️ BEng — Honours',
        featured: false,
      },
      {
        year: '2011 – 2015',
        degree: 'National Senior Certificate',
        school: 'Pretoria Boys High School, South Africa',
        desc: 'Matriculated with distinction. Represented the school in cycling at national level. Subjects included Mathematics, Physics, and Computer Applications Technology.',
        badge: '🏅 Distinction',
        featured: false,
      },
    ],
  },

  /* ── Skills ── */
  skills: {
    sectionLabel: 'Expertise',
    title: 'My',
    titleAccent: 'Skills',
    entries: [
      { name: 'Python',     icon: '🐍', pct: 90 },
      { name: 'TensorFlow', icon: '🧠', pct: 70 },
      { name: 'PyTorch',    icon: '🔥', pct: 75 },
      { name: 'Flutter',    icon: '🦋', pct: 90 },
      { name: 'Dart',       icon: '🎯', pct: 90 },
      { name: 'React',      icon: '⚛️', pct: 30 },
      { name: 'Next.js',    icon: '▲',  pct: 40 },
      { name: 'Git',        icon: '🌿', pct: 85 },
      { name: 'Docker',     icon: '🐳', pct: 70 },
      { name: 'GCP',        icon: '☁️', pct: 80 },
      { name: 'Flask',      icon: '🍶', pct: 70 },
      { name: 'HTML/CSS',   icon: '🎨', pct: 50 },
      { name: 'Kubernetes', icon: '⚙️', pct: 75 },
      { name: 'Sanity',     icon: '📦', pct: 60 },
      { name: 'Node.js',    icon: '🟢', pct: 65 },
      { name: 'Bittensor',  icon: '🔗', pct: 80 },
    ],
  },

  /* ── Projects ── */
  projects: {
    sectionLabel: 'Portfolio',
    title: 'Featured',
    titleAccent: 'Projects',
    entries: [
      {
        num: '01',
        title: 'Masters Dissertation — AI Robotics',
        desc: 'Non-invasive determination of physical object properties using machine-learned interpolation of robot arm observations.',
        tech: ['Python', 'TensorFlow', 'ROS', 'Git'],
        img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop',
        github: 'https://github.com/AlSami',
        live: '#',
      },
      {
        num: '02',
        title: 'Portfolio Website',
        desc: 'A modern, high-performance portfolio built with React, Next.js, Sanity, and Framer Motion.',
        tech: ['React', 'Next.js', 'Sanity', 'TypeScript'],
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
        github: 'https://github.com/AlSami',
        live: 'https://www.alsami.com',
      },
      {
        num: '03',
        title: 'F1 Fantasy Analyser',
        desc: 'Python-powered data analytics tool that optimises your Formula 1 fantasy team by crunching race statistics.',
        tech: ['Python', 'Flask', 'HTML', 'CSS'],
        img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?q=80&w=900&auto=format&fit=crop',
        github: 'https://github.com/AlSami/F1-Fantasy-Team-Calculator',
        live: '#',
      },
      {
        num: '04',
        title: 'Lucky Dice Loyalty App',
        desc: 'Cross-platform Flutter app for Lucky Dice Coffee. Streak-based consecutive purchase loyalty system on iOS & Android.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Git'],
        img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=900&auto=format&fit=crop',
        github: 'https://github.com/AlSami',
        live: '#',
      },
    ],
  },

  /* ── Publications ── */
  publications: {
    sectionLabel: 'Research',
    title: 'Publications &',
    titleAccent: 'Papers',
    entries: [
      {
        type: 'thesis',
        year: '2022',
        title: 'Non-Invasive Determination of Physical Properties of Objects Using Machine-Learned Interpolation of Robot Arm Observations',
        authors: '<span class="me">Al Sami</span>',
        venue: "Master's Thesis — University of Nottingham",
        abstract: 'This dissertation investigates a novel approach to identifying the physical properties of unknown objects — mass, friction coefficient, and centre of mass — without direct contact. A robot arm observes object behaviour under known forces, and machine learning models interpolate physical properties from sensor readings alone. Results demonstrate significant accuracy improvements over baseline physics models.',
        tags: ['Robotics', 'Machine Learning', 'Computer Vision', 'Physics Simulation', 'ROS'],
        links: { pdf: '#', doi: '#', arxiv: null, code: 'https://github.com/AlSami', cite: '#' },
        citations: 4,
        featured: true,
      },
      {
        type: 'conference',
        year: '2023',
        title: 'Decentralised AI Incentive Mechanisms on Proof-of-Stake Blockchain Networks',
        authors: '<span class="me">Al Sami</span>, J. Williams, A. Patel',
        venue: 'Workshop on Decentralised AI Systems',
        abstract: 'We propose an incentive architecture for distributed ML model training on permissionless blockchain networks. Our mechanism leverages stake-weighted validation to ensure honest contribution of compute resources while preventing Sybil attacks. Benchmarked against Bittensor subnet baselines.',
        tags: ['Blockchain', 'Bittensor', 'Distributed Training', 'Incentive Design', 'Web3'],
        links: { pdf: '#', doi: null, arxiv: '#', code: 'https://github.com/AlSami', cite: '#' },
        citations: 2,
        featured: false,
      },
      {
        type: 'preprint',
        year: '2024',
        title: 'Automated Video-to-Consumer-Insight Pipelines Using Egocentric Vision Models',
        authors: '<span class="me">A. Sami</span>, Key Three Data Research Team',
        venue: 'arXiv Preprint',
        abstract: 'We introduce an automated pipeline that converts first-person (egocentric) video streams into structured consumer behavioural data. Our approach combines object detection, action recognition, and temporal attention mechanisms to extract purchase intent signals with 89% precision on a proprietary retail dataset.',
        tags: ['Egocentric Vision', 'Action Recognition', 'Retail Analytics', 'Computer Vision', 'GCP'],
        links: { pdf: '#', doi: null, arxiv: '#', code: null, cite: '#' },
        citations: 0,
        featured: false,
      },
    ],
    bibtex: [
      `@mastersthesis{sparrow2022noninvasive,
  title   = {Non-Invasive Determination of Physical Properties
             of Objects Using Machine-Learned Interpolation
             of Robot Arm Observations},
  author  = {Sami, Al},
  year    = {2022},
  school  = {University of Nottingham},
  address = {Nottingham, UK},
}`,
      `@inproceedings{sparrow2023decentralised,
  title     = {Decentralised AI Incentive Mechanisms on
               Proof-of-Stake Blockchain Networks},
  author    = {Sami, Al and Williams, J. and Patel, A.},
  booktitle = {Workshop on Decentralised AI Systems},
  year      = {2023},
}`,
      `@misc{sparrow2024egocentric,
  title         = {Automated Video-to-Consumer-Insight Pipelines
                   Using Egocentric Vision Models},
  author        = {Sami, Al and {Key Three Data Research Team}},
  year          = {2024},
  eprint        = {2024.XXXXX},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CV},
}`,
    ],
  },

  /* ── Footer / Contact ── */
  footer: {
    bgText: 'CONTACT',
    eyebrow: "What's Next?",
    title: "Let's",
    titleAccent: 'Work Together',
    subtitle: "I'm currently open to new opportunities. Whether you have a project, want to collaborate, or just want to say hi — my inbox is always open.",
    email: 'hello@alsami.com',
    ctaText: 'Say Hello',
    phones: [
      { number: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { number: '+1 (555) 987-6543', href: 'tel:+15559876543' },
    ],
    socials: [
      { label: 'GitHub',    url: 'https://github.com/AlSami' },
      { label: 'Twitter',   url: 'https://twitter.com/AlSami' },
      { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/al-sami/' },
      { label: 'Instagram', url: 'https://www.instagram.com/al_sami/' },
    ],
    copyright: 'Al Sami',
    builtWith: 'Designed & Built with React + Vite',
  },

  /* ── CV / Resume ── */
  cv: {
    url: '/cv-al-sami.pdf',
    label: 'Download CV',
  },

  /* ── Settings ── */
  settings: {
    adminPassword: 'admin123',
  },
};

export default defaultSiteData;
