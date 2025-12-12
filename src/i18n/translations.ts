// Translations for PL, EN and NL

export type Language = 'pl' | 'en' | 'nl';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      contact: 'Contact',
      bookCall: 'Book a call',
    },
    
    // Hero
    hero: {
      greeting: "Hi, I'm",
      name: 'Tomasz Chromy',
      role: 'Full-Stack Developer',
      h1Main: 'Modern Websites',
      h1Highlight: '& Web Applications',
      h2Services: 'Business Websites • E-commerce • Landing Pages • UI/UX Design',
      subtitle: 'I build modern web applications that help businesses grow. Clean code, beautiful design, real results.',
      cta: 'Start Your Project',
      ctaSecondary: 'View Portfolio',
      experience: 'Years exp.',
      projects: 'Projects',
    },
    
    // About
    about: {
      label: 'About Me',
      title: 'Passionate about',
      titleHighlight: 'building solutions',
      intro: "Hi, I'm",
      introName: 'Tomasz Chromy',
      introText: '— a full-stack developer with a passion for clean code and beautiful interfaces.',
      description: 'I specialize in creating modern web applications using React, Next.js and Node.js. Every project is an opportunity to solve real business problems.',
      yearsExp: 'Years of experience',
      projectsCompleted: 'Projects completed',
      satisfaction: 'Client satisfaction',
    },
    
    // Services
    services: {
      label: 'Services',
      title: 'What I can build for you',
      subtitle: 'End-to-end web development services, from concept to deployment',
      webDev: 'Web Development',
      webDevDesc: 'Modern, fast and responsive websites built with React and Next.js. Clean code that scales.',
      fullStack: 'Full-Stack Apps',
      fullStackDesc: 'Complete web applications with robust backends. From database to deployment.',
      uiux: 'UI/UX Design',
      uiuxDesc: 'User-centered design that looks great and converts. Figma prototypes to pixel-perfect code.',
      uiuxFeature1: 'Responsive design',
      uiuxFeature2: 'Accessibility',
      uiuxFeature3: 'Design systems',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Online stores that convert. Payment integration, inventory management, and analytics.',
    },
    
    // Portfolio
    portfolio: {
      label: 'Portfolio',
      title: 'Selected',
      titleHighlight: 'projects',
      subtitle: 'Real solutions for real businesses',
      cta: 'Have a project in mind?',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      resultLabel: 'Result',
      // Project 1
      project1Tag: 'Strategy & System',
      project1Title: 'Automation system for software house',
      project1Problem: 'Team wasting hours on manual reports and scattered project tracking.',
      project1Solution: 'Custom dashboard with API integrations and automated workflows.',
      project1Result: '40% more efficiency, 60% less time on reports.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Team efficiency',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Report time',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Premium products online store',
      project2Problem: 'Low conversions and slow page loads hurting sales.',
      project2Solution: 'Rebuilt with Next.js, optimized checkout and lazy-loading.',
      project2Result: '85% conversion boost, 2.1s load time.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Conversion',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Load time',
      // Project 3
      project3Tag: 'Landing & Growth',
      project3Title: 'Landing page for SaaS campaign',
      project3Problem: 'Ads driving traffic but landing page not converting.',
      project3Solution: 'Redesign with clear CTA, A/B testing and analytics.',
      project3Result: '12% CTR, 3.2% conversion rate.',
      project3Metric1Value: '12%',
      project3Metric1Label: 'CTR',
      project3Metric2Value: '3.2%',
      project3Metric2Label: 'Conversion rate',
    },

    // Pricing
    pricing: {
      label: 'Pricing',
      title: 'Simple, transparent pricing',
      subtitle: 'Choose the plan that works best for your project',
      consultation: 'Consultation',
      consultationPrice: 'Free',
      consultationPeriod: '30 min',
      consultationNote: "Let's meet and discuss your project.",
      consultationPoints: [
        'Needs and goals analysis',
        'Initial solution proposal',
        'Budget and timeline estimate',
      ],
      consultationCta: 'Book a call',
      project: 'Project',
      projectPrice: 'from €1,200',
      projectPeriod: 'one-time',
      projectNote: 'Complete solution from A to Z.',
      projectPoints: [
        'Strategy + design + implementation',
        'Full documentation and training',
        '30 days post-launch support',
        'Quality guarantee',
      ],
      projectCta: 'Start project',
      projectBadge: 'Most popular',
      partnership: 'Partnership',
      partnershipPrice: 'from €750',
      partnershipPeriod: 'monthly',
      partnershipNote: 'Ongoing support and development.',
      partnershipPoints: [
        'Dedicated monthly hours',
        'Priority support',
        'Regular optimizations',
        'Reporting and analytics',
      ],
      partnershipCta: "Let's talk",
    },
    
    // Contact
    contact: {
      label: 'Get in Touch',
      title: "Let's build something",
      titleHighlight: 'amazing together',
      subtitle: "Have a project in mind? I'd love to hear about it.",
      directContact: 'Direct contact',
      formFullName: 'Full name',
      formFullNamePlaceholder: 'John Smith',
      formEmail: 'Email',
      formEmailPlaceholder: 'john@company.com',
      formCompany: 'Company (optional)',
      formCompanyPlaceholder: 'Company name',
      formProject: 'Tell me about your project',
      formProjectPlaceholder: 'Briefly describe what you need...',
      formProjectHint: 'Min. 20 characters',
      formSubmit: 'Send Message',
      formSending: 'Sending...',
      formSuccess: 'Message sent successfully! I will get back to you soon.',
      formError: 'Something went wrong. Please try again or use the fallback option.',
      formFallback: 'Send via email instead',
      errorRequired: 'This field is required',
      errorEmail: 'Please enter a valid email address',
      errorMinLength: 'Please provide more details (min. 20 characters)',
      responseTime: 'I usually respond within 1-2 business days.',
      scheduleCall: 'Prefer to talk?',
      scheduleFree: 'Free 15 min consultation',
      scheduleDesc: "Schedule a short video call where we'll discuss your project.",
      scheduleBtn: 'Schedule a Call',
    },

    // Service Pages
    servicePage: {
      cta: 'Get a Free Quote',
      ctaSecondary: 'See Portfolio',
      whatYouGet: 'What You Get',
      howItWorks: 'How It Works',
      ctaTitle: 'Ready to Start?',
      ctaSubtitle: "Let's discuss your project and find the perfect solution.",
      websites: {
        label: 'Web Development',
        title: 'Professional Business Websites',
        description: 'Custom-built, responsive websites that represent your brand and convert visitors into customers. Fast, secure, and SEO-optimized.',
        gradient: 'from-blue-500 to-cyan-500',
        features: [
          { title: 'Responsive Design', desc: 'Perfect display on all devices - mobile, tablet, and desktop.' },
          { title: 'SEO Optimization', desc: 'Built-in SEO best practices to help you rank higher in search results.' },
          { title: 'Fast Loading', desc: 'Optimized performance for the best user experience.' },
          { title: 'CMS Integration', desc: 'Easy content management with modern CMS solutions.' },
          { title: 'Analytics Setup', desc: 'Track visitors and conversions with Google Analytics integration.' },
          { title: 'SSL Security', desc: 'Secure HTTPS connection included with every website.' },
        ],
        process: [
          { title: 'Discovery', desc: 'We discuss your goals, target audience, and requirements.' },
          { title: 'Design', desc: 'Creating mockups and getting your approval before development.' },
          { title: 'Development', desc: 'Building your website with clean, maintainable code.' },
          { title: 'Launch', desc: 'Testing, optimization, and going live with ongoing support.' },
        ],
      },
      apps: {
        label: 'Web Applications',
        title: 'Custom Web Applications',
        description: 'Powerful, scalable web applications tailored to your business needs. From dashboards to SaaS platforms.',
        gradient: 'from-purple-500 to-pink-500',
        features: [
          { title: 'Custom Development', desc: 'Built from scratch to match your exact requirements.' },
          { title: 'User Authentication', desc: 'Secure login systems with role-based access control.' },
          { title: 'API Integration', desc: 'Connect with third-party services and your existing tools.' },
          { title: 'Real-time Features', desc: 'Live updates and notifications for dynamic experiences.' },
          { title: 'Database Design', desc: 'Efficient data structures for optimal performance.' },
          { title: 'Scalable Architecture', desc: 'Built to grow with your business needs.' },
        ],
        process: [
          { title: 'Requirements', desc: 'Deep dive into your business processes and needs.' },
          { title: 'Architecture', desc: 'Planning the technical foundation and user flows.' },
          { title: 'Development', desc: 'Agile development with regular demos and feedback.' },
          { title: 'Deployment', desc: 'Testing, security audit, and production deployment.' },
        ],
      },
      ecommerce: {
        label: 'E-commerce',
        title: 'Online Stores & E-commerce',
        description: 'High-converting online stores with seamless checkout, inventory management, and payment integration.',
        gradient: 'from-green-500 to-emerald-500',
        features: [
          { title: 'Product Management', desc: 'Easy-to-use interface for managing your product catalog.' },
          { title: 'Secure Checkout', desc: 'PCI-compliant payment processing with multiple options.' },
          { title: 'Inventory Tracking', desc: 'Real-time stock management and low-stock alerts.' },
          { title: 'Shipping Integration', desc: 'Automated shipping calculations and label printing.' },
          { title: 'Customer Accounts', desc: 'Order history, wishlists, and personalized experiences.' },
          { title: 'Analytics & Reports', desc: 'Sales tracking, conversion analytics, and insights.' },
        ],
        process: [
          { title: 'Strategy', desc: 'Understanding your products, target market, and goals.' },
          { title: 'Setup', desc: 'Platform selection, design, and product import.' },
          { title: 'Integration', desc: 'Payment gateways, shipping, and marketing tools.' },
          { title: 'Launch', desc: 'Testing, training, and going live with your store.' },
        ],
      },
      uiux: {
        label: 'UI/UX Design',
        title: 'UI/UX Design Services',
        description: 'User-centered design that delights customers and drives conversions. From wireframes to polished interfaces.',
        gradient: 'from-orange-500 to-red-500',
        features: [
          { title: 'User Research', desc: 'Understanding your users through interviews and analytics.' },
          { title: 'Wireframing', desc: 'Low-fidelity mockups to validate concepts quickly.' },
          { title: 'Visual Design', desc: 'Beautiful, on-brand interfaces that stand out.' },
          { title: 'Prototyping', desc: 'Interactive prototypes for testing and feedback.' },
          { title: 'Design Systems', desc: 'Consistent components and guidelines for scalability.' },
          { title: 'Usability Testing', desc: 'Validating designs with real users before development.' },
        ],
        process: [
          { title: 'Research', desc: 'User interviews, competitor analysis, and requirements.' },
          { title: 'Wireframes', desc: 'Sketching user flows and page layouts.' },
          { title: 'Design', desc: 'Creating high-fidelity designs and prototypes.' },
          { title: 'Handoff', desc: 'Developer-ready specs and ongoing collaboration.' },
        ],
      },
    },

    // Footer
    footer: {
      cta: "Let's build something great",
      ctaSubtitle: "Ready to start your next project? I'd love to hear from you.",
      ctaBtn: 'Get in touch',
      navigation: 'Navigation',
      connect: 'Connect',
      partners: 'Partners',
      rights: 'All rights reserved.',
      disclaimer: 'This website was created for training purposes only and does not constitute a commercial offer.',
      bio: "Full-stack developer passionate about creating beautiful, functional web experiences. Let's turn your ideas into reality.",
      privacyPolicy: 'Privacy Policy',
      cookies: 'Cookies',
    },

    // For Whom
    forWhom: {
      label: 'Who is this for?',
      title: 'Who I work with',
      subtitle: 'I help businesses of all sizes build their digital presence',
      startups: 'Startups',
      startupsDesc: 'Early-stage companies needing a strong web presence to attract users and investors.',
      smallBusiness: 'Small Businesses',
      smallBusinessDesc: 'Local businesses looking for professional websites that convert visitors into customers.',
      agencies: 'Agencies',
      agenciesDesc: 'Creative agencies needing reliable development partner for client projects.',
      entrepreneurs: 'Entrepreneurs',
      entrepreneursDesc: 'Solo founders and freelancers who need a portfolio or landing page that stands out.',
    },

    // Process
    process: {
      label: 'Process',
      title: 'How I work',
      subtitle: 'A clear, step-by-step approach to every project',
      step1Title: 'Discovery & Analysis',
      step1Desc: 'I get to know your business, goals and context. Together we define priorities and success criteria.',
      step2Title: 'Strategy & Design',
      step2Desc: 'I create concepts and mockups. We discuss, iterate and refine the details.',
      step3Title: 'Development & Implementation',
      step3Desc: 'I build the solution focusing on performance, security and scalability.',
      step4Title: 'Optimization & Support',
      step4Desc: 'I deploy to production, configure analytics and provide ongoing support.',
    },

    // Testimonials
    testimonials: {
      label: 'Testimonials',
      title: 'Trusted by clients',
      subtitle: "Real feedback from people I've worked with",
      quote1: 'Tomasz transformed our product portal into a tool that actually supports sales. Marketing finally has what it needed.',
      role1: 'CTO, Software House',
      quote2: 'He delivered the project quickly and without chaos. Clear process, concrete solutions instead of problems. I recommend him to everyone.',
      role2: 'Founder, SaaS B2B',
      quote3: 'The new website started generating inquiries from the first week. Simple panel and real results - exactly what I needed.',
      role3: 'Owner, Local Services',
    },

    // FAQ
    faq: {
      label: 'FAQ',
      title: 'Common questions',
      subtitle: 'Everything you need to know about working with me',
      q1: 'What does the collaboration process look like?',
      a1: 'We start with a free consultation where we discuss your goals and needs. Then I prepare a proposal and timeline. After approval, we go through strategy, design and implementation phases with regular check-ins.',
      q2: 'How long does a typical project take?',
      a2: 'Depending on scope: business website 2-4 weeks, e-commerce store 4-8 weeks, systems and automation 4-12 weeks. After an initial conversation, I\'ll provide an exact timeline.',
      q3: 'Do you offer post-launch support?',
      a3: 'Yes! I offer support packages including updates, monitoring, fixes and development. You can also use hourly support as needed.',
      q4: 'What technologies do you use?',
      a4: 'I work with React, Next.js, TypeScript, Node.js, Python and modern AI/ML tools. I choose technologies based on project specifics - not the other way around.',
      q5: 'How does billing work?',
      a5: 'I offer project-based billing (deposit + final payment) or hourly rates. For ongoing collaboration, I propose monthly packages. I issue VAT invoices.',
      q6: 'Do you work remotely?',
      a6: 'Yes, I work mainly remotely with clients from all over Poland and Europe. We communicate via Slack/Teams, and meetings are held via video call.',
    },

    // Blog
    blog: {
      label: 'Knowledge',
      title: 'Expert insights',
      subtitle: 'Practical guides on web development, pricing, and project management',
      readMore: 'Read article',
      article1Title: 'How much does a website cost in 2025? Complete pricing guide',
      article1Excerpt: 'Website pricing depends on many factors: complexity, features, design requirements. Learn what affects the cost and how to budget for your project.',
      category1: 'Pricing',
      readTime1: '8 min read',
      article2Title: 'React vs Next.js: Which one to choose for your project?',
      article2Excerpt: 'Both are great tools, but they serve different purposes. Learn when to use React SPA and when Next.js with SSR is the better choice.',
      category2: 'Technology',
      readTime2: '6 min read',
      article3Title: 'How I work: From first call to project launch',
      article3Excerpt: 'Transparency is key. Here is my complete development process: discovery, design, development, testing, and launch with ongoing support.',
      category3: 'Process',
      readTime3: '5 min read',
      article4Title: 'Why your website needs to be fast (and how to achieve it)',
      article4Excerpt: 'Page speed affects SEO, conversions, and user experience. Learn the key optimizations that make websites load in under 2 seconds.',
      category4: 'Performance',
      readTime4: '7 min read',
    },

    // Full Articles
    articles: {
      notFound: 'Article not found',
      backHome: 'Back to home',
      backToArticles: 'Back to all articles',
      ctaTitle: 'Ready to start your project?',
      ctaSubtitle: 'Let\'s discuss how I can help you achieve your goals.',
      ctaButton: 'Get in touch',
      pricing: {
        title: 'How much does a website cost in 2025? Complete pricing guide',
        category: 'Pricing',
        date: 'December 1, 2025',
        readTime: '8 min read',
        content: `
          <p class="text-xl text-cool-200 mb-8">One of the most common questions I receive from potential clients is: "How much will my website cost?" The honest answer is: it depends. But let me break down exactly what factors influence the price and give you realistic expectations.</p>

          <h2>Understanding website pricing</h2>
          <p>Website costs vary dramatically based on complexity, features, and who builds it. A simple landing page might cost €500-2,000, while a complex e-commerce platform could run €10,000-50,000 or more. Let's look at what drives these differences.</p>

          <h2>Key factors that affect price</h2>

          <h3>1. Type of website</h3>
          <p><strong>Landing page (€500-2,000):</strong> A single-page website focused on one goal - usually lead generation or product promotion. Perfect for startups validating an idea.</p>
          <p><strong>Business website (€2,000-8,000):</strong> 5-15 pages including home, about, services, portfolio, and contact. Most small businesses fall into this category.</p>
          <p><strong>E-commerce (€5,000-30,000):</strong> Online stores with product management, payment processing, shipping integration. Price scales with number of products and features.</p>
          <p><strong>Web application (€10,000+):</strong> Custom functionality like user dashboards, booking systems, or SaaS platforms. These require significant development time.</p>

          <h3>2. Design complexity</h3>
          <p>A template-based design costs less than custom design. Custom illustrations, animations, and unique layouts increase the price but also make your site stand out.</p>

          <h3>3. Content requirements</h3>
          <p>Do you have ready content, or do you need copywriting? Professional photography? These add to the budget but significantly impact conversion rates.</p>

          <h3>4. Technical requirements</h3>
          <p>Integrations with CRM, email marketing, payment gateways, or custom APIs all add complexity and cost.</p>

          <h2>What you're really paying for</h2>
          <p>When you hire a professional developer, you're not just paying for code. You're paying for:</p>
          <ul>
            <li><strong>Strategy</strong> - understanding your business goals and translating them into effective design</li>
            <li><strong>Experience</strong> - avoiding common mistakes that could cost you customers</li>
            <li><strong>Quality</strong> - clean code that's fast, secure, and maintainable</li>
            <li><strong>Support</strong> - someone to call when things break or need updating</li>
          </ul>

          <h2>How to budget for your website</h2>
          <p>Here's my advice: think about your website as an investment, not an expense. A well-designed website that converts visitors into customers pays for itself many times over.</p>
          <p>Start with your goals. What do you need the website to achieve? Then prioritize features based on what will have the biggest impact on those goals.</p>

          <h2>Red flags to watch for</h2>
          <p>Be cautious of quotes that seem too good to be true. Extremely low prices often mean:</p>
          <ul>
            <li>Template-only solutions with no customization</li>
            <li>Offshore teams with communication challenges</li>
            <li>Hidden costs that appear later</li>
            <li>Poor quality code that causes problems down the road</li>
          </ul>

          <h2>Conclusion</h2>
          <p>A professional business website typically costs between €2,000-8,000. E-commerce and web applications start at €5,000 and can go much higher depending on requirements.</p>
          <p>The best approach? Have an honest conversation with a developer about your goals and budget. A good developer will help you prioritize features and find the right solution for your needs.</p>
        `,
      },
      "react-nextjs": {
        title: 'React vs Next.js: Which one to choose for your project?',
        category: 'Technology',
        date: 'November 15, 2025',
        readTime: '6 min read',
        content: `
          <p class="text-xl text-cool-200 mb-8">If you're planning a new web project, you've probably heard about React and Next.js. Both are excellent tools, but they serve different purposes. Let me explain when to use each one.</p>

          <h2>What is React?</h2>
          <p>React is a JavaScript library for building user interfaces. Created by Facebook (now Meta), it's the most popular front-end tool in the world. React lets you build interactive, dynamic web applications using reusable components.</p>
          <p>A "pure" React application is a Single Page Application (SPA) - the entire app loads once, and navigation happens without page refreshes.</p>

          <h2>What is Next.js?</h2>
          <p>Next.js is a framework built on top of React. It adds features like server-side rendering (SSR), static site generation (SSG), file-based routing, and API routes. Think of it as React with superpowers.</p>

          <h2>Key differences</h2>

          <h3>Rendering</h3>
          <p><strong>React (SPA):</strong> Everything renders in the browser. The server sends a minimal HTML file, and JavaScript builds the page on the client side.</p>
          <p><strong>Next.js:</strong> Offers multiple rendering options - server-side rendering, static generation, or client-side rendering. You can even mix them within the same application.</p>

          <h3>SEO</h3>
          <p><strong>React:</strong> Challenging for SEO because search engines may not execute JavaScript properly. Requires additional configuration for good SEO.</p>
          <p><strong>Next.js:</strong> Excellent SEO out of the box. Server-rendered pages are fully visible to search engines.</p>

          <h3>Performance</h3>
          <p><strong>React:</strong> Initial load can be slow as the browser downloads and executes all JavaScript before showing content.</p>
          <p><strong>Next.js:</strong> Faster initial load with server rendering. Built-in image optimization, code splitting, and prefetching.</p>

          <h3>Routing</h3>
          <p><strong>React:</strong> Requires a third-party library like React Router.</p>
          <p><strong>Next.js:</strong> File-based routing built in. Create a file in the pages folder, and it automatically becomes a route.</p>

          <h2>When to choose React (SPA)</h2>
          <ul>
            <li>Building a dashboard or admin panel</li>
            <li>Internal tools that don't need SEO</li>
            <li>Highly interactive applications like design tools</li>
            <li>When you need complete control over the architecture</li>
          </ul>

          <h2>When to choose Next.js</h2>
          <ul>
            <li>Marketing websites that need good SEO</li>
            <li>E-commerce stores</li>
            <li>Blogs and content-heavy sites</li>
            <li>Applications that need fast initial load times</li>
            <li>When you want to ship faster with less configuration</li>
          </ul>

          <h2>My recommendation</h2>
          <p>For most business websites, I recommend Next.js. The SEO benefits, performance optimizations, and developer experience are hard to beat. The framework handles many complex decisions for you, letting you focus on building features.</p>
          <p>Use pure React when you're building internal tools, dashboards, or applications where SEO doesn't matter and you need maximum flexibility.</p>

          <h2>Conclusion</h2>
          <p>Both React and Next.js are excellent choices. Next.js is better for public-facing websites that need SEO and performance. React SPAs work great for dashboards and internal applications.</p>
          <p>The good news? Skills transfer between them. If you know React, learning Next.js is straightforward - it's still React at its core.</p>
        `,
      },
      process: {
        title: 'How I work: From first call to project launch',
        category: 'Process',
        date: 'November 1, 2025',
        readTime: '5 min read',
        content: `
          <p class="text-xl text-cool-200 mb-8">Transparency is key to successful projects. Here's exactly what happens when we work together - from the first conversation to launch day and beyond.</p>

          <h2>Phase 1: Discovery (Week 1)</h2>
          <p>Every project starts with understanding. During our initial call, I'll ask about:</p>
          <ul>
            <li>Your business goals - what should this website achieve?</li>
            <li>Your target audience - who are you trying to reach?</li>
            <li>Your competitors - what are they doing well or poorly?</li>
            <li>Your timeline and budget - let's be realistic from the start</li>
          </ul>
          <p>After this call, I create a detailed proposal including scope, timeline, and investment. No surprises later.</p>

          <h2>Phase 2: Design (Weeks 2-3)</h2>
          <p>Once we agree on the scope, I start with wireframes - simple layouts that show structure without visual design. This helps us nail the user flow before investing in detailed design.</p>
          <p>After wireframe approval, I create high-fidelity mockups in Figma. You'll see exactly how your site will look on desktop and mobile. We iterate until you're completely happy.</p>

          <h2>Phase 3: Development (Weeks 3-5)</h2>
          <p>This is where designs become reality. I build with modern technologies:</p>
          <ul>
            <li><strong>React / Next.js</strong> for the front-end</li>
            <li><strong>TypeScript</strong> for type-safe, maintainable code</li>
            <li><strong>Tailwind CSS</strong> for responsive, custom styling</li>
            <li><strong>Headless CMS</strong> for easy content management</li>
          </ul>
          <p>Throughout development, you'll have access to a staging site where you can see progress and provide feedback.</p>

          <h2>Phase 4: Review & Testing (Week 5-6)</h2>
          <p>Before launch, we thoroughly test:</p>
          <ul>
            <li>Cross-browser compatibility (Chrome, Firefox, Safari, Edge)</li>
            <li>Mobile responsiveness on real devices</li>
            <li>Page speed and Core Web Vitals</li>
            <li>Forms and integrations</li>
            <li>SEO basics (meta tags, sitemap, robots.txt)</li>
          </ul>
          <p>You'll review the final site and request any last adjustments.</p>

          <h2>Phase 5: Launch</h2>
          <p>Launch day is exciting! I handle all technical aspects:</p>
          <ul>
            <li>Domain configuration and SSL setup</li>
            <li>Deployment to production</li>
            <li>Analytics and tracking setup</li>
            <li>Performance monitoring</li>
          </ul>

          <h2>After launch: Ongoing support</h2>
          <p>The relationship doesn't end at launch. All projects include:</p>
          <ul>
            <li>30 days of free bug fixes and minor adjustments</li>
            <li>Documentation for content management</li>
            <li>Training session on how to use your new site</li>
          </ul>
          <p>I also offer monthly maintenance packages for updates, security patches, and ongoing improvements.</p>

          <h2>Communication throughout</h2>
          <p>You'll never wonder what's happening with your project. I provide:</p>
          <ul>
            <li>Weekly progress updates via email</li>
            <li>Slack/Teams access for quick questions</li>
            <li>Video calls for major decisions</li>
            <li>Clear timeline with milestones</li>
          </ul>

          <h2>Ready to start?</h2>
          <p>The first step is a free 15-minute consultation. We'll discuss your project, and I'll give you honest feedback on timeline and budget expectations.</p>
        `,
      },
      performance: {
        title: 'Why your website needs to be fast (and how to achieve it)',
        category: 'Performance',
        date: 'October 20, 2025',
        readTime: '7 min read',
        content: `
          <p class="text-xl text-cool-200 mb-8">Website speed isn't just a technical metric - it directly affects your business. Every second of delay costs you visitors, conversions, and revenue. Here's why speed matters and how to achieve it.</p>

          <h2>The business case for speed</h2>
          <p>The data is clear:</p>
          <ul>
            <li>53% of mobile users abandon sites that take over 3 seconds to load</li>
            <li>A 1-second delay reduces conversions by 7%</li>
            <li>Google uses page speed as a ranking factor</li>
            <li>Fast sites have lower bounce rates and higher engagement</li>
          </ul>
          <p>If your website generates €100,000/year in revenue, a 1-second speed improvement could mean €7,000 more annually.</p>

          <h2>What makes websites slow?</h2>

          <h3>1. Unoptimized images</h3>
          <p>Images are often the biggest culprits. A single unoptimized photo can be 5MB - that's larger than some entire websites should be.</p>

          <h3>2. Too much JavaScript</h3>
          <p>JavaScript is powerful but expensive. Every kilobyte needs to be downloaded, parsed, and executed. Bloated frameworks and unnecessary libraries add up quickly.</p>

          <h3>3. Slow server response</h3>
          <p>If your server takes 2 seconds to respond, your page can't possibly load in under 2 seconds. Hosting quality matters.</p>

          <h3>4. Render-blocking resources</h3>
          <p>CSS and JavaScript that block rendering prevent the page from showing content until they're fully loaded.</p>

          <h2>How to make your website fast</h2>

          <h3>Image optimization</h3>
          <ul>
            <li>Use modern formats like WebP (30-50% smaller than JPEG)</li>
            <li>Implement responsive images with srcset</li>
            <li>Lazy load images below the fold</li>
            <li>Compress images without visible quality loss</li>
          </ul>

          <h3>Minimize JavaScript</h3>
          <ul>
            <li>Only load what you need</li>
            <li>Code split - load features when they're needed</li>
            <li>Use modern, lightweight frameworks</li>
            <li>Remove unused code (tree shaking)</li>
          </ul>

          <h3>Optimize delivery</h3>
          <ul>
            <li>Use a CDN to serve assets from locations near your users</li>
            <li>Enable compression (gzip or Brotli)</li>
            <li>Set proper caching headers</li>
            <li>Consider static site generation for content that doesn't change often</li>
          </ul>

          <h3>Improve server response</h3>
          <ul>
            <li>Choose quality hosting (Vercel, Netlify, or quality VPS)</li>
            <li>Use server-side caching</li>
            <li>Optimize database queries</li>
            <li>Consider edge computing for global audiences</li>
          </ul>

          <h2>Measuring performance</h2>
          <p>Use these tools to measure and monitor:</p>
          <ul>
            <li><strong>Google PageSpeed Insights</strong> - Lab and field data with specific recommendations</li>
            <li><strong>Lighthouse</strong> - Comprehensive audits built into Chrome DevTools</li>
            <li><strong>WebPageTest</strong> - Detailed waterfall analysis from different locations</li>
            <li><strong>Core Web Vitals</strong> - Google's key metrics for user experience</li>
          </ul>

          <h2>Core Web Vitals explained</h2>
          <p>Google's Core Web Vitals are the metrics that matter most:</p>
          <ul>
            <li><strong>LCP (Largest Contentful Paint)</strong> - Should be under 2.5 seconds. Measures when the main content becomes visible.</li>
            <li><strong>FID (First Input Delay)</strong> - Should be under 100ms. Measures how quickly the page responds to interaction.</li>
            <li><strong>CLS (Cumulative Layout Shift)</strong> - Should be under 0.1. Measures visual stability - does content jump around?</li>
          </ul>

          <h2>My approach to performance</h2>
          <p>Every website I build is optimized for speed from the start:</p>
          <ul>
            <li>Modern frameworks with automatic code splitting</li>
            <li>Automatic image optimization with Next.js Image component</li>
            <li>Static generation where possible</li>
            <li>Minimal JavaScript bundles</li>
            <li>Performance testing before every launch</li>
          </ul>

          <h2>Conclusion</h2>
          <p>Website speed is not optional in 2025. It affects user experience, SEO, and your bottom line. The good news? With modern tools and best practices, building fast websites is easier than ever.</p>
          <p>If your current website is slow, there's almost always room for improvement. Sometimes small optimizations yield dramatic results.</p>
        `,
      },
    },

    // Newsletter
    newsletter: {
      label: 'Newsletter',
      title: 'Stay in the loop',
      subtitle: 'Get practical tips on web development, design trends, and tech insights. No spam, unsubscribe anytime.',
      placeholder: 'Enter your email',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      success: 'Thank you! Check your email inbox.',
      error: 'Something went wrong. Please try again.',
      disclaimer: 'By subscribing, you agree to receive emails. Unsubscribe anytime.',
      benefit1: 'Weekly tips',
      benefit2: 'Free resources',
      benefit3: 'Early access',
    },

    // Cookies
    cookies: {
      message: 'This website uses cookies to improve your experience. By continuing to use this site, you accept our',
      privacyPolicy: 'Privacy Policy',
      accept: 'Accept',
      decline: 'Decline',
    },
  },

  pl: {
    // Navigation
    nav: {
      home: 'Start',
      about: 'O mnie',
      services: 'Usługi',
      portfolio: 'Portfolio',
      pricing: 'Cennik',
      contact: 'Kontakt',
      bookCall: 'Umów rozmowę',
    },

    // Hero
    hero: {
      greeting: 'Cześć, jestem',
      name: 'Tomasz Chromy',
      role: 'Full-Stack Developer',
      h1Main: 'Nowoczesne Strony',
      h1Highlight: '& Aplikacje Webowe',
      h2Services: 'Strony Firmowe • E-commerce • Landing Pages • UI/UX Design',
      subtitle: 'Tworzę nowoczesne aplikacje webowe, które pomagają firmom rosnąć. Czysty kod, piękny design, realne rezultaty.',
      cta: 'Rozpocznij projekt',
      ctaSecondary: 'Zobacz portfolio',
      experience: 'Lat doświadczenia',
      projects: 'Projektów',
    },

    // About
    about: {
      label: 'O mnie',
      title: 'Pasja do',
      titleHighlight: 'tworzenia rozwiązań',
      intro: 'Cześć, jestem',
      introName: 'Tomasz Chromy',
      introText: '— full-stack developer z pasją do czystego kodu i pięknych interfejsów.',
      description: 'Specjalizuję się w tworzeniu nowoczesnych aplikacji webowych używając React, Next.js i Node.js. Każdy projekt to okazja do rozwiązania realnych problemów biznesowych.',
      yearsExp: 'Lat doświadczenia',
      projectsCompleted: 'Zrealizowanych projektów',
      satisfaction: 'Zadowolonych klientów',
    },

    // Services
    services: {
      label: 'Usługi',
      title: 'Co mogę dla Ciebie zbudować',
      subtitle: 'Kompleksowe usługi web developmentu, od koncepcji po wdrożenie',
      webDev: 'Strony internetowe',
      webDevDesc: 'Nowoczesne, szybkie i responsywne strony zbudowane w React i Next.js. Czysty kod, który skaluje się.',
      fullStack: 'Aplikacje Full-Stack',
      fullStackDesc: 'Kompletne aplikacje webowe z solidnym backendem. Od bazy danych po deployment.',
      uiux: 'UI/UX Design',
      uiuxDesc: 'Projektowanie zorientowane na użytkownika, które wygląda świetnie i konwertuje. Od prototypów Figma do pixel-perfect kodu.',
      uiuxFeature1: 'Responsywny design',
      uiuxFeature2: 'Dostępność',
      uiuxFeature3: 'Systemy designu',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Sklepy internetowe, które konwertują. Integracja płatności, zarządzanie magazynem i analityka.',
    },

    // Portfolio
    portfolio: {
      label: 'Portfolio',
      title: 'Wybrane',
      titleHighlight: 'projekty',
      subtitle: 'Realne rozwiązania dla realnych biznesów',
      cta: 'Masz pomysł na projekt?',
      problemLabel: 'Problem',
      solutionLabel: 'Rozwiązanie',
      resultLabel: 'Efekt',
      // Project 1
      project1Tag: 'Strategia i System',
      project1Title: 'System automatyzacji dla software house',
      project1Problem: 'Zespół tracił godziny na manualne raporty i rozproszone śledzenie projektów.',
      project1Solution: 'Dedykowany dashboard z integracją API i automatycznymi workflow.',
      project1Result: '40% więcej efektywności, 60% mniej czasu na raporty.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Efektywność zespołu',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Czas raportów',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Sklep internetowy premium',
      project2Problem: 'Niska konwersja i wolne ładowanie strony obniżały sprzedaż.',
      project2Solution: 'Przebudowa w Next.js, optymalizacja checkout i lazy-loading.',
      project2Result: '85% wzrost konwersji, 2.1s czas ładowania.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Konwersja',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Czas ładowania',
      // Project 3
      project3Tag: 'Landing i Wzrost',
      project3Title: 'Landing page dla kampanii SaaS',
      project3Problem: 'Reklamy generowały ruch, ale landing page nie konwertował.',
      project3Solution: 'Redesign z jasnym CTA, testy A/B i analityka.',
      project3Result: '12% CTR, 3.2% wskaźnik konwersji.',
      project3Metric1Value: '12%',
      project3Metric1Label: 'CTR',
      project3Metric2Value: '3.2%',
      project3Metric2Label: 'Wskaźnik konwersji',
    },

    // Pricing
    pricing: {
      label: 'Cennik',
      title: 'Prosty, przejrzysty cennik',
      subtitle: 'Wybierz plan najlepszy dla Twojego projektu',
      consultation: 'Konsultacja',
      consultationPrice: 'Bezpłatnie',
      consultationPeriod: '30 min',
      consultationNote: 'Spotkajmy się i omówmy Twój projekt.',
      consultationPoints: [
        'Analiza potrzeb i celów',
        'Wstępna propozycja rozwiązania',
        'Szacunek budżetu i harmonogramu',
      ],
      consultationCta: 'Umów rozmowę',
      project: 'Projekt',
      projectPrice: 'od 5 000 zł',
      projectPeriod: 'jednorazowo',
      projectNote: 'Kompleksowe rozwiązanie od A do Z.',
      projectPoints: [
        'Strategia + design + wdrożenie',
        'Pełna dokumentacja i szkolenie',
        '30 dni wsparcia po uruchomieniu',
        'Gwarancja jakości',
      ],
      projectCta: 'Rozpocznij projekt',
      projectBadge: 'Najpopularniejszy',
      partnership: 'Współpraca',
      partnershipPrice: 'od 3 000 zł',
      partnershipPeriod: 'miesięcznie',
      partnershipNote: 'Ciągłe wsparcie i rozwój.',
      partnershipPoints: [
        'Dedykowane godziny miesięczne',
        'Priorytetowe wsparcie',
        'Regularne optymalizacje',
        'Raporty i analityka',
      ],
      partnershipCta: 'Porozmawiajmy',
    },

    // Contact
    contact: {
      label: 'Kontakt',
      title: 'Zbudujmy razem coś',
      titleHighlight: 'niesamowitego',
      subtitle: 'Masz pomysł na projekt? Chętnie o nim posłucham.',
      directContact: 'Kontakt bezpośredni',
      formFullName: 'Imię i nazwisko',
      formFullNamePlaceholder: 'Jan Kowalski',
      formEmail: 'Email',
      formEmailPlaceholder: 'jan@firma.pl',
      formCompany: 'Firma (opcjonalnie)',
      formCompanyPlaceholder: 'Nazwa firmy',
      formProject: 'Opowiedz o projekcie',
      formProjectPlaceholder: 'Krótko opisz czego potrzebujesz...',
      formProjectHint: 'Min. 20 znaków',
      formSubmit: 'Wyślij wiadomość',
      formSending: 'Wysyłanie...',
      formSuccess: 'Wiadomość wysłana! Odezwę się wkrótce.',
      formError: 'Coś poszło nie tak. Spróbuj ponownie lub użyj alternatywnej opcji.',
      formFallback: 'Wyślij przez email',
      errorRequired: 'To pole jest wymagane',
      errorEmail: 'Wprowadź poprawny adres email',
      errorMinLength: 'Podaj więcej szczegółów (min. 20 znaków)',
      responseTime: 'Zwykle odpowiadam w ciągu 1-2 dni roboczych.',
      scheduleCall: 'Wolisz porozmawiać?',
      scheduleFree: 'Bezpłatna 15 min konsultacja',
      scheduleDesc: 'Umów krótką rozmowę wideo, podczas której omówimy Twój projekt.',
      scheduleBtn: 'Umów rozmowę',
    },

    // Service Pages
    servicePage: {
      cta: 'Bezpłatna wycena',
      ctaSecondary: 'Zobacz portfolio',
      whatYouGet: 'Co otrzymujesz',
      howItWorks: 'Jak to działa',
      ctaTitle: 'Gotowy, aby zacząć?',
      ctaSubtitle: 'Omówmy Twój projekt i znajdźmy idealne rozwiązanie.',
      websites: {
        label: 'Strony internetowe',
        title: 'Profesjonalne strony firmowe',
        description: 'Responsywne strony internetowe, które reprezentują Twoją markę i zamieniają odwiedzających w klientów. Szybkie, bezpieczne i zoptymalizowane pod SEO.',
        gradient: 'from-blue-500 to-cyan-500',
        features: [
          { title: 'Responsywny design', desc: 'Idealne wyświetlanie na wszystkich urządzeniach.' },
          { title: 'Optymalizacja SEO', desc: 'Wbudowane najlepsze praktyki SEO dla wyższych pozycji.' },
          { title: 'Szybkie ładowanie', desc: 'Zoptymalizowana wydajność dla najlepszego doświadczenia.' },
          { title: 'Integracja CMS', desc: 'Łatwe zarządzanie treścią z nowoczesnymi systemami CMS.' },
          { title: 'Konfiguracja analityki', desc: 'Śledzenie odwiedzających i konwersji z Google Analytics.' },
          { title: 'Bezpieczeństwo SSL', desc: 'Bezpieczne połączenie HTTPS w każdej stronie.' },
        ],
        process: [
          { title: 'Odkrywanie', desc: 'Omawiamy cele, grupę docelową i wymagania.' },
          { title: 'Projektowanie', desc: 'Tworzenie makiet i uzyskanie Twojej akceptacji.' },
          { title: 'Programowanie', desc: 'Budowanie strony z czystym, łatwym w utrzymaniu kodem.' },
          { title: 'Uruchomienie', desc: 'Testowanie, optymalizacja i start z ciągłym wsparciem.' },
        ],
      },
      apps: {
        label: 'Aplikacje webowe',
        title: 'Dedykowane aplikacje webowe',
        description: 'Wydajne, skalowalne aplikacje webowe dostosowane do potrzeb Twojego biznesu. Od dashboardów po platformy SaaS.',
        gradient: 'from-purple-500 to-pink-500',
        features: [
          { title: 'Dedykowane rozwiązania', desc: 'Stworzone od podstaw pod Twoje dokładne wymagania.' },
          { title: 'Uwierzytelnianie', desc: 'Bezpieczne systemy logowania z kontrolą dostępu.' },
          { title: 'Integracja API', desc: 'Połączenie z usługami zewnętrznymi i Twoimi narzędziami.' },
          { title: 'Funkcje real-time', desc: 'Aktualizacje na żywo i powiadomienia.' },
          { title: 'Projektowanie bazy danych', desc: 'Efektywne struktury danych dla optymalnej wydajności.' },
          { title: 'Skalowalna architektura', desc: 'Zbudowane, aby rosnąć z Twoim biznesem.' },
        ],
        process: [
          { title: 'Wymagania', desc: 'Dogłębna analiza procesów biznesowych i potrzeb.' },
          { title: 'Architektura', desc: 'Planowanie fundamentów technicznych i flow użytkownika.' },
          { title: 'Programowanie', desc: 'Zwinne programowanie z regularnymi demo i feedbackiem.' },
          { title: 'Wdrożenie', desc: 'Testowanie, audyt bezpieczeństwa i deploy produkcyjny.' },
        ],
      },
      ecommerce: {
        label: 'E-commerce',
        title: 'Sklepy internetowe',
        description: 'Wysoko konwertujące sklepy online z płynnym checkout, zarządzaniem magazynem i integracją płatności.',
        gradient: 'from-green-500 to-emerald-500',
        features: [
          { title: 'Zarządzanie produktami', desc: 'Łatwy w obsłudze interfejs do zarządzania katalogiem.' },
          { title: 'Bezpieczny checkout', desc: 'Zgodna z PCI obsługa płatności z wieloma opcjami.' },
          { title: 'Śledzenie magazynu', desc: 'Zarządzanie stanem w czasie rzeczywistym.' },
          { title: 'Integracja wysyłki', desc: 'Automatyczne kalkulacje i drukowanie etykiet.' },
          { title: 'Konta klientów', desc: 'Historia zamówień, wishlisty i personalizacja.' },
          { title: 'Analityka i raporty', desc: 'Śledzenie sprzedaży, analityka konwersji i insights.' },
        ],
        process: [
          { title: 'Strategia', desc: 'Zrozumienie produktów, rynku docelowego i celów.' },
          { title: 'Konfiguracja', desc: 'Wybór platformy, design i import produktów.' },
          { title: 'Integracja', desc: 'Bramy płatności, wysyłka i narzędzia marketingowe.' },
          { title: 'Uruchomienie', desc: 'Testowanie, szkolenie i start sklepu.' },
        ],
      },
      uiux: {
        label: 'UI/UX Design',
        title: 'Usługi UI/UX Design',
        description: 'Projektowanie skoncentrowane na użytkowniku, które zachwyca klientów i napędza konwersje.',
        gradient: 'from-orange-500 to-red-500',
        features: [
          { title: 'Badania użytkowników', desc: 'Zrozumienie użytkowników przez wywiady i analitykę.' },
          { title: 'Wireframing', desc: 'Makiety niskiej jakości do szybkiej walidacji konceptów.' },
          { title: 'Projektowanie wizualne', desc: 'Piękne, spójne z marką interfejsy.' },
          { title: 'Prototypowanie', desc: 'Interaktywne prototypy do testowania i feedbacku.' },
          { title: 'Systemy designu', desc: 'Spójne komponenty i wytyczne dla skalowalności.' },
          { title: 'Testy użyteczności', desc: 'Walidacja designów z prawdziwymi użytkownikami.' },
        ],
        process: [
          { title: 'Badania', desc: 'Wywiady, analiza konkurencji i wymagania.' },
          { title: 'Wireframy', desc: 'Szkicowanie flow użytkownika i layoutów stron.' },
          { title: 'Design', desc: 'Tworzenie designów wysokiej jakości i prototypów.' },
          { title: 'Przekazanie', desc: 'Specyfikacje dla developerów i ciągła współpraca.' },
        ],
      },
    },

    // Footer
    footer: {
      cta: 'Zbudujmy razem coś wielkiego',
      ctaSubtitle: 'Gotowy na kolejny projekt? Chętnie o nim posłucham.',
      ctaBtn: 'Skontaktuj się',
      navigation: 'Nawigacja',
      connect: 'Social media',
      partners: 'Partnerzy',
      rights: 'Wszelkie prawa zastrzeżone.',
      disclaimer: 'Ta strona została stworzona wyłącznie w celach szkoleniowych i nie stanowi oferty handlowej.',
      bio: 'Full-stack developer z pasją do tworzenia pięknych, funkcjonalnych stron internetowych. Zamieńmy Twoje pomysły w rzeczywistość.',
      privacyPolicy: 'Polityka Prywatności',
      cookies: 'Cookies',
    },

    // For Whom
    forWhom: {
      label: 'Dla kogo?',
      title: 'Z kim pracuję',
      subtitle: 'Pomagam firmom każdej wielkości budować ich cyfrową obecność',
      startups: 'Startupy',
      startupsDesc: 'Firmy na wczesnym etapie rozwoju potrzebujące silnej obecności w sieci, aby przyciągnąć użytkowników i inwestorów.',
      smallBusiness: 'Małe firmy',
      smallBusinessDesc: 'Lokalne firmy szukające profesjonalnych stron, które zamieniają odwiedzających w klientów.',
      agencies: 'Agencje',
      agenciesDesc: 'Agencje kreatywne potrzebujące niezawodnego partnera deweloperskiego do projektów klientów.',
      entrepreneurs: 'Przedsiębiorcy',
      entrepreneursDesc: 'Soloprzedsiębiorcy i freelancerzy, którzy potrzebują portfolio lub landing page, który wyróżnia się.',
    },

    // Process
    process: {
      label: 'Proces',
      title: 'Jak pracuję',
      subtitle: 'Jasne, krok po kroku podejście do każdego projektu',
      step1Title: 'Odkrywanie i analiza',
      step1Desc: 'Poznaję Twój biznes, cele i kontekst. Wspólnie definiujemy priorytety i kryteria sukcesu.',
      step2Title: 'Strategia i design',
      step2Desc: 'Tworzę koncepcje i makiety. Dyskutujemy, iterujemy i dopracowujemy szczegóły.',
      step3Title: 'Rozwój i wdrożenie',
      step3Desc: 'Buduję rozwiązanie skupiając się na wydajności, bezpieczeństwie i skalowalności.',
      step4Title: 'Optymalizacja i wsparcie',
      step4Desc: 'Wdrażam na produkcję, konfiguruję analitykę i zapewniam ciągłe wsparcie.',
    },

    // Testimonials
    testimonials: {
      label: 'Opinie',
      title: 'Zaufali mi klienci',
      subtitle: 'Prawdziwe opinie osób, z którymi współpracowałem',
      quote1: 'Tomasz przekształcił nasz portal produktowy w narzędzie, które faktycznie wspiera sprzedaż. Marketing w końcu ma to, czego potrzebował.',
      role1: 'CTO, Software House',
      quote2: 'Projekt zrealizował szybko i bez chaosu. Jasny proces, konkretne rozwiązania zamiast problemów. Polecam każdemu.',
      role2: 'Założycielka, SaaS B2B',
      quote3: 'Nowa strona zaczęła generować zapytania od pierwszego tygodnia. Prosty panel i realne wyniki - dokładnie to, czego potrzebowałem.',
      role3: 'Właściciel, Usługi lokalne',
    },

    // FAQ
    faq: {
      label: 'FAQ',
      title: 'Często zadawane pytania',
      subtitle: 'Wszystko, co musisz wiedzieć o współpracy ze mną',
      q1: 'Jak wygląda proces współpracy?',
      a1: 'Zaczynamy od bezpłatnej konsultacji, podczas której omawiamy Twoje cele i potrzeby. Następnie przygotowuję propozycję i harmonogram. Po akceptacji przechodzimy przez fazy strategii, designu i wdrożenia z regularnymi spotkaniami.',
      q2: 'Jak długo trwa typowy projekt?',
      a2: 'W zależności od zakresu: strona firmowa 2-4 tygodnie, sklep e-commerce 4-8 tygodni, systemy i automatyzacja 4-12 tygodni. Po wstępnej rozmowie podam dokładny harmonogram.',
      q3: 'Czy oferujesz wsparcie po uruchomieniu?',
      a3: 'Tak! Oferuję pakiety wsparcia obejmujące aktualizacje, monitoring, poprawki i rozwój. Możesz też korzystać ze wsparcia godzinowego w razie potrzeby.',
      q4: 'Jakich technologii używasz?',
      a4: 'Pracuję z React, Next.js, TypeScript, Node.js, Python i nowoczesnymi narzędziami AI/ML. Wybieram technologie na podstawie specyfiki projektu - nie odwrotnie.',
      q5: 'Jak wygląda rozliczenie?',
      a5: 'Oferuję rozliczenie projektowe (zaliczka + płatność końcowa) lub stawki godzinowe. Przy ciągłej współpracy proponuję pakiety miesięczne. Wystawiam faktury VAT.',
      q6: 'Czy pracujesz zdalnie?',
      a6: 'Tak, pracuję głównie zdalnie z klientami z całej Polski i Europy. Komunikujemy się przez Slack/Teams, a spotkania odbywają się przez wideorozmowę.',
    },

    // Blog
    blog: {
      label: 'Wiedza',
      title: 'Eksperckie artykuły',
      subtitle: 'Praktyczne poradniki o web developmencie, wycenach i zarządzaniu projektami',
      readMore: 'Czytaj artykuł',
      article1Title: 'Ile kosztuje strona internetowa w 2025? Kompletny przewodnik cenowy',
      article1Excerpt: 'Cena strony zależy od wielu czynników: złożoności, funkcji, wymagań designu. Dowiedz się, co wpływa na koszt i jak zaplanować budżet.',
      category1: 'Wyceny',
      readTime1: '8 min czytania',
      article2Title: 'React vs Next.js: Który wybrać do Twojego projektu?',
      article2Excerpt: 'Oba są świetnymi narzędziami, ale służą różnym celom. Dowiedz się, kiedy użyć React SPA, a kiedy Next.js z SSR jest lepszym wyborem.',
      category2: 'Technologia',
      readTime2: '6 min czytania',
      article3Title: 'Jak pracuję: Od pierwszej rozmowy do uruchomienia projektu',
      article3Excerpt: 'Transparentność jest kluczowa. Oto mój kompletny proces: odkrywanie, projektowanie, programowanie, testowanie i uruchomienie ze wsparciem.',
      category3: 'Proces',
      readTime3: '5 min czytania',
      article4Title: 'Dlaczego Twoja strona musi być szybka (i jak to osiągnąć)',
      article4Excerpt: 'Szybkość strony wpływa na SEO, konwersje i doświadczenie użytkownika. Poznaj kluczowe optymalizacje, które sprawiają, że strony ładują się w mniej niż 2 sekundy.',
      category4: 'Wydajność',
      readTime4: '7 min czytania',
    },

    // Full Articles
    articles: {
      notFound: 'Artykuł nie znaleziony',
      backHome: 'Powrót do strony głównej',
      backToArticles: 'Powrót do wszystkich artykułów',
      ctaTitle: 'Gotowy, aby rozpocząć projekt?',
      ctaSubtitle: 'Porozmawiajmy o tym, jak mogę pomóc Ci osiągnąć Twoje cele.',
      ctaButton: 'Skontaktuj się',
      pricing: {
        title: 'Ile kosztuje strona internetowa w 2025? Kompletny przewodnik cenowy',
        category: 'Wyceny',
        date: '1 grudnia 2025',
        readTime: '8 min czytania',
        content: `
          <p class="text-xl text-cool-200 mb-8">Jedno z najczęstszych pytań, które otrzymuję od potencjalnych klientów, brzmi: "Ile będzie kosztować moja strona?" Szczera odpowiedź brzmi: to zależy. Ale pozwól, że dokładnie wyjaśnię, jakie czynniki wpływają na cenę i dam Ci realistyczne oczekiwania.</p>

          <h2>Zrozumienie wyceny stron internetowych</h2>
          <p>Koszty stron internetowych różnią się dramatycznie w zależności od złożoności, funkcji i tego, kto je tworzy. Prosta strona landing page może kosztować 2 000-8 000 zł, podczas gdy złożona platforma e-commerce może wynieść 40 000-200 000 zł lub więcej. Przyjrzyjmy się, co powoduje te różnice.</p>

          <h2>Kluczowe czynniki wpływające na cenę</h2>

          <h3>1. Typ strony internetowej</h3>
          <p><strong>Landing page (2 000-8 000 zł):</strong> Jednostronicowa witryna skupiona na jednym celu - zazwyczaj generowaniu leadów lub promocji produktu. Idealna dla startupów testujących pomysł.</p>
          <p><strong>Strona firmowa (8 000-35 000 zł):</strong> 5-15 stron, w tym strona główna, o nas, usługi, portfolio i kontakt. Większość małych firm mieści się w tej kategorii.</p>
          <p><strong>E-commerce (20 000-120 000 zł):</strong> Sklepy internetowe z zarządzaniem produktami, obsługą płatności, integracją wysyłki. Cena skaluje się z liczbą produktów i funkcji.</p>
          <p><strong>Aplikacja webowa (40 000 zł+):</strong> Niestandardowa funkcjonalność jak panele użytkowników, systemy rezerwacji lub platformy SaaS. Wymagają znacznego czasu programowania.</p>

          <h3>2. Złożoność projektu</h3>
          <p>Design oparty na szablonie kosztuje mniej niż projekt niestandardowy. Niestandardowe ilustracje, animacje i unikalne układy zwiększają cenę, ale także wyróżniają Twoją stronę.</p>

          <h3>3. Wymagania dotyczące treści</h3>
          <p>Czy masz gotową treść, czy potrzebujesz copywritingu? Profesjonalnej fotografii? To zwiększa budżet, ale znacząco wpływa na współczynniki konwersji.</p>

          <h3>4. Wymagania techniczne</h3>
          <p>Integracje z CRM, email marketingiem, bramkami płatności lub niestandardowymi API zwiększają złożoność i koszt.</p>

          <h2>Za co naprawdę płacisz</h2>
          <p>Zatrudniając profesjonalnego programistę, nie płacisz tylko za kod. Płacisz za:</p>
          <ul>
            <li><strong>Strategię</strong> - zrozumienie Twoich celów biznesowych i przełożenie ich na efektywny design</li>
            <li><strong>Doświadczenie</strong> - unikanie typowych błędów, które mogłyby kosztować Cię klientów</li>
            <li><strong>Jakość</strong> - czysty kod, który jest szybki, bezpieczny i łatwy w utrzymaniu</li>
            <li><strong>Wsparcie</strong> - kogoś, do kogo zadzwonić, gdy coś się zepsuje lub wymaga aktualizacji</li>
          </ul>

          <h2>Jak zaplanować budżet na stronę</h2>
          <p>Oto moja rada: myśl o swojej stronie jako o inwestycji, a nie wydatku. Dobrze zaprojektowana strona, która zamienia odwiedzających w klientów, zwraca się wielokrotnie.</p>
          <p>Zacznij od swoich celów. Co strona ma osiągnąć? Następnie priorytetyzuj funkcje na podstawie tego, co będzie miało największy wpływ na te cele.</p>

          <h2>Czerwone flagi, na które warto uważać</h2>
          <p>Bądź ostrożny z wycenami, które wydają się zbyt dobre, aby być prawdziwe. Ekstremalnie niskie ceny często oznaczają:</p>
          <ul>
            <li>Rozwiązania tylko na szablonach bez customizacji</li>
            <li>Zespoły offshore z problemami komunikacyjnymi</li>
            <li>Ukryte koszty, które pojawiają się później</li>
            <li>Kod słabej jakości, który powoduje problemy w przyszłości</li>
          </ul>

          <h2>Podsumowanie</h2>
          <p>Profesjonalna strona firmowa kosztuje zazwyczaj między 8 000 a 35 000 zł. E-commerce i aplikacje webowe zaczynają się od 20 000 zł i mogą być znacznie droższe w zależności od wymagań.</p>
          <p>Najlepsze podejście? Przeprowadź szczerą rozmowę z programistą o swoich celach i budżecie. Dobry programista pomoże Ci ustalić priorytety funkcji i znaleźć odpowiednie rozwiązanie dla Twoich potrzeb.</p>
        `,
      },
      "react-nextjs": {
        title: 'React vs Next.js: Który wybrać do Twojego projektu?',
        category: 'Technologia',
        date: '15 listopada 2025',
        readTime: '6 min czytania',
        content: `
          <p class="text-xl text-cool-200 mb-8">Jeśli planujesz nowy projekt webowy, prawdopodobnie słyszałeś o React i Next.js. Oba są doskonałymi narzędziami, ale służą różnym celom. Pozwól, że wyjaśnię, kiedy używać każdego z nich.</p>

          <h2>Czym jest React?</h2>
          <p>React to biblioteka JavaScript do budowania interfejsów użytkownika. Stworzona przez Facebook (teraz Meta), jest najpopularniejszym narzędziem front-endowym na świecie. React pozwala budować interaktywne, dynamiczne aplikacje webowe używając komponentów wielokrotnego użytku.</p>
          <p>"Czysty" React to aplikacja Single Page Application (SPA) - cała aplikacja ładuje się raz, a nawigacja odbywa się bez odświeżania strony.</p>

          <h2>Czym jest Next.js?</h2>
          <p>Next.js to framework zbudowany na bazie React. Dodaje funkcje takie jak server-side rendering (SSR), generowanie statycznych stron (SSG), routing oparty na plikach i trasy API. Pomyśl o tym jak o React z supermocami.</p>

          <h2>Kluczowe różnice</h2>

          <h3>Renderowanie</h3>
          <p><strong>React (SPA):</strong> Wszystko renderuje się w przeglądarce. Serwer wysyła minimalny plik HTML, a JavaScript buduje stronę po stronie klienta.</p>
          <p><strong>Next.js:</strong> Oferuje wiele opcji renderowania - server-side rendering, generowanie statyczne lub renderowanie po stronie klienta. Możesz nawet mieszać je w tej samej aplikacji.</p>

          <h3>SEO</h3>
          <p><strong>React:</strong> Wyzwanie dla SEO, ponieważ wyszukiwarki mogą nie wykonywać JavaScript poprawnie. Wymaga dodatkowej konfiguracji dla dobrego SEO.</p>
          <p><strong>Next.js:</strong> Doskonałe SEO od razu po wyjęciu z pudełka. Strony renderowane na serwerze są w pełni widoczne dla wyszukiwarek.</p>

          <h3>Wydajność</h3>
          <p><strong>React:</strong> Początkowe ładowanie może być wolne, ponieważ przeglądarka pobiera i wykonuje cały JavaScript przed pokazaniem treści.</p>
          <p><strong>Next.js:</strong> Szybsze początkowe ładowanie dzięki renderowaniu na serwerze. Wbudowana optymalizacja obrazów, dzielenie kodu i prefetching.</p>

          <h3>Routing</h3>
          <p><strong>React:</strong> Wymaga biblioteki zewnętrznej jak React Router.</p>
          <p><strong>Next.js:</strong> Wbudowany routing oparty na plikach. Stwórz plik w folderze pages, a automatycznie stanie się trasą.</p>

          <h2>Kiedy wybrać React (SPA)</h2>
          <ul>
            <li>Budowanie dashboardu lub panelu administracyjnego</li>
            <li>Narzędzia wewnętrzne, które nie potrzebują SEO</li>
            <li>Wysoce interaktywne aplikacje jak narzędzia projektowe</li>
            <li>Gdy potrzebujesz pełnej kontroli nad architekturą</li>
          </ul>

          <h2>Kiedy wybrać Next.js</h2>
          <ul>
            <li>Strony marketingowe, które potrzebują dobrego SEO</li>
            <li>Sklepy e-commerce</li>
            <li>Blogi i strony z dużą ilością treści</li>
            <li>Aplikacje wymagające szybkiego początkowego ładowania</li>
            <li>Gdy chcesz szybciej dostarczać z mniejszą konfiguracją</li>
          </ul>

          <h2>Moja rekomendacja</h2>
          <p>Dla większości stron firmowych polecam Next.js. Korzyści SEO, optymalizacje wydajności i doświadczenie programistyczne są trudne do pobicia. Framework obsługuje wiele skomplikowanych decyzji za Ciebie, pozwalając skupić się na budowaniu funkcji.</p>
          <p>Używaj czystego React, gdy budujesz narzędzia wewnętrzne, dashboardy lub aplikacje, gdzie SEO nie ma znaczenia i potrzebujesz maksymalnej elastyczności.</p>

          <h2>Podsumowanie</h2>
          <p>Zarówno React, jak i Next.js to doskonałe wybory. Next.js jest lepszy dla publicznych stron, które potrzebują SEO i wydajności. React SPA świetnie sprawdza się w dashboardach i aplikacjach wewnętrznych.</p>
          <p>Dobra wiadomość? Umiejętności przenoszą się między nimi. Jeśli znasz React, nauka Next.js jest prosta - to wciąż React w swoim rdzeniu.</p>
        `,
      },
      process: {
        title: 'Jak pracuję: Od pierwszej rozmowy do uruchomienia projektu',
        category: 'Proces',
        date: '1 listopada 2025',
        readTime: '5 min czytania',
        content: `
          <p class="text-xl text-cool-200 mb-8">Transparentność jest kluczem do udanych projektów. Oto dokładnie, co dzieje się, gdy współpracujemy - od pierwszej rozmowy po dzień uruchomienia i później.</p>

          <h2>Faza 1: Odkrywanie (Tydzień 1)</h2>
          <p>Każdy projekt zaczyna się od zrozumienia. Podczas naszej pierwszej rozmowy zapytam o:</p>
          <ul>
            <li>Twoje cele biznesowe - co ta strona powinna osiągnąć?</li>
            <li>Twoją grupę docelową - do kogo próbujesz dotrzeć?</li>
            <li>Twoją konkurencję - co robią dobrze lub źle?</li>
            <li>Twój harmonogram i budżet - bądźmy realistyczni od początku</li>
          </ul>
          <p>Po tej rozmowie tworzę szczegółową propozycję zawierającą zakres, harmonogram i inwestycję. Żadnych niespodzianek później.</p>

          <h2>Faza 2: Projektowanie (Tygodnie 2-3)</h2>
          <p>Gdy uzgodnimy zakres, zaczynam od wireframe'ów - prostych układów pokazujących strukturę bez projektu wizualnego. To pomaga nam dopracować przepływ użytkownika przed inwestowaniem w szczegółowy design.</p>
          <p>Po zatwierdzeniu wireframe'ów tworzę wysokiej jakości makiety w Figma. Zobaczysz dokładnie, jak Twoja strona będzie wyglądać na desktopie i urządzeniach mobilnych. Iterujemy, aż będziesz w pełni zadowolony.</p>

          <h2>Faza 3: Programowanie (Tygodnie 3-5)</h2>
          <p>To tutaj projekty stają się rzeczywistością. Buduję z nowoczesnymi technologiami:</p>
          <ul>
            <li><strong>React / Next.js</strong> dla front-endu</li>
            <li><strong>TypeScript</strong> dla bezpiecznego, łatwego w utrzymaniu kodu</li>
            <li><strong>Tailwind CSS</strong> dla responsywnego, niestandardowego stylowania</li>
            <li><strong>Headless CMS</strong> dla łatwego zarządzania treścią</li>
          </ul>
          <p>Przez cały czas programowania będziesz mieć dostęp do strony testowej, gdzie możesz śledzić postępy i przekazywać feedback.</p>

          <h2>Faza 4: Przegląd i testowanie (Tydzień 5-6)</h2>
          <p>Przed uruchomieniem dokładnie testujemy:</p>
          <ul>
            <li>Kompatybilność między przeglądarkami (Chrome, Firefox, Safari, Edge)</li>
            <li>Responsywność na rzeczywistych urządzeniach mobilnych</li>
            <li>Szybkość strony i Core Web Vitals</li>
            <li>Formularze i integracje</li>
            <li>Podstawy SEO (meta tagi, sitemap, robots.txt)</li>
          </ul>
          <p>Przejrzysz finalną stronę i poprosisz o ostatnie poprawki.</p>

          <h2>Faza 5: Uruchomienie</h2>
          <p>Dzień uruchomienia jest ekscytujący! Zajmuję się wszystkimi aspektami technicznymi:</p>
          <ul>
            <li>Konfiguracja domeny i SSL</li>
            <li>Wdrożenie na produkcję</li>
            <li>Konfiguracja analityki i śledzenia</li>
            <li>Monitorowanie wydajności</li>
          </ul>

          <h2>Po uruchomieniu: Ciągłe wsparcie</h2>
          <p>Relacja nie kończy się na uruchomieniu. Wszystkie projekty obejmują:</p>
          <ul>
            <li>30 dni bezpłatnych poprawek błędów i drobnych korekt</li>
            <li>Dokumentację do zarządzania treścią</li>
            <li>Sesję szkoleniową o tym, jak używać nowej strony</li>
          </ul>
          <p>Oferuję również miesięczne pakiety utrzymaniowe dla aktualizacji, poprawek bezpieczeństwa i ciągłych ulepszeń.</p>

          <h2>Komunikacja przez cały czas</h2>
          <p>Nigdy nie będziesz się zastanawiać, co dzieje się z Twoim projektem. Zapewniam:</p>
          <ul>
            <li>Cotygodniowe aktualizacje postępów przez email</li>
            <li>Dostęp do Slack/Teams dla szybkich pytań</li>
            <li>Wideorozmowy dla ważnych decyzji</li>
            <li>Jasny harmonogram z kamieniami milowymi</li>
          </ul>

          <h2>Gotowy, aby zacząć?</h2>
          <p>Pierwszym krokiem jest bezpłatna 15-minutowa konsultacja. Omówimy Twój projekt, a ja dam Ci szczerą opinię o oczekiwaniach dotyczących harmonogramu i budżetu.</p>
        `,
      },
      performance: {
        title: 'Dlaczego Twoja strona musi być szybka (i jak to osiągnąć)',
        category: 'Wydajność',
        date: '20 października 2025',
        readTime: '7 min czytania',
        content: `
          <p class="text-xl text-cool-200 mb-8">Szybkość strony to nie tylko metryka techniczna - bezpośrednio wpływa na Twój biznes. Każda sekunda opóźnienia kosztuje Cię odwiedzających, konwersje i przychody. Oto dlaczego szybkość ma znaczenie i jak ją osiągnąć.</p>

          <h2>Argument biznesowy za szybkością</h2>
          <p>Dane są jasne:</p>
          <ul>
            <li>53% użytkowników mobilnych opuszcza strony, które ładują się dłużej niż 3 sekundy</li>
            <li>1-sekundowe opóźnienie zmniejsza konwersje o 7%</li>
            <li>Google używa szybkości strony jako czynnika rankingowego</li>
            <li>Szybkie strony mają niższy współczynnik odrzuceń i wyższe zaangażowanie</li>
          </ul>
          <p>Jeśli Twoja strona generuje 400 000 zł rocznie przychodu, 1-sekundowa poprawa szybkości może oznaczać 28 000 zł więcej rocznie.</p>

          <h2>Co sprawia, że strony są wolne?</h2>

          <h3>1. Niezoptymalizowane obrazy</h3>
          <p>Obrazy są często największymi winowajcami. Pojedyncze niezoptymalizowane zdjęcie może mieć 5MB - to więcej niż niektóre całe strony powinny ważyć.</p>

          <h3>2. Zbyt dużo JavaScript</h3>
          <p>JavaScript jest potężny, ale kosztowny. Każdy kilobajt musi być pobrany, sparsowany i wykonany. Rozdęte frameworki i niepotrzebne biblioteki szybko się sumują.</p>

          <h3>3. Wolna odpowiedź serwera</h3>
          <p>Jeśli Twój serwer potrzebuje 2 sekund na odpowiedź, Twoja strona nie może załadować się w mniej niż 2 sekundy. Jakość hostingu ma znaczenie.</p>

          <h3>4. Zasoby blokujące renderowanie</h3>
          <p>CSS i JavaScript blokujące renderowanie uniemożliwiają stronie pokazanie treści, dopóki nie zostaną w pełni załadowane.</p>

          <h2>Jak sprawić, by Twoja strona była szybka</h2>

          <h3>Optymalizacja obrazów</h3>
          <ul>
            <li>Używaj nowoczesnych formatów jak WebP (30-50% mniejsze niż JPEG)</li>
            <li>Implementuj responsywne obrazy z srcset</li>
            <li>Lazy load dla obrazów poniżej linii widoczności</li>
            <li>Kompresuj obrazy bez widocznej utraty jakości</li>
          </ul>

          <h3>Minimalizuj JavaScript</h3>
          <ul>
            <li>Ładuj tylko to, czego potrzebujesz</li>
            <li>Dziel kod - ładuj funkcje, gdy są potrzebne</li>
            <li>Używaj nowoczesnych, lekkich frameworków</li>
            <li>Usuwaj nieużywany kod (tree shaking)</li>
          </ul>

          <h3>Optymalizuj dostarczanie</h3>
          <ul>
            <li>Używaj CDN do serwowania zasobów z lokalizacji bliskich użytkownikom</li>
            <li>Włącz kompresję (gzip lub Brotli)</li>
            <li>Ustaw odpowiednie nagłówki cache</li>
            <li>Rozważ generowanie statycznych stron dla treści, które się nie zmieniają</li>
          </ul>

          <h3>Popraw odpowiedź serwera</h3>
          <ul>
            <li>Wybierz jakościowy hosting (Vercel, Netlify lub dobry VPS)</li>
            <li>Używaj cache'owania po stronie serwera</li>
            <li>Optymalizuj zapytania do bazy danych</li>
            <li>Rozważ edge computing dla globalnej publiczności</li>
          </ul>

          <h2>Mierzenie wydajności</h2>
          <p>Używaj tych narzędzi do mierzenia i monitorowania:</p>
          <ul>
            <li><strong>Google PageSpeed Insights</strong> - Dane laboratoryjne i terenowe ze specyficznymi rekomendacjami</li>
            <li><strong>Lighthouse</strong> - Kompleksowe audyty wbudowane w Chrome DevTools</li>
            <li><strong>WebPageTest</strong> - Szczegółowa analiza waterfall z różnych lokalizacji</li>
            <li><strong>Core Web Vitals</strong> - Kluczowe metryki Google dla doświadczenia użytkownika</li>
          </ul>

          <h2>Core Web Vitals wyjaśnione</h2>
          <p>Core Web Vitals Google to metryki, które mają największe znaczenie:</p>
          <ul>
            <li><strong>LCP (Largest Contentful Paint)</strong> - Powinno być poniżej 2,5 sekundy. Mierzy, kiedy główna treść staje się widoczna.</li>
            <li><strong>FID (First Input Delay)</strong> - Powinno być poniżej 100ms. Mierzy, jak szybko strona reaguje na interakcję.</li>
            <li><strong>CLS (Cumulative Layout Shift)</strong> - Powinno być poniżej 0,1. Mierzy stabilność wizualną - czy treść się przesuwa?</li>
          </ul>

          <h2>Moje podejście do wydajności</h2>
          <p>Każda strona, którą buduję, jest zoptymalizowana pod kątem szybkości od samego początku:</p>
          <ul>
            <li>Nowoczesne frameworki z automatycznym dzieleniem kodu</li>
            <li>Automatyczna optymalizacja obrazów z komponentem Next.js Image</li>
            <li>Generowanie statyczne gdzie to możliwe</li>
            <li>Minimalne pakiety JavaScript</li>
            <li>Testowanie wydajności przed każdym uruchomieniem</li>
          </ul>

          <h2>Podsumowanie</h2>
          <p>Szybkość strony nie jest opcjonalna w 2025 roku. Wpływa na doświadczenie użytkownika, SEO i Twój wynik finansowy. Dobra wiadomość? Dzięki nowoczesnym narzędziom i najlepszym praktykom budowanie szybkich stron jest łatwiejsze niż kiedykolwiek.</p>
          <p>Jeśli Twoja obecna strona jest wolna, prawie zawsze jest miejsce na poprawę. Czasami małe optymalizacje przynoszą dramatyczne rezultaty.</p>
        `,
      },
    },

    // Newsletter
    newsletter: {
      label: 'Newsletter',
      title: 'Bądź na bieżąco',
      subtitle: 'Otrzymuj praktyczne wskazówki o web developmencie, trendach designu i technologii. Bez spamu, wypisz się kiedy chcesz.',
      placeholder: 'Wpisz swój email',
      subscribe: 'Zapisz się',
      subscribing: 'Zapisywanie...',
      success: 'Dziękuję! Sprawdź swoją skrzynkę email.',
      error: 'Coś poszło nie tak. Spróbuj ponownie.',
      disclaimer: 'Zapisując się, zgadzasz się na otrzymywanie emaili. Wypisz się kiedy chcesz.',
      benefit1: 'Cotygodniowe wskazówki',
      benefit2: 'Darmowe zasoby',
      benefit3: 'Wczesny dostęp',
    },

    // Cookies
    cookies: {
      message: 'Ta strona używa ciasteczek, aby poprawić Twoje doświadczenie. Kontynuując korzystanie z tej strony, akceptujesz naszą',
      privacyPolicy: 'Politykę prywatności',
      accept: 'Akceptuję',
      decline: 'Odrzuć',
    },
  },

  nl: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'Over mij',
      services: 'Diensten',
      portfolio: 'Portfolio',
      pricing: 'Prijzen',
      contact: 'Contact',
      bookCall: 'Plan een gesprek',
    },

    // Hero
    hero: {
      greeting: 'Hallo, ik ben',
      name: 'Tomasz Chromy',
      role: 'Full-Stack Developer',
      h1Main: 'Moderne Websites',
      h1Highlight: '& Webapplicaties',
      h2Services: 'Zakelijke Websites • E-commerce • Landing Pages • UI/UX Design',
      subtitle: 'Ik bouw moderne webapplicaties die bedrijven helpen groeien. Schone code, mooi design, echte resultaten.',
      cta: 'Start je project',
      ctaSecondary: 'Bekijk portfolio',
      experience: 'Jaar ervaring',
      projects: 'Projecten',
    },

    // About
    about: {
      label: 'Over mij',
      title: 'Passie voor het',
      titleHighlight: 'bouwen van oplossingen',
      intro: 'Hallo, ik ben',
      introName: 'Tomasz Chromy',
      introText: '— een full-stack developer met een passie voor schone code en mooie interfaces.',
      description: 'Ik specialiseer me in het maken van moderne webapplicaties met React, Next.js en Node.js. Elk project is een kans om echte zakelijke problemen op te lossen.',
      yearsExp: 'Jaren ervaring',
      projectsCompleted: 'Afgeronde projecten',
      satisfaction: 'Klanttevredenheid',
    },

    // Services
    services: {
      label: 'Diensten',
      title: 'Wat ik voor je kan bouwen',
      subtitle: 'Complete webontwikkeling, van concept tot oplevering',
      webDev: 'Webontwikkeling',
      webDevDesc: 'Moderne, snelle en responsieve websites gebouwd met React en Next.js. Schone code die schaalt.',
      fullStack: 'Full-Stack Apps',
      fullStackDesc: 'Complete webapplicaties met robuuste backends. Van database tot deployment.',
      uiux: 'UI/UX Design',
      uiuxDesc: 'Gebruikersgerichte ontwerpen die er geweldig uitzien en converteren. Van Figma prototypes naar pixel-perfecte code.',
      uiuxFeature1: 'Responsief ontwerp',
      uiuxFeature2: 'Toegankelijkheid',
      uiuxFeature3: 'Ontwerpsystemen',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Online winkels die converteren. Betalingsintegratie, voorraadbeheer en analytics.',
    },

    // Portfolio
    portfolio: {
      label: 'Portfolio',
      title: 'Geselecteerde',
      titleHighlight: 'projecten',
      subtitle: 'Echte oplossingen voor echte bedrijven',
      cta: 'Heb je een project in gedachten?',
      problemLabel: 'Probleem',
      solutionLabel: 'Oplossing',
      resultLabel: 'Resultaat',
      // Project 1
      project1Tag: 'Strategie & Systeem',
      project1Title: 'Automatiseringssysteem voor software house',
      project1Problem: 'Team verspilde uren aan handmatige rapporten en verspreide projecttracking.',
      project1Solution: 'Aangepast dashboard met API-integraties en geautomatiseerde workflows.',
      project1Result: '40% meer efficiëntie, 60% minder tijd aan rapporten.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Teamefficiëntie',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Rapporttijd',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Premium producten online winkel',
      project2Problem: 'Lage conversies en trage laadtijden schaadden de verkoop.',
      project2Solution: 'Herbouwd met Next.js, geoptimaliseerde checkout en lazy-loading.',
      project2Result: '85% conversieverhoging, 2.1s laadtijd.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Conversie',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Laadtijd',
      // Project 3
      project3Tag: 'Landing & Groei',
      project3Title: 'Landing page voor SaaS-campagne',
      project3Problem: 'Advertenties genereerden verkeer maar de landingspagina converteerde niet.',
      project3Solution: 'Herontwerp met duidelijke CTA, A/B-testen en analytics.',
      project3Result: '12% CTR, 3.2% conversieratio.',
      project3Metric1Value: '12%',
      project3Metric1Label: 'CTR',
      project3Metric2Value: '3.2%',
      project3Metric2Label: 'Conversieratio',
    },

    // Pricing
    pricing: {
      label: 'Prijzen',
      title: 'Eenvoudige, transparante prijzen',
      subtitle: 'Kies het plan dat het beste bij je project past',
      consultation: 'Consultatie',
      consultationPrice: 'Gratis',
      consultationPeriod: '30 min',
      consultationNote: 'Laten we kennismaken en je project bespreken.',
      consultationPoints: [
        'Analyse van behoeften en doelen',
        'Eerste oplossingsvoorstel',
        'Budget- en tijdlijnschatting',
      ],
      consultationCta: 'Plan een gesprek',
      project: 'Project',
      projectPrice: 'vanaf €1.200',
      projectPeriod: 'eenmalig',
      projectNote: 'Complete oplossing van A tot Z.',
      projectPoints: [
        'Strategie + design + implementatie',
        'Volledige documentatie en training',
        '30 dagen support na lancering',
        'Kwaliteitsgarantie',
      ],
      projectCta: 'Start project',
      projectBadge: 'Meest populair',
      partnership: 'Samenwerking',
      partnershipPrice: 'vanaf €750',
      partnershipPeriod: 'maandelijks',
      partnershipNote: 'Doorlopende ondersteuning en ontwikkeling.',
      partnershipPoints: [
        'Toegewijde maandelijkse uren',
        'Prioritaire ondersteuning',
        'Regelmatige optimalisaties',
        'Rapportage en analytics',
      ],
      partnershipCta: 'Laten we praten',
    },

    // Contact
    contact: {
      label: 'Neem contact op',
      title: 'Laten we samen iets',
      titleHighlight: 'geweldigs bouwen',
      subtitle: 'Heb je een project in gedachten? Ik hoor er graag over.',
      directContact: 'Direct contact',
      formFullName: 'Volledige naam',
      formFullNamePlaceholder: 'Jan de Vries',
      formEmail: 'E-mail',
      formEmailPlaceholder: 'jan@bedrijf.nl',
      formCompany: 'Bedrijf (optioneel)',
      formCompanyPlaceholder: 'Bedrijfsnaam',
      formProject: 'Vertel over je project',
      formProjectPlaceholder: 'Beschrijf kort wat je nodig hebt...',
      formProjectHint: 'Min. 20 tekens',
      formSubmit: 'Verstuur bericht',
      formSending: 'Versturen...',
      formSuccess: 'Bericht succesvol verzonden! Ik neem snel contact op.',
      formError: 'Er ging iets mis. Probeer opnieuw of gebruik de alternatieve optie.',
      formFallback: 'Verstuur via e-mail',
      errorRequired: 'Dit veld is verplicht',
      errorEmail: 'Voer een geldig e-mailadres in',
      errorMinLength: 'Geef meer details (min. 20 tekens)',
      responseTime: 'Ik reageer meestal binnen 1-2 werkdagen.',
      scheduleCall: 'Liever praten?',
      scheduleFree: 'Gratis 15 min consultatie',
      scheduleDesc: 'Plan een kort videogesprek waarin we je project bespreken.',
      scheduleBtn: 'Plan een gesprek',
    },

    // Service Pages
    servicePage: {
      cta: 'Gratis offerte',
      ctaSecondary: 'Bekijk portfolio',
      whatYouGet: 'Wat je krijgt',
      howItWorks: 'Hoe het werkt',
      ctaTitle: 'Klaar om te beginnen?',
      ctaSubtitle: 'Laten we je project bespreken en de perfecte oplossing vinden.',
      websites: {
        label: 'Websites',
        title: 'Professionele zakelijke websites',
        description: 'Op maat gemaakte, responsieve websites die je merk vertegenwoordigen en bezoekers omzetten in klanten.',
        gradient: 'from-blue-500 to-cyan-500',
        features: [
          { title: 'Responsief design', desc: 'Perfecte weergave op alle apparaten.' },
          { title: 'SEO-optimalisatie', desc: 'Ingebouwde SEO best practices voor hogere rankings.' },
          { title: 'Snel laden', desc: 'Geoptimaliseerde prestaties voor de beste ervaring.' },
          { title: 'CMS-integratie', desc: 'Eenvoudig contentbeheer met moderne CMS-oplossingen.' },
          { title: 'Analytics setup', desc: 'Bezoekers en conversies volgen met Google Analytics.' },
          { title: 'SSL-beveiliging', desc: 'Veilige HTTPS-verbinding bij elke website.' },
        ],
        process: [
          { title: 'Ontdekking', desc: 'We bespreken je doelen, doelgroep en vereisten.' },
          { title: 'Ontwerp', desc: 'Mockups maken en je goedkeuring krijgen.' },
          { title: 'Ontwikkeling', desc: 'Je website bouwen met schone, onderhoudbare code.' },
          { title: 'Lancering', desc: 'Testen, optimaliseren en live gaan met ondersteuning.' },
        ],
      },
      apps: {
        label: 'Webapplicaties',
        title: 'Aangepaste webapplicaties',
        description: 'Krachtige, schaalbare webapplicaties op maat van je zakelijke behoeften.',
        gradient: 'from-purple-500 to-pink-500',
        features: [
          { title: 'Maatwerk ontwikkeling', desc: 'Vanaf nul gebouwd volgens je exacte vereisten.' },
          { title: 'Gebruikersauthenticatie', desc: 'Veilige inlogsystemen met rolgebaseerde toegang.' },
          { title: 'API-integratie', desc: 'Verbinden met externe diensten en je bestaande tools.' },
          { title: 'Real-time functies', desc: 'Live updates en notificaties.' },
          { title: 'Database-ontwerp', desc: 'Efficiënte datastructuren voor optimale prestaties.' },
          { title: 'Schaalbare architectuur', desc: 'Gebouwd om mee te groeien met je bedrijf.' },
        ],
        process: [
          { title: 'Vereisten', desc: 'Diepgaande analyse van bedrijfsprocessen en behoeften.' },
          { title: 'Architectuur', desc: 'Technische basis en gebruikersflows plannen.' },
          { title: 'Ontwikkeling', desc: 'Agile ontwikkeling met regelmatige demos.' },
          { title: 'Deployment', desc: 'Testen, beveiligingsaudit en productie-deployment.' },
        ],
      },
      ecommerce: {
        label: 'E-commerce',
        title: 'Online winkels & E-commerce',
        description: 'Hoog converterende online winkels met naadloze checkout en betalingsintegratie.',
        gradient: 'from-green-500 to-emerald-500',
        features: [
          { title: 'Productbeheer', desc: 'Gebruiksvriendelijke interface voor je productcatalogus.' },
          { title: 'Veilige checkout', desc: 'PCI-conforme betalingsverwerking met meerdere opties.' },
          { title: 'Voorraadtracking', desc: 'Real-time voorraadbeheer en waarschuwingen.' },
          { title: 'Verzendintegratie', desc: 'Automatische verzendberekeningen en labelprinting.' },
          { title: 'Klantaccounts', desc: 'Bestelgeschiedenis, verlanglijstjes en personalisatie.' },
          { title: 'Analytics & rapporten', desc: 'Verkoop volgen, conversie-analytics en inzichten.' },
        ],
        process: [
          { title: 'Strategie', desc: 'Je producten, doelmarkt en doelen begrijpen.' },
          { title: 'Setup', desc: 'Platformselectie, design en productimport.' },
          { title: 'Integratie', desc: 'Betalingsgateways, verzending en marketingtools.' },
          { title: 'Lancering', desc: 'Testen, training en live gaan met je winkel.' },
        ],
      },
      uiux: {
        label: 'UI/UX Design',
        title: 'UI/UX Design diensten',
        description: 'Gebruikersgerichte ontwerpen die klanten verrassen en conversies stimuleren.',
        gradient: 'from-orange-500 to-red-500',
        features: [
          { title: 'Gebruikersonderzoek', desc: 'Je gebruikers begrijpen door interviews en analytics.' },
          { title: 'Wireframing', desc: 'Low-fidelity mockups om concepten snel te valideren.' },
          { title: 'Visueel ontwerp', desc: 'Mooie, merkconforme interfaces die opvallen.' },
          { title: 'Prototyping', desc: 'Interactieve prototypes voor testen en feedback.' },
          { title: 'Design systemen', desc: 'Consistente componenten en richtlijnen.' },
          { title: 'Usability testen', desc: 'Ontwerpen valideren met echte gebruikers.' },
        ],
        process: [
          { title: 'Onderzoek', desc: 'Gebruikersinterviews, concurrentieanalyse en vereisten.' },
          { title: 'Wireframes', desc: 'Gebruikersflows en paginalay-outs schetsen.' },
          { title: 'Design', desc: 'High-fidelity ontwerpen en prototypes maken.' },
          { title: 'Overdracht', desc: 'Developer-ready specs en doorlopende samenwerking.' },
        ],
      },
    },

    // Footer
    footer: {
      cta: 'Laten we iets geweldigs bouwen',
      ctaSubtitle: 'Klaar om je volgende project te starten? Ik hoor graag van je.',
      ctaBtn: 'Neem contact op',
      navigation: 'Navigatie',
      connect: 'Volg mij',
      partners: 'Partners',
      rights: 'Alle rechten voorbehouden.',
      disclaimer: 'Deze website is uitsluitend gemaakt voor trainingsdoeleinden en vormt geen commercieel aanbod.',
      bio: 'Full-stack developer met passie voor het creëren van mooie, functionele webervaringen. Laten we jouw ideeën werkelijkheid maken.',
      privacyPolicy: 'Privacybeleid',
      cookies: 'Cookies',
    },

    // For Whom
    forWhom: {
      label: 'Voor wie?',
      title: 'Met wie ik werk',
      subtitle: 'Ik help bedrijven van alle groottes hun digitale aanwezigheid op te bouwen',
      startups: 'Startups',
      startupsDesc: 'Bedrijven in een vroege fase die een sterke webpresentie nodig hebben om gebruikers en investeerders aan te trekken.',
      smallBusiness: 'Kleine bedrijven',
      smallBusinessDesc: 'Lokale bedrijven die op zoek zijn naar professionele websites die bezoekers omzetten in klanten.',
      agencies: 'Bureaus',
      agenciesDesc: 'Creatieve bureaus die een betrouwbare ontwikkelingspartner nodig hebben voor klantprojecten.',
      entrepreneurs: 'Ondernemers',
      entrepreneursDesc: 'Solo-ondernemers en freelancers die een portfolio of landingspagina nodig hebben die opvalt.',
    },

    // Process
    process: {
      label: 'Proces',
      title: 'Hoe ik werk',
      subtitle: 'Een duidelijke, stapsgewijze aanpak voor elk project',
      step1Title: 'Ontdekking & Analyse',
      step1Desc: 'Ik leer je bedrijf, doelen en context kennen. Samen definiëren we prioriteiten en succescriteria.',
      step2Title: 'Strategie & Design',
      step2Desc: 'Ik maak concepten en mockups. We bespreken, itereren en verfijnen de details.',
      step3Title: 'Ontwikkeling & Implementatie',
      step3Desc: 'Ik bouw de oplossing met focus op prestaties, beveiliging en schaalbaarheid.',
      step4Title: 'Optimalisatie & Ondersteuning',
      step4Desc: 'Ik deploy naar productie, configureer analytics en bied doorlopende ondersteuning.',
    },

    // Testimonials
    testimonials: {
      label: 'Getuigenissen',
      title: 'Vertrouwd door klanten',
      subtitle: 'Echte feedback van mensen waarmee ik heb gewerkt',
      quote1: 'Tomasz transformeerde ons productportaal in een tool die daadwerkelijk de verkoop ondersteunt. Marketing heeft eindelijk wat het nodig had.',
      role1: 'CTO, Software House',
      quote2: 'Hij leverde het project snel en zonder chaos. Duidelijk proces, concrete oplossingen in plaats van problemen. Ik beveel hem aan iedereen aan.',
      role2: 'Oprichter, SaaS B2B',
      quote3: 'De nieuwe website begon vanaf de eerste week aanvragen te genereren. Eenvoudig beheer en echte resultaten - precies wat ik nodig had.',
      role3: 'Eigenaar, Lokale diensten',
    },

    // FAQ
    faq: {
      label: 'FAQ',
      title: 'Veelgestelde vragen',
      subtitle: 'Alles wat je moet weten over samenwerken met mij',
      q1: 'Hoe ziet het samenwerkingsproces eruit?',
      a1: 'We beginnen met een gratis consultatie waarin we je doelen en behoeften bespreken. Daarna bereid ik een voorstel en tijdlijn voor. Na goedkeuring doorlopen we de strategie-, design- en implementatiefasen met regelmatige check-ins.',
      q2: 'Hoe lang duurt een typisch project?',
      a2: 'Afhankelijk van de omvang: bedrijfswebsite 2-4 weken, e-commerce winkel 4-8 weken, systemen en automatisering 4-12 weken. Na een eerste gesprek geef ik een exacte tijdlijn.',
      q3: 'Bied je ondersteuning na lancering?',
      a3: 'Ja! Ik bied ondersteuningspakketten inclusief updates, monitoring, fixes en ontwikkeling. Je kunt ook uurondersteuning gebruiken als dat nodig is.',
      q4: 'Welke technologieën gebruik je?',
      a4: 'Ik werk met React, Next.js, TypeScript, Node.js, Python en moderne AI/ML-tools. Ik kies technologieën op basis van projectspecificaties - niet andersom.',
      q5: 'Hoe werkt de facturering?',
      a5: 'Ik bied projectgebaseerde facturering (aanbetaling + eindbetaling) of uurtarieven. Voor doorlopende samenwerking stel ik maandelijkse pakketten voor. Ik factureer met BTW.',
      q6: 'Werk je op afstand?',
      a6: 'Ja, ik werk voornamelijk op afstand met klanten uit heel Europa. We communiceren via Slack/Teams en vergaderingen vinden plaats via videogesprek.',
    },

    // Blog
    blog: {
      label: 'Kennis',
      title: 'Expert inzichten',
      subtitle: 'Praktische gidsen over webontwikkeling, prijzen en projectmanagement',
      readMore: 'Lees artikel',
      article1Title: 'Hoeveel kost een website in 2025? Complete prijsgids',
      article1Excerpt: 'Websiteprijzen hangen af van veel factoren: complexiteit, functies, designvereisten. Leer wat de kosten beïnvloedt en hoe je je project kunt budgetteren.',
      category1: 'Prijzen',
      readTime1: '8 min lezen',
      article2Title: 'React vs Next.js: Welke kiezen voor je project?',
      article2Excerpt: 'Beide zijn geweldige tools, maar ze dienen verschillende doelen. Leer wanneer je React SPA moet gebruiken en wanneer Next.js met SSR de betere keuze is.',
      category2: 'Technologie',
      readTime2: '6 min lezen',
      article3Title: 'Hoe ik werk: Van eerste gesprek tot projectlancering',
      article3Excerpt: 'Transparantie is essentieel. Hier is mijn complete ontwikkelproces: ontdekking, ontwerp, ontwikkeling, testen en lancering met doorlopende ondersteuning.',
      category3: 'Proces',
      readTime3: '5 min lezen',
      article4Title: 'Waarom je website snel moet zijn (en hoe je dat bereikt)',
      article4Excerpt: 'Paginasnelheid beïnvloedt SEO, conversies en gebruikerservaring. Leer de belangrijkste optimalisaties die websites in minder dan 2 seconden laten laden.',
      category4: 'Prestaties',
      readTime4: '7 min lezen',
    },

    // Full Articles
    articles: {
      notFound: 'Artikel niet gevonden',
      backHome: 'Terug naar home',
      backToArticles: 'Terug naar alle artikelen',
      ctaTitle: 'Klaar om je project te starten?',
      ctaSubtitle: 'Laten we bespreken hoe ik je kan helpen je doelen te bereiken.',
      ctaButton: 'Neem contact op',
      pricing: {
        title: 'Hoeveel kost een website in 2025? Complete prijsgids',
        category: 'Prijzen',
        date: '1 december 2025',
        readTime: '8 min lezen',
        content: `
          <p class="text-xl text-cool-200 mb-8">Een van de meest voorkomende vragen die ik van potentiële klanten krijg is: "Hoeveel kost mijn website?" Het eerlijke antwoord is: dat hangt ervan af. Maar laat me precies uitleggen welke factoren de prijs beïnvloeden en je realistische verwachtingen geven.</p>

          <h2>Websiteprijzen begrijpen</h2>
          <p>Websitekosten variëren dramatisch op basis van complexiteit, functies en wie het bouwt. Een eenvoudige landingspagina kan €500-2.000 kosten, terwijl een complex e-commerceplatform €10.000-50.000 of meer kan zijn. Laten we kijken wat deze verschillen veroorzaakt.</p>

          <h2>Belangrijkste factoren die de prijs beïnvloeden</h2>

          <h3>1. Type website</h3>
          <p><strong>Landingspagina (€500-2.000):</strong> Een eenpaginawebsite gericht op één doel - meestal leadgeneratie of productpromotie. Perfect voor startups die een idee valideren.</p>
          <p><strong>Zakelijke website (€2.000-8.000):</strong> 5-15 pagina's inclusief home, over ons, diensten, portfolio en contact. De meeste kleine bedrijven vallen in deze categorie.</p>
          <p><strong>E-commerce (€5.000-30.000):</strong> Online winkels met productbeheer, betalingsverwerking, verzendintegratie. Prijs schaalt met aantal producten en functies.</p>
          <p><strong>Webapplicatie (€10.000+):</strong> Aangepaste functionaliteit zoals gebruikersdashboards, boekingssystemen of SaaS-platforms. Deze vereisen aanzienlijke ontwikkeltijd.</p>

          <h3>2. Designcomplexiteit</h3>
          <p>Een op templates gebaseerd ontwerp kost minder dan aangepast ontwerp. Aangepaste illustraties, animaties en unieke layouts verhogen de prijs maar laten je site ook opvallen.</p>

          <h3>3. Contentvereisten</h3>
          <p>Heb je kant-en-klare content, of heb je copywriting nodig? Professionele fotografie? Dit verhoogt het budget maar beïnvloedt conversiepercentages aanzienlijk.</p>

          <h3>4. Technische vereisten</h3>
          <p>Integraties met CRM, e-mailmarketing, betalingsgateways of aangepaste API's voegen allemaal complexiteit en kosten toe.</p>

          <h2>Waar je echt voor betaalt</h2>
          <p>Als je een professionele ontwikkelaar inhuurt, betaal je niet alleen voor code. Je betaalt voor:</p>
          <ul>
            <li><strong>Strategie</strong> - je bedrijfsdoelen begrijpen en vertalen naar effectief ontwerp</li>
            <li><strong>Ervaring</strong> - veelgemaakte fouten vermijden die je klanten kunnen kosten</li>
            <li><strong>Kwaliteit</strong> - schone code die snel, veilig en onderhoudbaar is</li>
            <li><strong>Ondersteuning</strong> - iemand om te bellen als dingen kapot gaan of updates nodig hebben</li>
          </ul>

          <h2>Hoe je budget voor je website te plannen</h2>
          <p>Hier is mijn advies: denk aan je website als een investering, niet als een uitgave. Een goed ontworpen website die bezoekers omzet in klanten verdient zichzelf vele malen terug.</p>
          <p>Begin met je doelen. Wat moet de website bereiken? Prioriteer vervolgens functies op basis van wat de grootste impact heeft op die doelen.</p>

          <h2>Rode vlaggen om op te letten</h2>
          <p>Wees voorzichtig met offertes die te mooi lijken om waar te zijn. Extreem lage prijzen betekenen vaak:</p>
          <ul>
            <li>Alleen-template oplossingen zonder aanpassingen</li>
            <li>Offshore teams met communicatieproblemen</li>
            <li>Verborgen kosten die later verschijnen</li>
            <li>Code van slechte kwaliteit die later problemen veroorzaakt</li>
          </ul>

          <h2>Conclusie</h2>
          <p>Een professionele zakelijke website kost doorgaans tussen €2.000-8.000. E-commerce en webapplicaties beginnen bij €5.000 en kunnen veel hoger zijn afhankelijk van de vereisten.</p>
          <p>De beste aanpak? Voer een eerlijk gesprek met een ontwikkelaar over je doelen en budget. Een goede ontwikkelaar helpt je functies te prioriteren en de juiste oplossing voor je behoeften te vinden.</p>
        `,
      },
      "react-nextjs": {
        title: 'React vs Next.js: Welke kiezen voor je project?',
        category: 'Technologie',
        date: '15 november 2025',
        readTime: '6 min lezen',
        content: `
          <p class="text-xl text-cool-200 mb-8">Als je een nieuw webproject plant, heb je waarschijnlijk gehoord over React en Next.js. Beide zijn uitstekende tools, maar ze dienen verschillende doelen. Laat me uitleggen wanneer je elk moet gebruiken.</p>

          <h2>Wat is React?</h2>
          <p>React is een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces. Gemaakt door Facebook (nu Meta), is het de meest populaire front-end tool ter wereld. React laat je interactieve, dynamische webapplicaties bouwen met herbruikbare componenten.</p>
          <p>Een "pure" React-applicatie is een Single Page Application (SPA) - de hele app laadt één keer, en navigatie gebeurt zonder paginaverversingen.</p>

          <h2>Wat is Next.js?</h2>
          <p>Next.js is een framework gebouwd bovenop React. Het voegt functies toe zoals server-side rendering (SSR), statische sitegeneratie (SSG), bestandsgebaseerde routing en API-routes. Zie het als React met superkrachten.</p>

          <h2>Belangrijkste verschillen</h2>

          <h3>Rendering</h3>
          <p><strong>React (SPA):</strong> Alles rendert in de browser. De server stuurt een minimaal HTML-bestand, en JavaScript bouwt de pagina aan de clientzijde.</p>
          <p><strong>Next.js:</strong> Biedt meerdere renderopties - server-side rendering, statische generatie of client-side rendering. Je kunt ze zelfs mengen binnen dezelfde applicatie.</p>

          <h3>SEO</h3>
          <p><strong>React:</strong> Uitdagend voor SEO omdat zoekmachines JavaScript mogelijk niet correct uitvoeren. Vereist extra configuratie voor goede SEO.</p>
          <p><strong>Next.js:</strong> Uitstekende SEO out of the box. Server-gerenderde pagina's zijn volledig zichtbaar voor zoekmachines.</p>

          <h3>Prestaties</h3>
          <p><strong>React:</strong> Initieel laden kan traag zijn omdat de browser alle JavaScript moet downloaden en uitvoeren voordat content getoond wordt.</p>
          <p><strong>Next.js:</strong> Sneller initieel laden met server rendering. Ingebouwde beeldoptimalisatie, code splitting en prefetching.</p>

          <h3>Routing</h3>
          <p><strong>React:</strong> Vereist een externe bibliotheek zoals React Router.</p>
          <p><strong>Next.js:</strong> Ingebouwde bestandsgebaseerde routing. Maak een bestand in de pages-map, en het wordt automatisch een route.</p>

          <h2>Wanneer React (SPA) kiezen</h2>
          <ul>
            <li>Dashboard of beheerderspaneel bouwen</li>
            <li>Interne tools die geen SEO nodig hebben</li>
            <li>Zeer interactieve applicaties zoals designtools</li>
            <li>Wanneer je volledige controle over de architectuur nodig hebt</li>
          </ul>

          <h2>Wanneer Next.js kiezen</h2>
          <ul>
            <li>Marketingwebsites die goede SEO nodig hebben</li>
            <li>E-commerce winkels</li>
            <li>Blogs en content-rijke sites</li>
            <li>Applicaties die snelle initiële laadtijden nodig hebben</li>
            <li>Wanneer je sneller wilt leveren met minder configuratie</li>
          </ul>

          <h2>Mijn aanbeveling</h2>
          <p>Voor de meeste zakelijke websites raad ik Next.js aan. De SEO-voordelen, prestatieoptimalisaties en ontwikkelaarservaring zijn moeilijk te verslaan. Het framework handelt veel complexe beslissingen voor je af, zodat je je kunt concentreren op het bouwen van functies.</p>
          <p>Gebruik pure React wanneer je interne tools, dashboards bouwt, of applicaties waar SEO er niet toe doet en je maximale flexibiliteit nodig hebt.</p>

          <h2>Conclusie</h2>
          <p>Zowel React als Next.js zijn uitstekende keuzes. Next.js is beter voor publieke websites die SEO en prestaties nodig hebben. React SPA's werken geweldig voor dashboards en interne applicaties.</p>
          <p>Het goede nieuws? Vaardigheden zijn overdraagbaar tussen beide. Als je React kent, is Next.js leren eenvoudig - het is nog steeds React in de kern.</p>
        `,
      },
      process: {
        title: 'Hoe ik werk: Van eerste gesprek tot projectlancering',
        category: 'Proces',
        date: '1 november 2025',
        readTime: '5 min lezen',
        content: `
          <p class="text-xl text-cool-200 mb-8">Transparantie is de sleutel tot succesvolle projecten. Hier is precies wat er gebeurt als we samenwerken - van het eerste gesprek tot de lanceerdag en daarna.</p>

          <h2>Fase 1: Ontdekking (Week 1)</h2>
          <p>Elk project begint met begrip. Tijdens ons eerste gesprek vraag ik naar:</p>
          <ul>
            <li>Je bedrijfsdoelen - wat moet deze website bereiken?</li>
            <li>Je doelgroep - wie probeer je te bereiken?</li>
            <li>Je concurrenten - wat doen ze goed of slecht?</li>
            <li>Je tijdlijn en budget - laten we vanaf het begin realistisch zijn</li>
          </ul>
          <p>Na dit gesprek maak ik een gedetailleerd voorstel inclusief scope, tijdlijn en investering. Geen verrassingen later.</p>

          <h2>Fase 2: Ontwerp (Week 2-3)</h2>
          <p>Zodra we het eens zijn over de scope, begin ik met wireframes - eenvoudige layouts die structuur tonen zonder visueel ontwerp. Dit helpt ons de gebruikersstroom te perfectioneren voordat we investeren in gedetailleerd ontwerp.</p>
          <p>Na goedkeuring van wireframes maak ik high-fidelity mockups in Figma. Je ziet precies hoe je site eruitziet op desktop en mobiel. We itereren tot je volledig tevreden bent.</p>

          <h2>Fase 3: Ontwikkeling (Week 3-5)</h2>
          <p>Dit is waar ontwerpen werkelijkheid worden. Ik bouw met moderne technologieën:</p>
          <ul>
            <li><strong>React / Next.js</strong> voor de front-end</li>
            <li><strong>TypeScript</strong> voor typeveilige, onderhoudbare code</li>
            <li><strong>Tailwind CSS</strong> voor responsieve, aangepaste styling</li>
            <li><strong>Headless CMS</strong> voor eenvoudig contentbeheer</li>
          </ul>
          <p>Gedurende de ontwikkeling heb je toegang tot een staging-site waar je de voortgang kunt zien en feedback kunt geven.</p>

          <h2>Fase 4: Review & Testen (Week 5-6)</h2>
          <p>Voor lancering testen we grondig:</p>
          <ul>
            <li>Cross-browser compatibiliteit (Chrome, Firefox, Safari, Edge)</li>
            <li>Mobiele responsiviteit op echte apparaten</li>
            <li>Paginasnelheid en Core Web Vitals</li>
            <li>Formulieren en integraties</li>
            <li>SEO-basics (meta tags, sitemap, robots.txt)</li>
          </ul>
          <p>Je reviewt de definitieve site en vraagt eventuele laatste aanpassingen aan.</p>

          <h2>Fase 5: Lancering</h2>
          <p>Lanceerdag is spannend! Ik handel alle technische aspecten af:</p>
          <ul>
            <li>Domeinconfiguratie en SSL-setup</li>
            <li>Deployment naar productie</li>
            <li>Analytics en tracking setup</li>
            <li>Prestatiemonitoring</li>
          </ul>

          <h2>Na lancering: Doorlopende ondersteuning</h2>
          <p>De relatie eindigt niet bij lancering. Alle projecten omvatten:</p>
          <ul>
            <li>30 dagen gratis bugfixes en kleine aanpassingen</li>
            <li>Documentatie voor contentbeheer</li>
            <li>Trainingssessie over hoe je nieuwe site te gebruiken</li>
          </ul>
          <p>Ik bied ook maandelijkse onderhoudspakketten voor updates, beveiligingspatches en doorlopende verbeteringen.</p>

          <h2>Communicatie gedurende het hele traject</h2>
          <p>Je zult je nooit afvragen wat er met je project gebeurt. Ik zorg voor:</p>
          <ul>
            <li>Wekelijkse voortgangsupdates via e-mail</li>
            <li>Slack/Teams-toegang voor snelle vragen</li>
            <li>Videogesprekken voor belangrijke beslissingen</li>
            <li>Duidelijke tijdlijn met mijlpalen</li>
          </ul>

          <h2>Klaar om te beginnen?</h2>
          <p>De eerste stap is een gratis 15-minuten consultatie. We bespreken je project, en ik geef je eerlijke feedback over tijdlijn- en budgetverwachtingen.</p>
        `,
      },
      performance: {
        title: 'Waarom je website snel moet zijn (en hoe je dat bereikt)',
        category: 'Prestaties',
        date: '20 oktober 2025',
        readTime: '7 min lezen',
        content: `
          <p class="text-xl text-cool-200 mb-8">Websitesnelheid is niet alleen een technische metriek - het beïnvloedt direct je bedrijf. Elke seconde vertraging kost je bezoekers, conversies en omzet. Hier is waarom snelheid ertoe doet en hoe je het bereikt.</p>

          <h2>De zakelijke reden voor snelheid</h2>
          <p>De data is duidelijk:</p>
          <ul>
            <li>53% van mobiele gebruikers verlaat sites die langer dan 3 seconden laden</li>
            <li>1 seconde vertraging vermindert conversies met 7%</li>
            <li>Google gebruikt paginasnelheid als rankingfactor</li>
            <li>Snelle sites hebben lagere bouncepercentages en hogere engagement</li>
          </ul>
          <p>Als je website €100.000/jaar aan omzet genereert, kan 1 seconde snelheidsverbetering €7.000 meer per jaar betekenen.</p>

          <h2>Wat maakt websites traag?</h2>

          <h3>1. Niet-geoptimaliseerde afbeeldingen</h3>
          <p>Afbeeldingen zijn vaak de grootste boosdoeners. Een enkele niet-geoptimaliseerde foto kan 5MB zijn - dat is groter dan sommige hele websites zouden moeten zijn.</p>

          <h3>2. Te veel JavaScript</h3>
          <p>JavaScript is krachtig maar duur. Elke kilobyte moet gedownload, geparsed en uitgevoerd worden. Opgeblazen frameworks en onnodige libraries tellen snel op.</p>

          <h3>3. Trage serverrespons</h3>
          <p>Als je server 2 seconden nodig heeft om te reageren, kan je pagina onmogelijk in minder dan 2 seconden laden. Hostingkwaliteit doet ertoe.</p>

          <h3>4. Render-blokkerende resources</h3>
          <p>CSS en JavaScript die rendering blokkeren voorkomen dat de pagina content toont totdat ze volledig geladen zijn.</p>

          <h2>Hoe maak je je website snel</h2>

          <h3>Beeldoptimalisatie</h3>
          <ul>
            <li>Gebruik moderne formaten zoals WebP (30-50% kleiner dan JPEG)</li>
            <li>Implementeer responsieve afbeeldingen met srcset</li>
            <li>Lazy load afbeeldingen onder de fold</li>
            <li>Comprimeer afbeeldingen zonder zichtbaar kwaliteitsverlies</li>
          </ul>

          <h3>Minimaliseer JavaScript</h3>
          <ul>
            <li>Laad alleen wat je nodig hebt</li>
            <li>Code split - laad functies wanneer ze nodig zijn</li>
            <li>Gebruik moderne, lichtgewicht frameworks</li>
            <li>Verwijder ongebruikte code (tree shaking)</li>
          </ul>

          <h3>Optimaliseer levering</h3>
          <ul>
            <li>Gebruik een CDN om assets te serveren vanaf locaties dicht bij je gebruikers</li>
            <li>Schakel compressie in (gzip of Brotli)</li>
            <li>Stel juiste cache-headers in</li>
            <li>Overweeg statische sitegeneratie voor content die niet vaak verandert</li>
          </ul>

          <h3>Verbeter serverrespons</h3>
          <ul>
            <li>Kies kwaliteitshosting (Vercel, Netlify of kwaliteits-VPS)</li>
            <li>Gebruik server-side caching</li>
            <li>Optimaliseer database-queries</li>
            <li>Overweeg edge computing voor wereldwijd publiek</li>
          </ul>

          <h2>Prestaties meten</h2>
          <p>Gebruik deze tools om te meten en monitoren:</p>
          <ul>
            <li><strong>Google PageSpeed Insights</strong> - Lab- en velddata met specifieke aanbevelingen</li>
            <li><strong>Lighthouse</strong> - Uitgebreide audits ingebouwd in Chrome DevTools</li>
            <li><strong>WebPageTest</strong> - Gedetailleerde watervaalanalyse vanaf verschillende locaties</li>
            <li><strong>Core Web Vitals</strong> - Google's belangrijkste metrics voor gebruikerservaring</li>
          </ul>

          <h2>Core Web Vitals uitgelegd</h2>
          <p>Google's Core Web Vitals zijn de metrics die het meeste uitmaken:</p>
          <ul>
            <li><strong>LCP (Largest Contentful Paint)</strong> - Moet onder 2,5 seconden zijn. Meet wanneer de hoofdcontent zichtbaar wordt.</li>
            <li><strong>FID (First Input Delay)</strong> - Moet onder 100ms zijn. Meet hoe snel de pagina reageert op interactie.</li>
            <li><strong>CLS (Cumulative Layout Shift)</strong> - Moet onder 0,1 zijn. Meet visuele stabiliteit - springt content rond?</li>
          </ul>

          <h2>Mijn aanpak voor prestaties</h2>
          <p>Elke website die ik bouw is vanaf het begin geoptimaliseerd voor snelheid:</p>
          <ul>
            <li>Moderne frameworks met automatische code splitting</li>
            <li>Automatische beeldoptimalisatie met Next.js Image component</li>
            <li>Statische generatie waar mogelijk</li>
            <li>Minimale JavaScript-bundels</li>
            <li>Prestatietesten voor elke lancering</li>
          </ul>

          <h2>Conclusie</h2>
          <p>Websitesnelheid is niet optioneel in 2025. Het beïnvloedt gebruikerservaring, SEO en je bottom line. Het goede nieuws? Met moderne tools en best practices is snelle websites bouwen makkelijker dan ooit.</p>
          <p>Als je huidige website traag is, is er bijna altijd ruimte voor verbetering. Soms leveren kleine optimalisaties dramatische resultaten.</p>
        `,
      },
    },

    // Newsletter
    newsletter: {
      label: 'Nieuwsbrief',
      title: 'Blijf op de hoogte',
      subtitle: 'Ontvang praktische tips over webontwikkeling, designtrends en technologie. Geen spam, afmelden wanneer je wilt.',
      placeholder: 'Vul je e-mail in',
      subscribe: 'Abonneren',
      subscribing: 'Bezig met abonneren...',
      success: 'Bedankt! Check je inbox.',
      error: 'Er ging iets mis. Probeer het opnieuw.',
      disclaimer: 'Door te abonneren ga je akkoord met het ontvangen van e-mails. Afmelden wanneer je wilt.',
      benefit1: 'Wekelijkse tips',
      benefit2: 'Gratis bronnen',
      benefit3: 'Vroege toegang',
    },

    // Cookies
    cookies: {
      message: 'Deze website gebruikt cookies om je ervaring te verbeteren. Door deze site te blijven gebruiken, accepteer je ons',
      privacyPolicy: 'Privacybeleid',
      accept: 'Accepteren',
      decline: 'Weigeren',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

