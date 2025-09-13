export const websiteData = {
  name: "Kundan Kumar",
  tagline: "Python | AI/ML | Algo Trading | Automation",
  overview: "Freelancer and developer specializing in Python, AI/ML, trading algorithms, and automation. Helping clients build efficient systems for financial markets, data processing, and business automation.",
  contact: {
    name: "Kundan Kumar",
    role: "Freelancer | Algo Trading & Automation Specialist",
    email: "kundan.freelance@example.com",
    phone_numbers: ["+91 98765 43210"],
    linkedin: "https://linkedin.com/in/kundankumar",
    github: "https://github.com/kundanprojects",
    fiverr: "https://fiverr.com/kundanfreelancer",
    location: {
      city: "India",
      note: "Available for remote and freelance projects globally"
    },
    response_time: {
      email: "Within 4 hours",
      freelance_platforms: "Immediate",
      consultation: "Scheduled within 24 hours"
    }
  },
  skills: [
    "Python Development",
    "Machine Learning & AI",
    "Algorithmic Trading",
    "Data Automation & Processing",
    "Kafka & Streaming Systems",
    "PostgreSQL & Pandas Integration",
    "Web Development (Django + React)"
  ],
  achievements: {
    freelance_projects: 50,
    algo_strategies_built: 15,
    trading_bots: 10,
    youtube_channels: 3,
    years_experience: 5
  },
  services: {
    "algo_trading": {
      name: "Algo Trading Solutions",
      description: "Custom trading strategies and bots for NSE, Crude Oil, and Options with real-time execution.",
      features: [
        "Price Action Based Strategies",
        "Backtesting & Paper Trading",
        "Integration with Upstox, Angel One, DhanHQ",
        "Real-time Option Chain & Market Data",
        "Risk Management Automation"
      ]
    },
    "python_automation": {
      name: "Python Automation",
      description: "End-to-end automation for businesses using Python and APIs.",
      features: [
        "Excel & CSV Automation",
        "API Integrations",
        "Web Scraping",
        "Workflow Automation with FastAPI / n8n",
        "Data Pipelines with Kafka"
      ]
    },
    "ai_ml_projects": {
      name: "AI/ML Projects",
      description: "Applied AI/ML solutions for data-driven decision-making.",
      features: [
        "Predictive Modeling",
        "Time Series Forecasting",
        "NLP-based Analysis",
        "Classification & Regression Models"
      ]
    },
    "consulting": {
      name: "Technical Consulting",
      description: "Helping clients design, validate, and deploy scalable trading and automation systems.",
      features: [
        "System Design Consultation",
        "Code Optimization",
        "Project Roadmap Guidance",
        "Freelance Training & Mentorship"
      ]
    }
  },
  why_choose_me: [
    { title: "Domain Expertise", detail: "Deep hands-on experience in Algo Trading, AI, and automation." },
    { title: "Practical Solutions", detail: "I build systems tested on live markets, not just theory." },
    { title: "Full-Stack Approach", detail: "From backend APIs to trading UIs and automation pipelines." },
    { title: "Client Satisfaction", detail: "Repeat clients across freelance platforms with on-time delivery." }
  ],
  projects: [
    {
      name: "NSE ETF & Option Chain Kafka Publisher",
      description: "Python script to fetch NSE India ETF & Option Chain data and publish to Kafka topics for downstream trading systems.",
      tech_stack: ["Python", "Kafka", "NSE APIs"],
      status: "Completed"
    },
    {
      name: "3-Min ATM Nifty Option Strategy",
      description: "Custom algo strategy detecting candle patterns with SL & trailing SL rules, optimized for expiry setups.",
      tech_stack: ["Python", "Upstox TBT", "Price Action"],
      status: "In Progress"
    },
    {
      name: "Crude Oil Options Trading Alert Bot",
      description: "Telegram-integrated alert system using DhanHQ SDK to detect fake breakouts on 1H/15M charts.",
      tech_stack: ["Python", "DhanHQ", "Telegram API"],
      status: "In Progress"
    },
    {
      name: "Grocery Store Management System",
      description: "Custom Python tool for sales record management, search, and graphical performance tracking.",
      tech_stack: ["Python", "Matplotlib", "Excel"],
      status: "Completed"
    }
  ],
  testimonials: [
    {
      name: "Client from Angel One",
      feedback: "Kundan built a reliable algo trading integration for my brokerage. Very professional work.",
      rating: 5,
      avatar: "https://picsum.photos/seed/avatar1/48/48"
    },
    {
      name: "Freelance Client",
      feedback: "Great at automation with Python and Excel. Saved hours of manual work.",
      rating: 5,
      avatar: "https://picsum.photos/seed/avatar2/48/48"
    },
    {
      name: "Trading Strategy Client",
      feedback: "The backtesting results were impressive, and the live bot performance is even better. Highly recommend.",
      rating: 5,
      avatar: "https://picsum.photos/seed/avatar3/48/48"
    }
  ],
  process: [
    { step: 1, title: "Consultation", detail: "Understand client requirements and goals" },
    { step: 2, title: "Design", detail: "Create a solution roadmap with milestones" },
    { step: 3, "title": "Development", detail: "Build, test, and optimize the solution" },
    { step: 4, "title": "Delivery", detail: "Deploy solution with documentation and support" }
  ],
  quick_links: [
    { title: "Home", href: "#home" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ]
};
