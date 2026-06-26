import { PortfolioContent } from '@models/portfolio.model';

export const portfolioContent: PortfolioContent = {
  profile: {
    name: 'Aymane Wakach',
    title: 'Software Engineer',
    location: 'Casablanca, Morocco',
    phone: '+212 661 163150',
    email: 'aymen.wakach@gmail.com',
    githubUrl: 'https://github.com/Usotsuku',
    linkedinUrl: 'https://www.linkedin.com/in/aymane-wakach-19b901217/',
    cvUrl: 'assets/cv/CV_Aymane_Wakach_EN.pdf',
    pictureUrl: 'assets/pictures/profile-pic.jpg',
    summary: [
      'Building mobile and web products with a focus on backend structure, clean interfaces, and practical implementation.',
      'I am a software engineer from Casablanca. I enjoy building products end-to-end, especially when the work connects mobile interfaces with solid backend services. I like simple structure, readable code, and shipping work that fits the product.'
    ],
    rotatingSkills: ['Flutter', 'NestJS', 'Angular']
  },
  metrics: [
    {
      label: 'Backend',
      value: 'NestJS',
      detail: 'Backend services organized around clear modules and request flows.'
    },
    {
      label: 'Flutter',
      value: 'Mobile',
      detail: 'Mobile applications with reusable UI systems and connected workflows.'
    },
    {
      label: 'Delivery',
      value: 'Ship',
      detail: 'Testing, release work, and product details that make features usable.'
    }
  ],
  experience: [
    {
      company: 'KEENOPS',
      role: 'Full-Stack Developer',
      duration: 'Since September 2025',
      highlights: [
        'Worked on YallaFarha, a gift management platform built with NestJS and Flutter.',
        'Restructured backend modules, request handling, validation, and shared configuration.',
        'Built reusable Flutter widgets and global styles for the mobile app.'
      ]
    },
    {
      company: 'KEENOPS',
      role: 'Front-End Developer',
      duration: 'January 2025 - August 2025',
      highlights: [
        'Built Flutter screens for an event-based gift management app and connected them to REST APIs.',
        'Tested endpoints with Postman and helped automate mobile releases with Fastlane.',
        'Worked on Angular admin and client interfaces for an employment support platform.'
      ]
    },
    {
      company: 'Equatorial Coca-Cola Bottling Company',
      role: 'Front-End Developer',
      duration: 'August 2024 - October 2024',
      highlights: [
        'Worked on a Flutter mobile application for CDE management.',
        'Designed and implemented screens from UML analysis through deployment.'
      ]
    },
    {
      company: 'MUS Building',
      role: 'Full-Stack Developer',
      duration: 'July 2023 - September 2023',
      highlights: [
        'Built a C++ stock management application.',
        'Handled database setup, interface design, testing, and deployment.'
      ]
    }
  ],
  projects: [
    {
      name: 'Yalla Farha Mobile App',
      problem: 'Event-based gift management mobile application published on the App Store and Google Play.',
      architecture: 'Full-stack developer',
      responsibilities: [
        'Developed Flutter mobile flows connected to REST APIs.',
        'Worked on UML analysis, endpoint testing with Postman, and mobile release automation with Fastlane.',
        'Improved the NestJS backend structure with modules, guards, interceptors, pipes, filters, decorators, middleware, and centralized configuration.'
      ],
      stack: ['Flutter', 'NestJS'],
      outcome: 'A published mobile app with reusable Flutter UI foundations and a stronger backend structure.',
      videoUrl: 'assets/videos/yf_demo.mp4',
      mediaLayout: 'mobile'
    },
    {
      name: 'Yalla Farha Web App',
      problem: 'Web version of the Yalla Farha gift management product, built with Flutter and covering the same core workflows.',
      architecture: 'Full-stack developer',
      responsibilities: [
        'Developed Flutter web interfaces for the gift management experience.',
        'Connected the web app to REST APIs and supported endpoint validation with Postman.',
        'Shared UI patterns and styling decisions with the mobile application for a consistent product experience.'
      ],
      stack: ['Flutter', 'NestJS'],
      outcome: 'A Flutter web app with the same product functionality available outside the mobile stores.',
      videoUrl: 'assets/videos/yf-web.mp4',
      mediaLayout: 'desktop'
    },
    {
      name: 'NewCV',
      problem: 'Employment support and recruitment platform with admin and client interfaces.',
      architecture: 'Front-end developer',
      responsibilities: [
        'Developed Angular interfaces for admin and client workflows.',
        'Wrote detailed functional specifications for each interface.',
        'Worked with ClickUp for task management and GitLab for source control.'
      ],
      stack: ['Angular', 'PrimeNG'],
      outcome: 'A recruitment platform interface built around documented product screens and managed delivery workflow.'
    }
  ],  education: [
    {
      degree: 'State Engineer in Computer and Network Engineering',
      institution: 'Moroccan School of Engineering Sciences',
      location: 'Casablanca, Morocco',
      duration: '2020 - 2025'
    },
    {
      degree: 'International Baccalaureate, French Option - Physical Sciences',
      institution: 'Oum El Koura',
      location: 'Casablanca, Morocco',
      duration: '2014 - 2020'
    }
  ],
  certifications: [
    { name: 'Software Engineering: Modeling Software Systems using UML' },
    { name: 'Virtual Networks in Azure' },
    { name: 'Java Programming: Solving Problems with Software' },
    { name: 'React Native' }
  ],
  languages: ['Arabic', 'English', 'French'],
  softSkills: ['Self-motivation', 'Collaboration', 'Adaptability'],
  stack: [
    {
      name: 'Flutter',
      items: ['Mobile applications with reusable UI systems and connected workflows.']
    },
    {
      name: 'NestJS',
      items: ['Backend services organized around clear modules and request flows.']
    },
    {
      name: 'Angular',
      items: ['Interfaces designed for administration and product operations.']
    },
    {
      name: 'Spring Boot',
      items: ['Backend development across structured academic products.']
    }
  ],
  principles: [
    {
      title: 'Understand',
      description: 'Start with requirements, constraints, and the real product need.'
    },
    {
      title: 'Design',
      description: 'Turn ideas into flows, structure, and clear implementation decisions using analysis and modeling.'
    },
    {
      title: 'Build',
      description: 'Write the feature, connect the pieces, and keep the code readable.'
    },
    {
      title: 'Release',
      description: 'Connect, test, refine, and move features into real use.'
    }
  ],
  roadmap: [],
  contactActions: [
    {
      label: 'Download CV',
      href: 'assets/cv/CV_Aymane_Wakach_EN.pdf',
      icon: 'download'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Usotsuku',
      icon: 'github'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aymane-wakach-19b901217/',
      icon: 'linkedin'
    },
    {
      label: 'Email',
      href: 'mailto:aymen.wakach@gmail.com',
      icon: 'mail'
    }
  ]
};




