export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Background', href: '#background' },
  { label: 'Research', href: '#research' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const heroPhrases = ['Web Developer', 'Machine Learning Explorer', 'App Creator'];

export const aboutText = [
  'My journey began with a simple curiosity about how things work behind the screen, which led me to dive deep into backend logic.',
  'What started as a struggle with basic code has evolved into building intelligent solutions like the Bharat policy assistant, where I focus on making technology more accessible and helpful for everyone.',
];

export const aboutPillars = [
  {
    title: 'Backend Development',
    description: 'Developing end-to-end web applications by pairing high-performance Python backend logic with modular, state-driven React frontend interfaces.',
  },
  {
    title: 'Tech Enthusiast',
    description: 'Staying ahead of emerging tools and frameworks to deliver reliable, modern solutions that make development faster and systems smarter.',
  },
  {
    title: 'Intelligent AI Solutions',
    description: 'Integrating smart, assistant-driven capabilities and tailored engineering solutions to make applications more interactive, helpful, and data-aware.',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'C', 'Java', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQLite'],
  },
  {
    title: 'Dev Tools',
    skills: ['VS Code', 'Git', 'GitHub'],
  },
  {
    title: 'Data Analytics',
    skills: ['Numpy', 'Pandas', 'Matplotlib', 'MS Excel'],
  },
  {
    title: 'Deployment',
    skills: ['Render', 'Vercel'],
  },
  {
    title: 'AI Tools',
    skills: ['ChatGPT', 'Gemini', 'Claude', 'Copilot', 'Perplexity'],
  },
];

export const projectList = [
  {
    title: 'BPIS (Bharat Policy Intelligence System)',
    description:
      'An AI-powered platform that analyzes district-level socio-economic data, prioritizes critical regions, and recommends suitable government schemes to support data-driven policymaking.',
    problemStatement:
      'Government agencies often struggle to identify high-priority districts due to fragmented data and the lack of intelligent decision-support systems. Existing dashboards provide data visualization but do not offer actionable policy recommendations.',
    proposedSolution:
      'BPIS (Bharat Policy Intelligence System) is an AI-powered platform that analyzes district-level socio-economic data, prioritizes critical regions, and recommends suitable government schemes to support data-driven policymaking.',
    features: [
      'Priority Scoring System – Identifies high-risk districts',
      'Interactive GIS Dashboard – Visualizes district data on maps',
      'District Insights Panel – Displays key socio-economic indicators',
      'Scheme Recommendation Engine – Suggests relevant government schemes',
      'AI Policy Advisor – Provides intelligent policy insights and recommendations',
    ],
    techStack: ['React.js', 'Leaflet', 'Recharts', 'FastAPI', 'Python', 'District-level CSV datasets', 'AI Policy Advisor'],
    conclusion:
      'BPIS transforms raw data into actionable policy decisions, enabling smarter governance, efficient resource allocation, and targeted implementation of government schemes. Its scalable and AI-driven approach supports better decision-making across districts and states.',
    tags: ['Governance', 'AI', 'Analytics'],
    github: 'https://github.com/Neetu-Sahu/BPIS-Bharat-Policy-Intelligence-System-',
  },
  {
    title: 'KhetSetu',
    description:
      'An AI-powered platform that helps farmers make better decisions through crop disease detection, weather insights, educational content, gamification, and marketplace access.',
    problemStatement:
      'Farmers face challenges such as crop diseases, unpredictable weather, limited awareness of sustainable farming practices, and restricted access to markets. Existing solutions are often fragmented and difficult to access.',
    proposedSolution:
      'Khet Setu is an AI-powered platform that helps farmers make better decisions through crop disease detection, weather insights, educational content, gamification, and marketplace access—all in one place.',
    features: [
      'AI-based crop disease detection',
      'Real-time weather forecasting',
      'Gamified learning and quizzes',
      'Rewards, badges, and leaderboard',
      'Emergency risk alerts',
      'Farmer marketplace',
      'Sustainability score tracking',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Jinja2', 'Python', 'Flask', 'SQLite', 'PyTorch', 'Hugging Face', 'Vision Transformer', 'WeatherAPI', 'Render'],
    conclusion:
      'Khet Setu empowers farmers with technology-driven tools for learning, risk management, and sustainable farming. By combining AI, real-time insights, and gamification, it helps improve productivity, awareness, and agricultural growth.',
    tags: ['Agritech Learning', 'AI', 'Flask'],
    github: 'https://github.com/Neetu-Sahu/Khet-Setu',
  },
  {
    title: 'Aurix',
    description:
      'AURIX is an AI-integrated assistive healthcare robot built to automate supply delivery, improve remote monitoring, and provide companionship for patients in hospitals and geriatric care.',
    problemStatement:
      'Healthcare facilities need smarter automation for delivery and monitoring, while residents also require compassionate companionship and fast emergency response in unmonitored zones.',
    proposedSolution:
      'AURIX combines structural robotics, dual-controller coordination, and AI-powered interaction to deliver medical supplies, support remote patient monitoring, and offer voice-enabled companionship with emergency alerts.',
    features: [
      'Intelligent communication with Gemini-driven speech-to-text and text-to-speech',
      'Logistics automation via a stable front-mounted delivery platform',
      'Remote mobility through a 4-motor differential drive controlled by a smartphone app',
      'Emergency response subsystem using Twilio for calls and SMS alerts',
      'Safety integration with camera and microphone for remote monitoring and hazard reporting',
    ],
    techStack: [
      'Raspberry Pi',
      'Arduino',
      'Tinkercad',
      'Python',
      'C++',
      'Gemini API',
      'Twilio API',
      'Smartphone App',
    ],
    conclusion:
      'AURIX reduces healthcare workload while improving elderly patient engagement with intelligent delivery, monitoring, and emergency support, aiming to cut operational effort by 15-20%.',
    tags: ['Robotics Healthcare', 'AI', 'Automation'],
    github: 'https://github.com/yourusername/aurix',
  },
  {
    title: 'Resume Builder',
    description: 'A polished resume creation tool for generating customizable, modern CVs with instant previews and PDF export.',
    problemStatement:
      'Many professionals struggle to quickly craft resumes that look modern, remain structured, and export cleanly for recruiters.',
    proposedSolution:
      'Resume Builder offers templates, guided section creation, and export-ready PDF output so users can create professional resumes in minutes.',
    features: [
      'Template selection with live preview and section editing',
      'Drag-and-drop resume sections and skill highlights',
      'PDF generation with print-ready formatting',
      'Profile management and version history for multiple resumes',
      'Mobile-friendly UI with instant export and sharing links',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PDFKit'],
    conclusion:
      'Resume Builder helps users present their experience confidently by converting structured inputs into visually strong, recruiter-ready resumes instantly.',
    tags: ['Career Tools', 'UX', 'PDF', 'Web App'],
    github: 'https://github.com/yourusername/resume-builder',
  },
  {
    title: 'Fake News Detector',
    description: 'A news verification platform that flags false or misleading articles using NLP classification and confidence analytics.',
    problemStatement:
      'The spread of misinformation makes it difficult for readers to identify credible news, leading to confusion and poor decisions.',
    proposedSolution:
      'Fake News Detector analyzes article text, classifies authenticity with machine learning, and provides transparent model confidence scores.',
    features: [
      'Text classification for news authenticity',
      'Confidence scoring and explanation summaries',
      'Dataset-driven model training with attention to bias',
      'Interactive dashboard for exploring results and trends',
      'Browser-ready submission form for quick verification',
    ],
    techStack: ['Python', 'Flask', 'TensorFlow', 'NLP', 'Pandas', 'Streamlit'],
    conclusion:
      'This solution empowers users to evaluate news quickly, reducing the impact of misinformation through clear explanation and trustworthy predictions.',
    tags: ['Misinformation', 'NLP', 'ML', 'Data'],
    github: 'https://github.com/Neetu-Sahu/Fake-News-Detector',
  },
];

export const researchHighlights = [
  {
    title: 'A Comparative AI Framework for Malware Detection Using Wireshark Derived Packet Analysis',
    description: 'Advanced machine learning approach for detecting malicious network traffic patterns through intelligent packet analysis and behavioral classification.',
    file: '/papers/paper3.pdf',
    status: 'coming-soon',
    abstract:
      'This research presents a comprehensive AI-driven framework that leverages Wireshark-derived packet analysis to detect and classify malware network behavior. The framework combines multiple machine learning models to achieve high accuracy in identifying suspicious traffic patterns and malicious network activities.',
    focus:
      'Network security, malware detection, behavioral analysis using packet-level traffic inspection and AI/ML classification techniques',
    submission: 'IEEE (Institute of Electrical and Electronics Engineers) - Under Review',
    teamMembers: [
      'Rudra Pratap Singh - Lead Researcher & Framework Developer',
      'Dev Saxena - ML Model Engineer',
      'Neetu Sahu - Network Data Analysis Specialist',
      'Rachit Kanchan - Documentation & Experimental Validation',
      'Dr. Pradeep Kumar Sharma - Mentor',
    ],
    methodology: [
      'Wireshark packet capture and feature extraction from network traffic',
      'Multi-stage preprocessing and normalization of network data',
      'Comparative analysis of Random Forest, XGBoost, and Deep Neural Networks',
      'Behavioral pattern matching and anomaly detection algorithms',
      'Cross-validation and performance metrics evaluation across 50K+ packets',
    ],
  },
];

export const certifications = [
  {
    id: 'cert-04',
    title: 'Python for Data Science (NPTEL)',
    issuer: 'IIT Madras / NPTEL',
    image: '/certs/nptel-python-data-science.jpg',
  },
  {
    id: 'cert-05',
    title: 'Generative AI for Beginners',
    issuer: 'Simplilearn',
    image: '/certs/simplilearn-generative-ai.jpg',
  },
  {
    id: 'cert-06',
    title: 'Programming in Java (NPTEL)',
    issuer: 'IIT Kharagpur / NPTEL',
    image: '/certs/nptel-programming-java.jpg',
  },
  {
    id: 'cert-07',
    title: 'React Bootcamp',
    issuer: 'LetsUpgrade / GDG MAD',
    image: '/certs/react-bootcamp-letsupgrade.jpg',
  },
  {
    id: 'cert-08',
    title: 'Udemy Course Completion',
    issuer: 'Udemy',
    image: '/certs/udemy.jpg',
  },
  {
    id: 'cert-09',
    title: 'HTML & CSS Certification',
    issuer: 'Online Course',
    image: '/certs/htmlcss.jpg',
  },

];

export const education = [
  {
    id: 'edu-01',
    degree: 'Bachelor of Technology in CSE',
    institution: 'Shri Ram Murti Smarak College of Engg. & Tech (SRMS CET)',
    years: '2024 — 2028',
    note: 'First year: 90.2% (2024-2025)'
  },
  {
    id: 'edu-02',
    degree: 'Higher Secondary School (Class XII)',
    institution: 'BBL Public School',
    years: '2023 — 2024',
    note: 'PCM — 95.4%'
  },
  {
    id: 'edu-03',
    degree: 'Secondary School (Class X)',
    institution: 'G.K. City Montessori School',
    years: '2022 — 2023',
    note: 'PCM — 96.6%'
  },
];

export const events = [
  {
    id: 'evt-02',
    title: 'IEEE Member',
    type: 'Professional Membership',
    description: 'Active member of the Institute of Electrical and Electronics Engineers.',
    tag: 'Ongoing'
  },
  {
    id: 'evt-03',
    title: 'Equinox Club Coordinator',
    type: 'SRMS CET',
    description: 'Coordinating events, workshops, and activities for the college technical club.',
    tag: 'Coordinator'
  },
];

export const socialLinks: { label: string; href: string; icon: 'FiGithub' | 'FiLinkedin' | 'FiTwitter' }[] = [
  { label: 'GitHub', href: 'https://github.com/Neetu-Sahu', icon: 'FiGithub' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neetu-sahu-83877522b?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: 'FiLinkedin' },
];
