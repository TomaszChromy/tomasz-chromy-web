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
      blog: 'Blog',
      contact: 'Contact',
      bookCall: 'Book a call',
    },
    
    // Hero
    hero: {
      greeting: "Hi, I'm",
      name: 'Tomasz Chromy',
      role: 'Full-Stack Developer',
      h1Main: 'I build web apps and websites that actually work for your business',
      h1Highlight: '',
      h2Services: 'Business Websites • E-commerce • Landing Pages • UI/UX Design',
      subtitle: 'I design and develop modern web applications and websites that generate more leads, higher conversions, and faster growth – from first mockup to production deployment.',
      tagline: 'Digital product & web development partner for businesses.',
      cta: 'Start Your Project',
      ctaSecondary: 'See selected work',
      experience: 'Years exp.',
      projects: 'Projects',
      statsCaption: 'Projects for software houses, service companies, and solo entrepreneurs.',
    },
    
    // About
    about: {
      label: 'About Me',
      title: 'Passionate about',
      titleHighlight: 'building solutions',
      intro: "I'm a",
      introName: 'full-stack web developer and digital product specialist.',
      introText: '',
      description: 'I combine UX thinking, clean code, and a focus on business outcomes to deliver complete solutions – from first concept to production deployment.',
      tagline: 'Digital product & web development partner for businesses.',
      yearsExp: 'Years of experience',
      projectsCompleted: 'Projects completed',
      satisfaction: 'Client satisfaction',
    },
    
    // Services
    services: {
      label: 'Services',
      title: 'What I can build for you',
      subtitle: 'End-to-end web development services – from first concept, through UX and design, to deployment and post-launch support.',
      webDev: 'Websites',
      webDevDesc: 'Modern, fast, and responsive business websites and landing pages built for conversion.',
      fullStack: 'Web Apps / Full-Stack',
      fullStackDesc: 'Custom web applications with backend, integrations, and database – from admin panels to internal team systems.',
      uiux: 'UI/UX Design',
      uiuxDesc: 'User-centered interface design – from Figma mockups to a polished, consistent component system in code.',
      uiuxFeature1: 'Information architecture',
      uiuxFeature2: 'Prototypes',
      uiuxFeature3: 'Design system',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Online stores that sell: fast, clear, and well-integrated with payments and analytics.',
    },
    
    // Portfolio
    portfolio: {
      label: 'Portfolio',
      title: 'Selected',
      titleHighlight: 'projects',
      subtitle: 'Real solutions for real businesses',
      cta: 'Have a project in mind?',
      problemLabel: 'Challenge',
      solutionLabel: 'Solution',
      resultLabel: 'Result',
      // Project 1 - IT Project Management Web App
      project1Tag: 'Web App',
      project1Title: 'IT project management system – web app',
      project1Problem: 'The team lacked a single, clear place to track tasks and priorities.',
      project1Solution: 'I designed UX and UI and implemented a responsive web app with project boards, tasks, and dashboards.',
      project1Result: 'Better work visibility, fewer status meetings, more predictable task delivery.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Efficiency',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Meetings',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Premium online store – e-commerce',
      project2Problem: 'Low conversions and slow page loads hurting sales.',
      project2Solution: 'Rebuilt with Next.js, optimized checkout and lazy-loading.',
      project2Result: 'Higher conversion, faster loading, better customer retention.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Conversion',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Load time',
      // Project 3
      project3Tag: 'Landing Page',
      project3Title: 'Landing page for SaaS campaign – conversion',
      project3Problem: 'Ads driving traffic but landing page not converting.',
      project3Solution: 'Redesign with clear CTA, A/B testing and analytics.',
      project3Result: 'Higher CTR and conversion rate, better campaign ROI.',
      project3Metric1Value: '12%',
      project3Metric1Label: 'CTR',
      project3Metric2Value: '3.2%',
      project3Metric2Label: 'Conversion',
    },

    // Pricing
    pricing: {
      label: 'Pricing',
      title: 'Simple, transparent pricing',
      subtitle: 'Choose the plan that works best for your project',
      consultation: 'Consultation',
      consultationPrice: 'Free',
      consultationPeriod: '30 min',
      consultationNote: 'A short online meeting where we:',
      consultationPoints: [
        'Discuss your goals and needs',
        'Identify possible directions and technologies',
        'Estimate budget and rough timeline',
      ],
      consultationCta: 'Book a consultation',
      project: 'Project',
      projectPrice: 'from €1,200',
      projectPeriod: 'one-time',
      projectNote: 'Complete solution from A to Z:',
      projectPoints: [
        'Strategy + design + implementation',
        'Full documentation and brief training',
        '30 days post-launch support',
        'Quality guarantee',
      ],
      projectCta: 'Start project',
      projectBadge: 'Most popular',
      partnership: 'Partnership',
      partnershipPrice: 'from €750',
      partnershipPeriod: 'monthly',
      partnershipNote: 'Ongoing support and product development:',
      partnershipPoints: [
        'Set number of hours per month',
        'Priority support',
        'Regular optimizations',
        'Reports and recommendations for next steps',
      ],
      partnershipCta: "Let's talk",
    },
    
    // Contact
    contact: {
      label: 'Get in Touch',
      title: "Let's build something",
      titleHighlight: 'amazing together',
      subtitle: "Tell me briefly about your project – I'll get back to you with possible options and a rough budget estimate.",
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
      responseTime: 'I usually respond within 1–2 business days. If your project is urgent – mention it in your message.',
      scheduleCall: 'Prefer to talk?',
      scheduleFree: 'Free 15-minute intro call – no strings attached.',
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
      ctaSubtitle: "Have a project in mind? I'd love to hear about it.",
      ctaBtn: 'Get in touch',
      navigation: 'Navigation',
      connect: 'Connect',
      partners: 'Partners',
      rights: 'All rights reserved.',
      disclaimer: 'This website was created for training purposes only and does not constitute a commercial offer.',
      bio: 'Full-stack web developer and digital product specialist. I combine UX thinking, clean code, and a focus on business outcomes.',
      privacyPolicy: 'Privacy Policy',
      cookies: 'Cookies',
      visitorCount: 'Visitors',
    },

    // Construction Banner
    constructionBanner: {
      text: '🚧 This website is under construction. New features coming soon!',
      close: 'Close',
    },

    // For Whom
    forWhom: {
      label: 'Who is this for?',
      title: 'Who I work with',
      subtitle: 'I help businesses of all sizes build their digital presence',
      startups: 'Software houses & startups',
      startupsDesc: 'Tech teams that need support with client projects or their own products.',
      smallBusiness: 'Service companies',
      smallBusinessDesc: 'Local and regional businesses looking for professional websites that convert visitors into customers.',
      agencies: 'Marketing agencies',
      agenciesDesc: 'Agencies needing a reliable development partner for client projects.',
      entrepreneurs: 'Solo entrepreneurs',
      entrepreneursDesc: 'Freelancers and one-person businesses that need a portfolio or landing page that stands out.',
    },

    // Process
    process: {
      label: 'Process',
      title: 'How I work',
      subtitle: 'A clear, step-by-step approach to every project',
      step1Title: 'Conversation & Analysis',
      step1Desc: 'I get to know your business, goals and context. Together we define priorities and success criteria.',
      step2Title: 'Strategy & Design',
      step2Desc: 'I create concepts and mockups. We discuss, iterate and refine the details.',
      step3Title: 'Build & Implementation',
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
      title: 'Practical knowledge for websites that sell',
      subtitle: 'Actionable guides on web development, UX, and digital strategy — no fluff, just real examples.',
      readMore: 'Read guide →',
      // Hero extras
      heroForWho: 'For business owners, freelancers, and teams who want to:',
      heroBenefit1: 'have a website that actually sells',
      heroBenefit2: 'understand tech decisions without jargon',
      heroBenefit3: 'make better business decisions',
      heroCta: 'See recommended articles',
      featuredLabel: 'Featured article',
      // Search & Sort
      searchPlaceholder: 'Search articles…',
      sortNewest: 'Newest',
      sortOldest: 'Oldest',
      sortShortest: 'Shortest',
      sortLongest: 'Longest',
      resultsCount: 'Results',
      noResults: 'No results',
      noResultsHint: 'Try changing the category or search for a different phrase.',
      // CTA Section
      ctaTitle: 'Want a quick review of your website?',
      ctaDescription: "I'll tell you what will actually improve conversion: structure, CTAs, speed, mobile, and basic SEO.",
      ctaButton: 'Book a free call',
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
      // NEW 2026 articles
      article5Title: "Why Your Website Doesn't Sell in 2026 (And How to Fix It)",
      article5Excerpt: "In 2026, a website is not just a business card. It's a sales tool that should generate leads. Learn why your site isn't delivering results.",
      category5: 'Strategy',
      readTime5: '10 min read',
      article6Title: 'Core Web Vitals in 2026 – What Business Owners Need to Know',
      article6Excerpt: "Core Web Vitals sounds like developer jargon, but the effects are very business-oriented: loading time, page response, and element 'jumping.'",
      category6: 'Performance',
      readTime6: '9 min read',
      article7Title: "WCAG 2.2 and Accessibility in 2026 – Obligation, Not a 'Nice Extra'",
      article7Excerpt: 'Website accessibility has been treated as nice to have for years. Since WCAG 2.2 became official, we are talking about a real business obligation.',
      category7: 'Accessibility',
      readTime7: '8 min read',
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
      // NEW ARTICLES 2026
      "website-not-selling-2026": {
        title: "Why Your Website Doesn't Sell in 2026 (And How to Fix It Step by Step)",
        category: "Strategy",
        date: "January 2, 2026",
        readTime: "10 min read",
        excerpt: "In 2026, a website is not just a business card. It's a sales tool that should generate leads. Learn why your site isn't delivering results.",
        content: `
          <p class="text-xl text-cool-200 mb-8">In 2026, a website is no longer just a "business card." It's a sales tool that should generate leads, support the sales process, and take the load off your team. The problem is that most websites are still designed as if time stopped in 2015.</p>

          <p>In this article, I'll show you, from a digital product developer's perspective, why your website isn't delivering results and what you can do to change that.</p>

          <h2>1. No Clear Message: "What, For Whom, With What Result"</h2>
          <p>A user lands on your website and within 3-5 seconds must understand three things:</p>
          <ul>
            <li>What do you do?</li>
            <li>Who is it for?</li>
            <li>What result do you deliver?</li>
          </ul>
          <p>If they see generic slogans in the hero section ("Welcome to our website," "Comprehensive IT solutions") or a list of technologies, they can't connect it to their problem. The result? They leave.</p>

          <h3>How to fix it:</h3>
          <p>Build your headline using this formula: "I help [specific clients] achieve [specific result] using [specific type of solutions]."</p>
          <p>In the subtitle, clarify what the result looks like in practice (more leads, faster service, less chaos).</p>

          <h2>2. Lack of Trust: Zero Proof, Only Promises</h2>
          <p>People no longer believe slogans. They believe in proof:</p>
          <ul>
            <li>Case studies with concrete results</li>
            <li>Client testimonials with name, position, and industry</li>
            <li>Logos of companies you've worked with</li>
            <li>Numbers: "25+ projects," "3+ years of experience," "100% satisfaction"</li>
          </ul>
          <p>In 2025-2026, expert content and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) are among the most important SEO and trust factors.</p>

          <h2>3. Weak CTAs and Difficult Contact</h2>
          <p>A common mistake: contact form hidden at the bottom of the page with no clear information about "what happens after you send it."</p>
          <p>A good website in 2026 has:</p>
          <ul>
            <li>Visible CTA buttons in multiple places ("Schedule a consultation," "Request a quote," "Call")</li>
            <li>Short, simple form (name, email, project description, optionally budget range)</li>
            <li>Information about when to expect a response ("I reply within 1-2 business days")</li>
          </ul>

          <h2>4. The Website Is Simply... Slow</h2>
          <p>Google has been clearly communicating for years that Core Web Vitals – the real user experience related to loading, interactivity, and visual stability – are important for both UX and search visibility.</p>
          <p>If your site takes 4-5 seconds to load and content "jumps" during loading, users abandon it immediately. Even the most polished text won't help.</p>

          <h3>What you can do with your developer:</h3>
          <ul>
            <li>Optimize graphics (next-gen formats, compression)</li>
            <li>Enable lazy loading for images and sections off-screen</li>
            <li>Simplify CSS and JS (remove unused libraries)</li>
            <li>Use cache and CDN</li>
          </ul>

          <h2>5. No WCAG 2.2 Compliance and Mobile Adaptation</h2>
          <p>Since 2023, WCAG 2.2 has been the official standard – the new version of accessibility guidelines that adds 9 additional criteria regarding clickable element size, keyboard navigation, and simple authentication.</p>
          <p>In practice:</p>
          <ul>
            <li>Too-small buttons on mobile</li>
            <li>Poor text contrast</li>
            <li>Missing focus states for active elements</li>
            <li>Forms unfriendly to users with cognitive difficulties</li>
          </ul>
          <p>This is no longer just an "aesthetic issue" but a legal and business risk (rejected users).</p>

          <h2>6. No Consistent Story and Process</h2>
          <p>When a user scrolls through the page, they should feel like someone is guiding them:</p>
          <ul>
            <li>Who you are and what you do (hero)</li>
            <li>Who it's for (target group adaptation)</li>
            <li>What problems you solve (services, cases)</li>
            <li>How you work (process)</li>
            <li>How much it costs (at least price ranges)</li>
            <li>What to do next (contact / consultation)</li>
          </ul>
          <p>If sections are random and the narrative is interrupted, the user gets lost. A good website is actually a well-structured sales conversation, just in digital form.</p>

          <h2>7. Summary: Website as a Tool, Not a Catalog</h2>
          <p>If you want your website to start actually working for your business:</p>
          <ul>
            <li>Clear message – specifically: what, for whom, with what effect</li>
            <li>Add proof – projects, testimonials, numbers, your own products</li>
            <li>Make contact easy – strong CTAs, simple form, clear expectations</li>
            <li>Take care of performance – Core Web Vitals, lightweight resources</li>
            <li>Unify UX and accessibility – WCAG 2.2 instead of "it'll be fine somehow"</li>
          </ul>
          <p>This is the approach I follow in projects created under the TomaszChromy.com brand – treating the website as part of the sales process, not a digital business card that everyone forgets a week after launch.</p>
        `,
      },
      "core-web-vitals-2026": {
        title: "Core Web Vitals in 2026 – What Business Owners Need to Know (Without Technical Jargon)",
        category: "Performance",
        date: "January 1, 2026",
        readTime: "9 min read",
        excerpt: "Core Web Vitals sounds like a term from a developer presentation, but the effects are very business-oriented: loading time, page response, and element 'jumping.'",
        content: `
          <p class="text-xl text-cool-200 mb-8">Core Web Vitals sounds like a term from a developer presentation, but the effects are very business-oriented: it's about loading time, page response to clicks, and "jumping" elements. If these parameters are poor, you lose customers before they even read your offer.</p>

          <p>Below I explain what Core Web Vitals are, how they affect SEO and conversion, and what decisions you can make as a business owner without being a programmer.</p>

          <h2>1. What Are Core Web Vitals?</h2>
          <p>Google introduced three metrics under the common name Core Web Vitals that measure real user experience:</p>
          <ul>
            <li><strong>LCP (Largest Contentful Paint)</strong> – how quickly the main content becomes visible</li>
            <li><strong>INP (Interaction to Next Paint)</strong> – how quickly the page responds to first interaction (e.g., click)</li>
            <li><strong>CLS (Cumulative Layout Shift)</strong> – how much the layout "jumps" during loading</li>
          </ul>
          <p>For business, this means a simple question: Can the user see and use the page without getting frustrated?</p>
          <p>Google openly states that good Core Web Vitals are one element of properly assessed "page quality" in search results.</p>

          <h2>2. How Poor Core Web Vitals Kill Conversion</h2>
          <p>Imagine you're driving traffic from ads to a landing page. You pay for every click. The user:</p>
          <ul>
            <li>Waits several seconds for loading</li>
            <li>Sees a cookie banner suddenly appear above the button and everything shifts down</li>
            <li>Clicks on the form, but the page responds after a moment</li>
            <li>Something jumps again, and part of the content loads after 2 seconds</li>
          </ul>
          <p>This is a classic example of poor Core Web Vitals – and the reason why more and more campaigns end in disappointment.</p>
          <p>From a data perspective:</p>
          <ul>
            <li>Bounce rate increases</li>
            <li>Time on page decreases</li>
            <li>Number of submitted forms / CTA clicks drops</li>
          </ul>

          <h2>3. What You Can Do as a Business Owner (Without Getting Into Code)</h2>
          <p>You don't need to know how a bundler, lazy loading, or font preloading works. But you can:</p>

          <h3>Ask the right questions to your contractor:</h3>
          <ul>
            <li>Will the website be optimized for Core Web Vitals?</li>
            <li>Will we check results in Google tools (Lighthouse, PageSpeed Insights, Search Console)?</li>
            <li>How will we monitor performance after launch?</li>
          </ul>

          <h3>Define it as a contract requirement:</h3>
          <p>E.g., "The website should achieve at least 'Good' status in Core Web Vitals for 75% of mobile users according to Search Console."</p>

          <h3>Give up "heavy" solutions:</h3>
          <ul>
            <li>Excessive effects, animations, "floating" plugins like chat</li>
            <li>Large, unoptimized stock photos</li>
            <li>10 different fonts from external servers</li>
          </ul>
          <p>Well-chosen technology (e.g., Next.js + sensible approach to images and cache) plus common sense gives very good results with reasonable effort.</p>

          <h2>4. What Your Developer Should Do</h2>
          <p>From the technical side, the list is longer, but can be summarized:</p>
          <ul>
            <li>Use modern image formats (AVIF, WebP)</li>
            <li>Apply lazy loading for images and sections off the first screen</li>
            <li>Minimize and split JS and CSS code</li>
            <li>Use CDN and HTTP cache</li>
            <li>Avoid blocking scripts (e.g., poorly implemented tracking)</li>
          </ul>
          <p>In projects I create under the TomaszChromy.com brand, I treat this as standard, not an "additional option" – because it's part of product quality, not a gadget.</p>

          <h2>5. How to Monitor Core Web Vitals After Launch</h2>
          <p>Performance is not a one-time action. Even if everything is green at the start, over time:</p>
          <ul>
            <li>New scripts are added (e.g., marketing, chat)</li>
            <li>The number of images grows</li>
            <li>Hosting changes</li>
          </ul>
          <p>That's why it's worth:</p>
          <ul>
            <li>Regularly checking the Core Web Vitals report in Google Search Console</li>
            <li>Doing a brief "performance review" once a quarter – especially if the website is heavily developed</li>
          </ul>
          <p>A good practice in long-term cooperation is to include this as a retainer element: every month/quarter we check performance and fix what's needed.</p>

          <h2>6. Summary</h2>
          <p>Core Web Vitals are not "Google's whim" or a topic only for programmers. It's a very practical indicator of whether your website is fast, responsive, and stable – meaning whether it doesn't discourage people before they even see the offer.</p>
          <p>If you invest in traffic (SEO, ads, social media), treat performance as part of customer acquisition cost. Because every second of delay is leads you'll simply never see.</p>
        `,
      },
      "wcag-accessibility-2026": {
        title: "WCAG 2.2 and Accessibility in 2026 – Obligation, Not a 'Nice Extra'",
        category: "Accessibility",
        date: "December 28, 2025",
        readTime: "8 min read",
        excerpt: "Website accessibility has been treated as 'nice to have' for years. Since WCAG 2.2 became an official W3C standard, we're talking about a real business obligation.",
        content: `
          <p class="text-xl text-cool-200 mb-8">Website accessibility has been treated as "nice to have" for years. Since WCAG 2.2 became an official W3C standard and increasingly appears in legal requirements and tenders, we're talking about a real business obligation, not just for public administration.</p>

          <p>In this text, I explain what WCAG 2.2 practically means for a business owner and how to approach the topic when designing or modernizing a website/application.</p>

          <h2>1. What Is WCAG 2.2 in a Few Sentences</h2>
          <p>WCAG (Web Content Accessibility Guidelines) is a set of guidelines designed to ensure equal use of websites and applications by people:</p>
          <ul>
            <li>With visual or hearing impairments</li>
            <li>With cognitive difficulties</li>
            <li>Using keyboard instead of mouse</li>
            <li>Using screen readers</li>
          </ul>
          <p>Version 2.2 adds nine new criteria including minimum size for touch elements, ease of authentication, focus stability, and interaction simplicity on mobile devices.</p>

          <h2>2. Why Business Should Care</h2>
          <p>There are three reasons:</p>

          <h3>Legal risk</h3>
          <p>In many countries (especially EU), legal requirements for website accessibility are increasing even in the private sector (banks, e-commerce, mass services).</p>

          <h3>Wider customer base</h3>
          <p>People with disabilities are a real part of the market. An inaccessible website means they simply cannot use your offer.</p>

          <h3>Better UX for everyone</h3>
          <p>Many accessibility principles (contrast, readable typography, logical navigation) improve comfort for all users, not just those with formal limitations.</p>

          <p>Additionally, Google increasingly values "page experience" and content accessibility as an element of page quality.</p>

          <h2>3. Key WCAG 2.2 Areas from a Website Owner's Perspective</h2>
          <p>Instead of getting into criterion numbers, let's look at this from a business perspective.</p>

          <h3>a) Readability and contrast</h3>
          <ul>
            <li>Appropriate font size (min. 16px on web)</li>
            <li>Sufficient color contrast (minimum 4.5:1 for normal text)</li>
            <li>Font that's easy to read (without decorative "tricks")</li>
          </ul>

          <h3>b) Clickable element size</h3>
          <p>Buttons and links should have a minimum size of 24×24 px (ideally 44×44 px on mobile). This is important for people with motor impairments and anyone using a phone on the go.</p>

          <h3>c) Keyboard navigation</h3>
          <p>Every element on the page (menus, buttons, forms) should be accessible without a mouse. Focus states should be visible – the user needs to see where they are.</p>

          <h3>d) Forms and authentication</h3>
          <p>Forms should be simple, with clear error messages, without forcing users to remember codes or perform complex operations.</p>

          <h3>e) Content alternatives</h3>
          <p>Images should have alt descriptions, videos should have subtitles. This also helps SEO.</p>

          <h2>4. How to Approach Accessibility Practically</h2>

          <h3>If you're creating a new website:</h3>
          <p>Require accessibility compliance with WCAG 2.2 at level AA (standard for most commercial websites) as part of the specification.</p>

          <h3>If you have an existing website:</h3>
          <p>Order an accessibility audit. It can be done manually or with automated tools (like axe, WAVE), but a comprehensive review requires expert knowledge.</p>

          <h3>Make it part of the process:</h3>
          <p>Accessibility isn't something you add at the end – it's designed from the start. Choose a contractor who understands this.</p>

          <h2>5. What I Apply in My Projects</h2>
          <p>On tomaszchromy.com and similar projects, I apply:</p>
          <ul>
            <li>Minimum clickable element size</li>
            <li>Clear focus and hover states</li>
            <li>Clear heading hierarchy</li>
            <li>Logical tabulation order</li>
            <li>Appropriate contrast and font sizes</li>
            <li>Semantic HTML (headings, lists, sections)</li>
          </ul>
          <p>This increases the chance that the user will complete the entire journey instead of getting frustrated.</p>

          <h2>6. Summary</h2>
          <p>WCAG 2.2 is not a topic "for programmers" or "for the public sector." It's a business standard that affects:</p>
          <ul>
            <li>Legal risk (and this is growing)</li>
            <li>Market reach (people with disabilities are customers too)</li>
            <li>General UX (accessibility = good design for everyone)</li>
          </ul>
          <p>If you're planning a new website or modernizing an existing one, include WCAG 2.2 in the requirements from the start. It's cheaper than fixing it later – and it shows you care about all your customers, not just the "ideal" ones.</p>
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
      blog: 'Wiedza',
      contact: 'Kontakt',
      bookCall: 'Umów rozmowę',
    },

    // Hero
    hero: {
      greeting: 'Cześć, jestem',
      name: 'Tomasz Chromy',
      role: 'Full-Stack Developer',
      h1Main: 'Tworzę aplikacje webowe i strony, które realnie pracują dla Twojego biznesu',
      h1Highlight: '',
      h2Services: 'Strony Firmowe • E-commerce • Landing Pages • UI/UX Design',
      subtitle: 'Projektuję i rozwijam nowoczesne aplikacje oraz strony internetowe, które generują więcej leadów, wyższą konwersję i szybszy wzrost – od pierwszej makiety do wdrożenia na produkcję.',
      tagline: 'Partner w tworzeniu produktów cyfrowych i stron dla firm.',
      cta: 'Rozpocznij projekt',
      ctaSecondary: 'Zobacz wybrane realizacje',
      experience: 'Lat doświadczenia',
      projects: 'Projektów',
      statsCaption: 'Projekty dla software house\'ów, firm usługowych i soloprzedsiębiorców.',
    },

    // About
    about: {
      label: 'O mnie',
      title: 'Pasja do',
      titleHighlight: 'tworzenia rozwiązań',
      intro: 'Jestem',
      introName: 'full-stack web developerem i specjalistą od produktów cyfrowych.',
      introText: '',
      description: 'Łączę myślenie UX, czysty kod i fokus na wyniki biznesowe, żeby dowozić kompletne rozwiązania – od pierwszej koncepcji do wdrożenia na produkcję.',
      tagline: 'Partner w tworzeniu produktów cyfrowych i stron dla firm.',
      yearsExp: 'Lat doświadczenia',
      projectsCompleted: 'Zrealizowanych projektów',
      satisfaction: 'Zadowolonych klientów',
    },

    // Services
    services: {
      label: 'Usługi',
      title: 'Co mogę dla Ciebie zbudować',
      subtitle: 'Kompleksowe usługi web developmentu – od pierwszej koncepcji, przez UX i design, po wdrożenie i wsparcie po starcie.',
      webDev: 'Strony internetowe',
      webDevDesc: 'Nowoczesne, szybkie i responsywne strony firmowe oraz landing page\'e nastawione na konwersję.',
      fullStack: 'Aplikacje webowe / Full-Stack',
      fullStackDesc: 'Dedykowane aplikacje webowe z backendem, integracjami i bazą danych – od paneli administracyjnych po wewnętrzne systemy dla zespołów.',
      uiux: 'UI/UX Design',
      uiuxDesc: 'Projektowanie interfejsów skoncentrowanych na użytkowniku – od makiet w Figma po dopracowany, spójny system komponentów w kodzie.',
      uiuxFeature1: 'Architektura informacji',
      uiuxFeature2: 'Prototypy',
      uiuxFeature3: 'Design system',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Sklepy internetowe, które sprzedają: szybkie, przejrzyste i dobrze zintegrowane z płatnościami oraz analityką.',
    },

    // Portfolio
    portfolio: {
      label: 'Portfolio',
      title: 'Wybrane',
      titleHighlight: 'projekty',
      subtitle: 'Realne rozwiązania dla realnych biznesów',
      cta: 'Masz pomysł na projekt?',
      problemLabel: 'Wyzwanie',
      solutionLabel: 'Rozwiązanie',
      resultLabel: 'Efekt',
      // Project 1 - IT Project Management Web App
      project1Tag: 'Web App',
      project1Title: 'System zarządzania projektami IT – web app',
      project1Problem: 'Zespół nie miał jednego, przejrzystego miejsca do śledzenia zadań i priorytetów.',
      project1Solution: 'Zaprojektowałem UX i UI oraz wdrożyłem responsywną aplikację webową z tablicami projektów, zadaniami i dashboardami.',
      project1Result: 'Lepsza widoczność pracy, mniej spotkań statusowych, bardziej przewidywalne dowożenie zadań.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Efektywność',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Spotkania',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Sklep internetowy premium – e-commerce',
      project2Problem: 'Niska konwersja i wolne ładowanie strony obniżały sprzedaż.',
      project2Solution: 'Przebudowa w Next.js, optymalizacja checkout i lazy-loading.',
      project2Result: 'Wyższa konwersja, szybsze ładowanie, lepsza retencja klientów.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Konwersja',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Czas ładowania',
      // Project 3
      project3Tag: 'Landing Page',
      project3Title: 'Landing page dla kampanii SaaS – konwersja',
      project3Problem: 'Reklamy generowały ruch, ale landing page nie konwertował.',
      project3Solution: 'Redesign z jasnym CTA, testy A/B i analityka.',
      project3Result: 'Wyższy CTR i wskaźnik konwersji, lepszy zwrot z kampanii.',
      project3Metric1Value: '12%',
      project3Metric1Label: 'CTR',
      project3Metric2Value: '3.2%',
      project3Metric2Label: 'Konwersja',
    },

    // Pricing
    pricing: {
      label: 'Cennik',
      title: 'Prosty, przejrzysty cennik',
      subtitle: 'Wybierz plan najlepszy dla Twojego projektu',
      consultation: 'Konsultacja',
      consultationPrice: 'Bezpłatnie',
      consultationPeriod: '30 min',
      consultationNote: 'Krótkie spotkanie online, na którym:',
      consultationPoints: [
        'Omawiamy Twoje cele i potrzeby',
        'Wskazuję możliwe kierunki i technologie',
        'Szacuję budżet i orientacyjny harmonogram',
      ],
      consultationCta: 'Umów konsultację',
      project: 'Projekt',
      projectPrice: 'od 5 000 zł',
      projectPeriod: 'jednorazowo',
      projectNote: 'Kompleksowe rozwiązanie od A do Z:',
      projectPoints: [
        'Strategia + design + wdrożenie',
        'Pełna dokumentacja i krótkie szkolenie',
        '30 dni wsparcia po uruchomieniu',
        'Gwarancja jakości',
      ],
      projectCta: 'Rozpocznij projekt',
      projectBadge: 'Najpopularniejszy',
      partnership: 'Współpraca',
      partnershipPrice: 'od 3 000 zł',
      partnershipPeriod: 'miesięcznie',
      partnershipNote: 'Stałe wsparcie i rozwój Twojego produktu:',
      partnershipPoints: [
        'Określona liczba godzin w miesiącu',
        'Priorytetowe wsparcie',
        'Regularne optymalizacje',
        'Raporty i rekomendacje dalszych działań',
      ],
      partnershipCta: 'Porozmawiajmy',
    },

    // Contact
    contact: {
      label: 'Kontakt',
      title: 'Zbudujmy razem coś',
      titleHighlight: 'niesamowitego',
      subtitle: 'Opowiedz krótko o swoim projekcie – wrócę do Ciebie z możliwymi opcjami i orientacyjnym budżetem.',
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
      responseTime: 'Zwykle odpowiadam w ciągu 1–2 dni roboczych. Jeśli projekt wymaga pilnej reakcji – napisz to w wiadomości.',
      scheduleCall: 'Wolisz porozmawiać?',
      scheduleFree: 'Bezpłatna 15-minutowa rozmowa wstępna – bez zobowiązań.',
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
      ctaSubtitle: 'Masz pomysł na projekt? Chętnie o nim posłucham.',
      ctaBtn: 'Skontaktuj się',
      navigation: 'Nawigacja',
      connect: 'Social media',
      partners: 'Partnerzy',
      rights: 'Wszelkie prawa zastrzeżone.',
      disclaimer: 'Ta strona została stworzona wyłącznie w celach szkoleniowych i nie stanowi oferty handlowej.',
      bio: 'Full-stack web developer i specjalista od produktów cyfrowych. Łączę myślenie UX, czysty kod i fokus na wyniki biznesowe.',
      privacyPolicy: 'Polityka Prywatności',
      cookies: 'Cookies',
      visitorCount: 'Odwiedziny',
    },

    // Construction Banner
    constructionBanner: {
      text: '🚧 Strona w budowie. Nowe funkcje pojawią się wkrótce!',
      close: 'Zamknij',
    },

    // For Whom
    forWhom: {
      label: 'Dla kogo?',
      title: 'Z kim pracuję',
      subtitle: 'Pomagam firmom każdej wielkości budować ich cyfrową obecność',
      startups: 'Software house\'y i startupy',
      startupsDesc: 'Zespoły technologiczne, które potrzebują wsparcia przy projektach klientów lub własnych produktach.',
      smallBusiness: 'Firmy usługowe',
      smallBusinessDesc: 'Lokalne i regionalne firmy szukające profesjonalnych stron, które zamieniają odwiedzających w klientów.',
      agencies: 'Agencje marketingowe',
      agenciesDesc: 'Agencje potrzebujące niezawodnego partnera deweloperskiego do projektów klientów.',
      entrepreneurs: 'Soloprzedsiębiorcy',
      entrepreneursDesc: 'Freelancerzy i jednoosobowe firmy, które potrzebują portfolio lub landing page, który wyróżnia się.',
    },

    // Process
    process: {
      label: 'Proces',
      title: 'Jak pracuję',
      subtitle: 'Jasne, krok po kroku podejście do każdego projektu',
      step1Title: 'Rozmowa i analiza',
      step1Desc: 'Poznaję Twój biznes, cele i kontekst. Wspólnie definiujemy priorytety i kryteria sukcesu.',
      step2Title: 'Strategia i design',
      step2Desc: 'Tworzę koncepcje i makiety. Dyskutujemy, iterujemy i dopracowujemy szczegóły.',
      step3Title: 'Budowa i wdrożenie',
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
      title: 'Praktyczna wiedza o tworzeniu stron, które sprzedają',
      subtitle: 'Konkretne poradniki o web developmencie, UX i strategii online — bez lania wody, za to z realnymi przykładami.',
      readMore: 'Czytaj poradnik →',
      // Hero extras
      heroForWho: 'Dla właścicieli firm, freelancerów i zespołów, którzy chcą:',
      heroBenefit1: 'mieć stronę, która sprzedaje',
      heroBenefit2: 'zrozumieć techniczne decyzje bez żargonu',
      heroBenefit3: 'podejmować lepsze decyzje biznesowe',
      heroCta: 'Zobacz polecane artykuły',
      featuredLabel: 'Polecany artykuł',
      // Search & Sort
      searchPlaceholder: 'Szukaj artykułów…',
      sortNewest: 'Najnowsze',
      sortOldest: 'Najstarsze',
      sortShortest: 'Najkrótsze',
      sortLongest: 'Najdłuższe',
      resultsCount: 'Wyniki',
      noResults: 'Brak wyników',
      noResultsHint: 'Spróbuj zmienić kategorię lub wyszukać inną frazę.',
      // CTA Section
      ctaTitle: 'Chcesz szybką ocenę Twojej strony?',
      ctaDescription: 'Powiem Ci co realnie poprawi konwersję: struktura, CTA, szybkość, mobile i SEO podstawowe.',
      ctaButton: 'Umów bezpłatną rozmowę',
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
      // NEW 2026 articles
      article5Title: 'Dlaczego Twoja strona w 2026 nie sprzedaje (i jak to naprawić)',
      article5Excerpt: 'W 2026 r. strona internetowa nie jest już wizytówką firmy. To narzędzie sprzedaży. Dowiedz się, dlaczego Twoja strona nie dowozi wyników.',
      category5: 'Strategia',
      readTime5: '10 min czytania',
      article6Title: 'Core Web Vitals w 2026 – co musi wiedzieć właściciel biznesu',
      article6Excerpt: 'Core Web Vitals brzmi jak termin dla developerów, ale skutki są biznesowe: czas ładowania, reakcja strony i „skakanie" elementów.',
      category6: 'Wydajność',
      readTime6: '9 min czytania',
      article7Title: 'WCAG 2.2 i dostępność w 2026 – obowiązek, nie „miły dodatek"',
      article7Excerpt: 'Dostępność stron przez lata była „fajnie mieć". Od WCAG 2.2 mówimy o realnym obowiązku dla biznesu.',
      category7: 'Dostępność',
      readTime7: '8 min czytania',
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
      // NEW ARTICLES 2026
      "website-not-selling-2026": {
        title: "Dlaczego Twoja strona w 2026 nie sprzedaje (i jak to naprawić krok po kroku)",
        category: "Strategia",
        date: "2 stycznia 2026",
        readTime: "10 min czytania",
        excerpt: "W 2026 r. strona internetowa nie jest już wizytówką firmy. To narzędzie sprzedaży. Dowiedz się, dlaczego Twoja strona nie dowozi wyników.",
        content: `
          <p class="text-xl text-cool-200 mb-8">W 2026 r. strona internetowa nie jest już „wizytówką firmy". To narzędzie sprzedaży, które ma generować leady, wspierać proces sprzedaży i odciążać Twój zespół. Problem w tym, że większość stron nadal jest projektowana tak, jakby czas zatrzymał się w 2015 r.</p>

          <p>W tym artykule pokażę, z perspektywy digital product developera, dlaczego strona nie dowozi wyników i co można zrobić, żeby zaczęła.</p>

          <h2>1. Brak jasnego komunikatu „co, dla kogo, z jakim rezultatem"</h2>
          <p>Użytkownik wchodzi na stronę i w ciągu 3–5 sekund musi zrozumieć trzy rzeczy:</p>
          <ul>
            <li>Co robisz?</li>
            <li>Dla kogo to jest?</li>
            <li>Jaki efekt dowozisz?</li>
          </ul>
          <p>Jeśli w hero widzi ogólne hasło („Witamy na naszej stronie", „Kompleksowe rozwiązania IT") albo listę technologii, to nie jest w stanie połączyć tego ze swoim problemem. Efekt? Wychodzi.</p>

          <h3>Jak to poprawić:</h3>
          <p>Zbuduj nagłówek w formule: „Pomagam [konkretnym klientom] osiągnąć [konkretny rezultat] za pomocą [konkretnego typu rozwiązań]".</p>
          <p>W podtytule doprecyzuj, jak wygląda rezultat w praktyce (więcej leadów, szybsza obsługa, mniej chaosu).</p>

          <h2>2. Brak zaufania: zero dowodów, tylko obietnice</h2>
          <p>Ludzie nie wierzą już w slogany. Wierzą w dowody:</p>
          <ul>
            <li>Case studies z konkretnymi efektami</li>
            <li>Opinie klientów z imieniem, stanowiskiem i branżą</li>
            <li>Logotypy firm, z którymi pracowałeś</li>
            <li>Liczby: „25+ projektów", „3+ lata doświadczenia", „100% satysfakcji"</li>
          </ul>
          <p>W 2025–2026 r. content ekspercki i E-E-A-T (doświadczenie, ekspertyza, autorytet, wiarygodność) są jednym z najważniejszych czynników SEO i zaufania.</p>

          <h2>3. Słabe CTA i trudny kontakt</h2>
          <p>Częsty błąd: formularz kontaktowy schowany na dole strony, bez jasnej informacji „co się stanie po wysłaniu".</p>
          <p>Dobra strona w 2026 r. ma:</p>
          <ul>
            <li>Widoczne przyciski CTA w kilku miejscach („Umów konsultację", „Poproś o wycenę", „Zadzwoń")</li>
            <li>Krótki, prosty formularz (imię, e-mail, opis projektu, opcjonalnie widełki budżetu)</li>
            <li>Informację, kiedy można spodziewać się odpowiedzi („odpowiadam w 1–2 dni robocze")</li>
          </ul>

          <h2>4. Strona jest po prostu… wolna</h2>
          <p>Google od kilku lat jasno komunikuje, że Core Web Vitals – czyli realne doświadczenie użytkownika związane z ładowaniem, interaktywnością i stabilnością wizualną – są ważne zarówno dla UX, jak i widoczności w wyszukiwarce.</p>
          <p>Jeśli strona ładuje się 4–5 sekund, a content „przeskakuje" podczas ładowania, użytkownicy od razu ją porzucają. Nawet najbardziej dopracowany tekst nic tu nie pomoże.</p>

          <h3>Co możesz zrobić wspólnie ze swoim developerem:</h3>
          <ul>
            <li>Zoptymalizować grafiki (formaty next-gen, kompresja)</li>
            <li>Włączyć lazy loading dla obrazów i sekcji poza ekranem</li>
            <li>Uprościć CSS i JS (usuwać nieużywane biblioteki)</li>
            <li>Stosować cache i CDN</li>
          </ul>

          <h2>5. Brak dostosowania do WCAG 2.2 i urządzeń mobilnych</h2>
          <p>Od 2023 r. obowiązuje WCAG 2.2 – nowa wersja wytycznych dostępności, która dokłada 9 dodatkowych kryteriów m.in. dot. rozmiaru klikanych elementów, pracy z klawiaturą i prostego uwierzytelniania.</p>
          <p>W praktyce:</p>
          <ul>
            <li>Zbyt małe przyciski na mobile</li>
            <li>Słaby kontrast tekstu</li>
            <li>Brak focus state dla elementów aktywnych</li>
            <li>Formularze nieprzyjazne dla osób z problemami poznawczymi</li>
          </ul>
          <p>To wszystko nie jest już tylko „kwestią estetyki", ale ryzykiem prawnym i biznesowym (odrzuceni użytkownicy).</p>

          <h2>6. Brak spójnej historii i procesu</h2>
          <p>Kiedy użytkownik przewija stronę, powinien czuć, że ktoś go prowadzi:</p>
          <ul>
            <li>Kim jesteś i co robisz (hero)</li>
            <li>Dla kogo to jest (dostosowanie do grup docelowych)</li>
            <li>Jakie problemy rozwiązujesz (usługi, case'y)</li>
            <li>Jak pracujesz (proces)</li>
            <li>Ile to kosztuje (przynajmniej widełki)</li>
            <li>Co ma zrobić dalej (kontakt / konsultacja)</li>
          </ul>
          <p>Jeśli sekcje są przypadkowe, a narracja przerywana, użytkownik się gubi. Dobra strona to tak naprawdę dobrze ułożona rozmowa sprzedażowa, tylko w formie cyfrowej.</p>

          <h2>7. Podsumowanie: strona jako narzędzie, nie katalog</h2>
          <p>Jeśli chcesz, żeby strona zaczęła realnie pracować dla Twojego biznesu:</p>
          <ul>
            <li>Wyczyść komunikat – konkretnie: co, dla kogo, z jakim efektem</li>
            <li>Dodaj dowody – projekty, opinie, liczby, własne produkty</li>
            <li>Ułatw kontakt – mocne CTA, prosty formularz, jasne oczekiwania</li>
            <li>Zadbaj o performance – Core Web Vitals, lekkie zasoby</li>
            <li>Uspójnij UX i dostępność – WCAG 2.2 zamiast „jakoś to będzie"</li>
          </ul>
          <p>To właśnie takim podejściem kieruję się w projektach tworzonych pod marką TomaszChromy.com – traktując stronę jak element procesu sprzedaży, a nie cyfrową wizytówkę, o której wszyscy zapominają tydzień po wdrożeniu.</p>
        `,
      },
      "core-web-vitals-2026": {
        title: "Core Web Vitals w 2026 – co musi wiedzieć właściciel biznesu (bez technicznego żargonu)",
        category: "Wydajność",
        date: "1 stycznia 2026",
        readTime: "9 min czytania",
        excerpt: 'Core Web Vitals brzmi jak termin z prezentacji dla developerów, ale skutki są bardzo biznesowe: czas ładowania, reakcja strony i „skakanie" elementów.',
        content: `
          <p class="text-xl text-cool-200 mb-8">Core Web Vitals brzmi jak termin z prezentacji dla developerów, ale skutki są bardzo biznesowe: to czas ładowania, reakcja strony na kliknięcia i „skakanie" elementów. Jeśli te parametry są złe, tracisz klientów jeszcze zanim przeczytają Twoją ofertę.</p>

          <p>Poniżej tłumaczę, czym są Core Web Vitals, jak wpływają na SEO i konwersję oraz jakie decyzje możesz podjąć jako właściciel firmy, nie będąc programistą.</p>

          <h2>1. Czym w ogóle są Core Web Vitals?</h2>
          <p>Google wprowadził trzy metryki pod wspólną nazwą Core Web Vitals, które mierzą realne doświadczenie użytkownika:</p>
          <ul>
            <li><strong>LCP (Largest Contentful Paint)</strong> – jak szybko widać główną treść</li>
            <li><strong>INP (Interaction to Next Paint)</strong> – jak szybko strona reaguje na pierwszą interakcję (np. kliknięcie)</li>
            <li><strong>CLS (Cumulative Layout Shift)</strong> – na ile layout „przeskakuje" podczas ładowania</li>
          </ul>
          <p>Dla biznesu oznacza to proste pytanie: Czy użytkownik widzi i może użyć strony bez wkurzania się?</p>
          <p>Google otwarcie mówi, że dobre Core Web Vitals są jednym z elementów odpowiednio ocenianej „jakości strony" w wynikach wyszukiwania.</p>

          <h2>2. Jak słabe Core Web Vitals zabijają konwersję</h2>
          <p>Wyobraź sobie, że kierujesz ruch z reklam na landing. Płacisz za każde kliknięcie. Użytkownik:</p>
          <ul>
            <li>Czeka kilka sekund na załadowanie</li>
            <li>Widzi jak nagle nad przyciskiem pojawia się baner z ciasteczkami i wszystko przesuwa się w dół</li>
            <li>Klika w formularz, ale strona reaguje po chwili</li>
            <li>Znowu coś przeskakuje, a część treści doskakuje po 2 sekundach</li>
          </ul>
          <p>To klasyczny przykład słabych Core Web Vitals – i powód, dla którego coraz więcej kampanii kończy się rozczarowaniem.</p>
          <p>Z punktu widzenia danych:</p>
          <ul>
            <li>Rośnie współczynnik odrzuceń</li>
            <li>Spada czas na stronie</li>
            <li>Maleje liczba wysłanych formularzy / kliknięć w CTA</li>
          </ul>

          <h2>3. Co możesz zrobić jako właściciel biznesu (bez wchodzenia w kod)</h2>
          <p>Nie musisz wiedzieć, jak działa bundler, lazy loading czy preloading fontów. Ale możesz:</p>

          <h3>Zadać właściwe pytania wykonawcy:</h3>
          <ul>
            <li>Czy strona będzie optymalizowana pod Core Web Vitals?</li>
            <li>Czy sprawdzimy wyniki w narzędziach Google (Lighthouse, PageSpeed Insights, Search Console)?</li>
            <li>Jak będziemy monitorować wydajność po wdrożeniu?</li>
          </ul>

          <h3>Zdefiniować to jako wymóg w umowie:</h3>
          <p>Np. „Strona ma osiągać co najmniej status „Good" w Core Web Vitals dla 75% użytkowników mobilnych wg Search Console".</p>

          <h3>Zrezygnować z „ciężkich" rozwiązań:</h3>
          <ul>
            <li>Przesadna ilość efektów, animacji, „pływających" wtyczek typu chat</li>
            <li>Wielkie, nieoptymalizowane zdjęcia stockowe</li>
            <li>10 różnych fontów z zewnętrznych serwisów</li>
          </ul>
          <p>Dobrze dobrana technologia (np. Next.js + sensowne podejście do obrazów i cache) plus zdrowy rozsądek dają bardzo dobre wyniki przy rozsądnym nakładzie pracy.</p>

          <h2>4. Co powinien zrobić Twój developer</h2>
          <p>Od strony technicznej lista jest dłuższa, ale da się ją streścić:</p>
          <ul>
            <li>Używać nowoczesnych formatów grafik (AVIF, WebP)</li>
            <li>Stosować lazy loading obrazów i sekcji poza pierwszym ekranem</li>
            <li>Minimalizować i dzielić kod JS i CSS</li>
            <li>Korzystać z CDN i cache HTTP</li>
            <li>Unikać blokujących skryptów (np. źle wpiętego trackingu)</li>
          </ul>
          <p>W projektach, które tworzę pod marką TomaszChromy.com, traktuję to jako standard, a nie „opcję dodatkową" – bo to część jakości produktu, nie gadżet.</p>

          <h2>5. Jak monitorować Core Web Vitals po wdrożeniu</h2>
          <p>Wydajność to nie jest akcja jednorazowa. Nawet jeśli na starcie wszystko jest zielone, z czasem:</p>
          <ul>
            <li>Dokładane są nowe skrypty (np. marketing, chat)</li>
            <li>Rośnie liczba obrazów</li>
            <li>Zmienia się hosting</li>
          </ul>
          <p>Dlatego warto:</p>
          <ul>
            <li>Regularnie sprawdzać raport Core Web Vitals w Google Search Console</li>
            <li>Raz na kwartał zrobić krótki „performance review" – szczególnie jeśli strona jest mocno rozwijana</li>
          </ul>
          <p>Dobrą praktyką przy długoterminowej współpracy jest wpisanie tego jako element retaineru: co miesiąc/kwartał sprawdzamy wydajność i poprawiamy, co trzeba.</p>

          <h2>6. Podsumowanie</h2>
          <p>Core Web Vitals nie są „fanaberią Google" ani tematem tylko dla programistów. To bardzo praktyczny wskaźnik tego, czy Twoja strona jest szybka, responsywna i stabilna – a więc, czy nie zniechęca ludzi jeszcze zanim zobaczą ofertę.</p>
          <p>Jeżeli inwestujesz w ruch (SEO, reklamy, social media), traktuj wydajność jako element kosztu pozyskania klienta. Bo każda sekunda opóźnienia to leady, których po prostu nigdy nie zobaczysz.</p>
        `,
      },
      "wcag-accessibility-2026": {
        title: 'WCAG 2.2 i dostępność w 2026 – obowiązek, nie „miły dodatek"',
        category: "Dostępność",
        date: "28 grudnia 2025",
        readTime: "8 min czytania",
        excerpt: 'Dostępność stron internetowych przez lata była traktowana jako „fajnie mieć". Od momentu, gdy WCAG 2.2 stało się oficjalnym standardem, mówimy o obowiązku.',
        content: `
          <p class="text-xl text-cool-200 mb-8">Dostępność stron internetowych przez lata była traktowana jako „fajnie mieć". Od momentu, gdy WCAG 2.2 stało się oficjalnym standardem W3C i coraz częściej pojawia się w wymaganiach prawnych oraz przetargach, mówimy już o realnym obowiązku dla biznesu, nie tylko dla administracji publicznej.</p>

          <p>W tym tekście wyjaśniam, co praktycznie oznacza WCAG 2.2 dla właściciela firmy i jak podejść do tematu przy projektowaniu lub modernizacji strony/aplikacji.</p>

          <h2>1. Czym jest WCAG 2.2 w kilku zdaniach</h2>
          <p>WCAG (Web Content Accessibility Guidelines) to zbiór wytycznych, które mają zapewnić równe korzystanie ze stron i aplikacji osobom:</p>
          <ul>
            <li>Z niepełnosprawnością wzroku, słuchu</li>
            <li>Z trudnościami poznawczymi</li>
            <li>Korzystającym z klawiatury zamiast myszy</li>
            <li>Używającym czytników ekranu</li>
          </ul>
          <p>Wersja 2.2 dodaje dziewięć nowych kryteriów m.in. dot. minimum wielkości elementów dotykowych, łatwości uwierzytelniania, stabilności focusa czy prostoty interakcji na urządzeniach mobilnych.</p>

          <h2>2. Dlaczego biznes powinien się tym przejmować</h2>
          <p>Powody są trzy:</p>

          <h3>Ryzyko prawne</h3>
          <p>W wielu krajach (szczególnie UE) rosną wymagania prawne wobec dostępności serwisów także w sektorze prywatnym (banki, e-commerce, usługi masowe).</p>

          <h3>Szersza grupa klientów</h3>
          <p>Osoby z niepełnosprawnościami to realna część rynku. Niedostępna strona oznacza, że po prostu nie mogą skorzystać z oferty.</p>

          <h3>Lepsze UX dla wszystkich</h3>
          <p>Wiele zasad dostępności (kontrast, czytelna typografia, logiczna nawigacja) poprawia komfort wszystkich użytkowników, nie tylko tych z formalnymi ograniczeniami.</p>

          <p>Dodatkowo Google coraz bardziej docenia „page experience" i content accessibility jako element jakości strony.</p>

          <h2>3. Najważniejsze obszary WCAG 2.2 z perspektywy właściciela strony</h2>
          <p>Zamiast wchodzić w numery kryteriów, spójrzmy na to biznesowo.</p>

          <h3>a) Czytelność i kontrast</h3>
          <ul>
            <li>Odpowiedni rozmiar fontu (min. 16px na webie)</li>
            <li>Wystarczający kontrast kolorów (minimum 4.5:1 dla zwykłego tekstu)</li>
            <li>Font łatwy do czytania (bez dekoracyjnych „sztuczek")</li>
          </ul>

          <h3>b) Rozmiar klikalnych elementów</h3>
          <p>Przyciski i linki powinny mieć minimalny rozmiar 24×24 px (idealnie 44×44 px na mobile). To ważne dla osób z ograniczeniami ruchowymi i każdego, kto używa telefonu w biegu.</p>

          <h3>c) Nawigacja klawiaturą</h3>
          <p>Każdy element na stronie (menu, przyciski, formularze) powinien być dostępny bez myszy. Stany focus muszą być widoczne – użytkownik musi widzieć, gdzie jest.</p>

          <h3>d) Formularze i uwierzytelnianie</h3>
          <p>Formularze powinny być proste, z jasnymi komunikatami błędów, bez zmuszania użytkowników do zapamiętywania kodów czy wykonywania skomplikowanych operacji.</p>

          <h3>e) Alternatywy dla treści</h3>
          <p>Obrazy powinny mieć opisy alt, filmy – napisy. To pomaga również SEO.</p>

          <h2>4. Jak podejść do dostępności w praktyce</h2>

          <h3>Jeśli tworzysz nową stronę:</h3>
          <p>Wymagaj zgodności z WCAG 2.2 na poziomie AA (standard dla większości stron komercyjnych) jako część specyfikacji.</p>

          <h3>Jeśli masz istniejącą stronę:</h3>
          <p>Zamów audyt dostępności. Można go zrobić ręcznie lub narzędziami automatycznymi (jak axe, WAVE), ale kompleksowa ocena wymaga wiedzy eksperckiej.</p>

          <h3>Wpisz to w proces:</h3>
          <p>Dostępność to nie jest coś, co dodaje się na końcu – to projektuje się od początku. Wybierz wykonawcę, który to rozumie.</p>

          <h2>5. Co stosuję w swoich projektach</h2>
          <p>Na tomaszchromy.com i podobnych projektach stosuję:</p>
          <ul>
            <li>Minimalny rozmiar klikanych elementów</li>
            <li>Wyraźne stany focus i hover</li>
            <li>Jasną hierarchię nagłówków</li>
            <li>Logiczną kolejność tabulacji</li>
            <li>Odpowiedni kontrast i rozmiary fontów</li>
            <li>Semantyczny HTML (nagłówki, listy, sekcje)</li>
          </ul>
          <p>To zwiększa szansę, że użytkownik przejdzie całą ścieżkę, zamiast się frustrować.</p>

          <h2>6. Podsumowanie</h2>
          <p>WCAG 2.2 to nie temat „dla programistów" ani „dla sektora publicznego". To biznesowy standard, który wpływa na:</p>
          <ul>
            <li>Ryzyko prawne (a to rośnie)</li>
            <li>Zasięg rynkowy (osoby z niepełnosprawnościami to też klienci)</li>
            <li>Ogólny UX (dostępność = dobry design dla wszystkich)</li>
          </ul>
          <p>Jeśli planujesz nową stronę lub modernizację istniejącej, wpisz WCAG 2.2 w wymagania od samego początku. To tańsze niż poprawianie później – i pokazuje, że zależy Ci na wszystkich klientach, nie tylko tych „idealnych".</p>
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
      blog: 'Kennis',
      contact: 'Contact',
      bookCall: 'Plan een gesprek',
    },

    // Hero
    hero: {
      greeting: 'Hallo, ik ben',
      name: 'Tomasz Chromy',
      role: 'Full-Stack Developer',
      h1Main: 'Ik bouw webapps en websites die echt werken voor je bedrijf',
      h1Highlight: '',
      h2Services: 'Zakelijke Websites • E-commerce • Landing Pages • UI/UX Design',
      subtitle: 'Ik ontwerp en ontwikkel moderne webapplicaties en websites die meer leads, hogere conversies en snellere groei genereren – van eerste mockup tot productie-deployment.',
      tagline: 'Partner voor digitale producten en webontwikkeling voor bedrijven.',
      cta: 'Start je project',
      ctaSecondary: 'Bekijk geselecteerd werk',
      experience: 'Jaar ervaring',
      projects: 'Projecten',
      statsCaption: 'Projecten voor software houses, dienstverlenende bedrijven en solo-ondernemers.',
    },

    // About
    about: {
      label: 'Over mij',
      title: 'Passie voor het',
      titleHighlight: 'bouwen van oplossingen',
      intro: 'Ik ben een',
      introName: 'full-stack webdeveloper en digitale productspecialist.',
      introText: '',
      description: 'Ik combineer UX-denken, schone code en focus op bedrijfsresultaten om complete oplossingen te leveren – van eerste concept tot productie-deployment.',
      tagline: 'Partner voor digitale producten en webontwikkeling voor bedrijven.',
      yearsExp: 'Jaren ervaring',
      projectsCompleted: 'Afgeronde projecten',
      satisfaction: 'Klanttevredenheid',
    },

    // Services
    services: {
      label: 'Diensten',
      title: 'Wat ik voor je kan bouwen',
      subtitle: 'Complete webontwikkeling – van eerste concept, via UX en design, tot deployment en support na lancering.',
      webDev: 'Websites',
      webDevDesc: 'Moderne, snelle en responsieve zakelijke websites en landingspagina\'s gebouwd voor conversie.',
      fullStack: 'Webapps / Full-Stack',
      fullStackDesc: 'Aangepaste webapplicaties met backend, integraties en database – van admin panels tot interne teamsystemen.',
      uiux: 'UI/UX Design',
      uiuxDesc: 'Gebruikersgerichte interface-ontwerpen – van Figma mockups tot een verfijnd, consistent componentsysteem in code.',
      uiuxFeature1: 'Informatiearchitectuur',
      uiuxFeature2: 'Prototypes',
      uiuxFeature3: 'Design system',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Online winkels die verkopen: snel, duidelijk en goed geïntegreerd met betalingen en analytics.',
    },

    // Portfolio
    portfolio: {
      label: 'Portfolio',
      title: 'Geselecteerde',
      titleHighlight: 'projecten',
      subtitle: 'Echte oplossingen voor echte bedrijven',
      cta: 'Heb je een project in gedachten?',
      problemLabel: 'Uitdaging',
      solutionLabel: 'Oplossing',
      resultLabel: 'Resultaat',
      // Project 1 - IT Project Management Web App
      project1Tag: 'Web App',
      project1Title: 'IT-projectmanagementsysteem – web app',
      project1Problem: 'Het team miste één duidelijke plek om taken en prioriteiten te volgen.',
      project1Solution: 'Ik ontwierp UX en UI en implementeerde een responsieve webapp met projectborden, taken en dashboards.',
      project1Result: 'Beter zicht op werk, minder statusmeetings, voorspelbaarder taakoplevering.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Efficiëntie',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Meetings',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Premium online winkel – e-commerce',
      project2Problem: 'Lage conversies en trage laadtijden schaadden de verkoop.',
      project2Solution: 'Herbouwd met Next.js, geoptimaliseerde checkout en lazy-loading.',
      project2Result: 'Hogere conversie, sneller laden, betere klantretentie.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Conversie',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Laadtijd',
      // Project 3
      project3Tag: 'Landing Page',
      project3Title: 'Landing page voor SaaS-campagne – conversie',
      project3Problem: 'Advertenties genereerden verkeer maar de landingspagina converteerde niet.',
      project3Solution: 'Herontwerp met duidelijke CTA, A/B-testen en analytics.',
      project3Result: 'Hogere CTR en conversieratio, betere campagne-ROI.',
      project3Metric1Value: '12%',
      project3Metric1Label: 'CTR',
      project3Metric2Value: '3.2%',
      project3Metric2Label: 'Conversie',
    },

    // Pricing
    pricing: {
      label: 'Prijzen',
      title: 'Eenvoudige, transparante prijzen',
      subtitle: 'Kies het plan dat het beste bij je project past',
      consultation: 'Consultatie',
      consultationPrice: 'Gratis',
      consultationPeriod: '30 min',
      consultationNote: 'Een korte online meeting waarin we:',
      consultationPoints: [
        'Je doelen en behoeften bespreken',
        'Mogelijke richtingen en technologieën identificeren',
        'Budget en grove tijdlijn schatten',
      ],
      consultationCta: 'Plan een consultatie',
      project: 'Project',
      projectPrice: 'vanaf €1.200',
      projectPeriod: 'eenmalig',
      projectNote: 'Complete oplossing van A tot Z:',
      projectPoints: [
        'Strategie + design + implementatie',
        'Volledige documentatie en korte training',
        '30 dagen support na lancering',
        'Kwaliteitsgarantie',
      ],
      projectCta: 'Start project',
      projectBadge: 'Meest populair',
      partnership: 'Samenwerking',
      partnershipPrice: 'vanaf €750',
      partnershipPeriod: 'maandelijks',
      partnershipNote: 'Doorlopende ondersteuning en productontwikkeling:',
      partnershipPoints: [
        'Vast aantal uren per maand',
        'Prioritaire ondersteuning',
        'Regelmatige optimalisaties',
        'Rapporten en aanbevelingen voor volgende stappen',
      ],
      partnershipCta: 'Laten we praten',
    },

    // Contact
    contact: {
      label: 'Neem contact op',
      title: 'Laten we samen iets',
      titleHighlight: 'geweldigs bouwen',
      subtitle: 'Vertel kort over je project – ik kom terug met mogelijke opties en een grove budgetschatting.',
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
      responseTime: 'Ik reageer meestal binnen 1–2 werkdagen. Als je project urgent is – vermeld het in je bericht.',
      scheduleCall: 'Liever praten?',
      scheduleFree: 'Gratis 15-minuten kennismakingsgesprek – vrijblijvend.',
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
      ctaSubtitle: 'Beschrijf je project of doel. Ik kom terug met concrete mogelijkheden en een grove budgetschatting.',
      ctaBtn: 'Neem contact op',
      navigation: 'Navigatie',
      connect: 'Volg mij',
      partners: 'Partners',
      rights: 'Alle rechten voorbehouden.',
      disclaimer: 'Deze website is uitsluitend gemaakt voor trainingsdoeleinden en vormt geen commercieel aanbod.',
      bio: 'Full-stack developer die mooie, functionele webervaringen creëert – van eerste concept tot productie. Laten we jouw ideeën werkelijkheid maken.',
      tagline: 'Partner voor digitale producten en webontwikkeling voor bedrijven.',
      privacyPolicy: 'Privacybeleid',
      cookies: 'Cookies',
      visitorCount: 'Bezoekers',
    },

    // Construction Banner
    constructionBanner: {
      text: '🚧 Deze website is in aanbouw. Nieuwe functies komen binnenkort!',
      close: 'Sluiten',
    },

    // For Whom
    forWhom: {
      label: 'Voor wie?',
      title: 'Met wie ik werk',
      subtitle: 'Ik help bedrijven van alle groottes hun digitale aanwezigheid op te bouwen',
      startups: 'Software houses',
      startupsDesc: 'Ontwikkelteams die snel frontend of full-stack capaciteit nodig hebben voor digitale producten.',
      smallBusiness: 'Dienstverlenende bedrijven',
      smallBusinessDesc: 'Bedrijven die nieuwe klanten willen bereiken met een professionele website en duidelijke boodschap.',
      agencies: 'Marketingbureaus',
      agenciesDesc: 'Bureaus die een technische partner nodig hebben voor klantlanceringen – landing pages, campagnesites, webapps.',
      entrepreneurs: 'Solo-ondernemers',
      entrepreneursDesc: 'Solo-ondernemers en freelancers die een sterke online presentie nodig hebben die autoriteit opbouwt.',
    },

    // Process
    process: {
      label: 'Proces',
      title: 'Hoe ik werk',
      subtitle: 'Een duidelijke, stapsgewijze aanpak voor elk project',
      step1Title: 'Gesprek & Analyse',
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
      title: 'Praktische kennis voor websites die verkopen',
      subtitle: 'Concrete gidsen over webontwikkeling, UX en digitale strategie — geen fluff, alleen echte voorbeelden.',
      readMore: 'Lees gids →',
      // Hero extras
      heroForWho: 'Voor bedrijfseigenaren, freelancers en teams die:',
      heroBenefit1: 'een website willen die echt verkoopt',
      heroBenefit2: 'tech-beslissingen willen begrijpen zonder jargon',
      heroBenefit3: 'betere zakelijke beslissingen willen nemen',
      heroCta: 'Bekijk aanbevolen artikelen',
      featuredLabel: 'Aanbevolen artikel',
      // Search & Sort
      searchPlaceholder: 'Zoek artikelen…',
      sortNewest: 'Nieuwste',
      sortOldest: 'Oudste',
      sortShortest: 'Kortste',
      sortLongest: 'Langste',
      resultsCount: 'Resultaten',
      noResults: 'Geen resultaten',
      noResultsHint: 'Probeer de categorie te veranderen of zoek een andere term.',
      // CTA Section
      ctaTitle: 'Wilt u een snelle beoordeling van uw website?',
      ctaDescription: 'Ik vertel u wat de conversie echt zal verbeteren: structuur, CTA, snelheid, mobiel en basis-SEO.',
      ctaButton: 'Plan een gratis gesprek',
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
      // NEW 2026 articles
      article5Title: 'Waarom je website in 2026 niet verkoopt (en hoe je dat oplost)',
      article5Excerpt: 'In 2026 is een website geen visitekaartje meer. Het is een verkooptool. Ontdek waarom je site geen resultaten oplevert.',
      category5: 'Strategie',
      readTime5: '10 min lezen',
      article6Title: 'Core Web Vitals in 2026 – wat bedrijfseigenaren moeten weten',
      article6Excerpt: "Core Web Vitals klinkt als developerjargon, maar de effecten zijn zakelijk: laadtijd, paginareactie en element 'springen.'",
      category6: 'Prestaties',
      readTime6: '9 min lezen',
      article7Title: "WCAG 2.2 en toegankelijkheid in 2026 – verplichting, geen 'leuke extra'",
      article7Excerpt: 'Website-toegankelijkheid werd jarenlang als nice to have behandeld. Sinds WCAG 2.2 praten we over een echte zakelijke verplichting.',
      category7: 'Toegankelijkheid',
      readTime7: '8 min lezen',
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
      // NEW ARTICLES 2026
      "website-not-selling-2026": {
        title: "Waarom je website in 2026 niet verkoopt (en hoe je dat stap voor stap oplost)",
        category: "Strategie",
        date: "2 januari 2026",
        readTime: "10 min lezen",
        excerpt: "In 2026 is een website geen visitekaartje meer. Het is een verkooptool die leads moet genereren. Ontdek waarom je site geen resultaten oplevert.",
        content: `
          <p class="text-xl text-cool-200 mb-8">In 2026 is een website niet langer alleen een "visitekaartje." Het is een verkooptool die leads moet genereren, het verkoopproces moet ondersteunen en je team moet ontlasten. Het probleem is dat de meeste websites nog steeds ontworpen zijn alsof de tijd in 2015 is gestopt.</p>

          <p>In dit artikel laat ik je, vanuit het perspectief van een digital product developer, zien waarom je website geen resultaten oplevert en wat je kunt doen om dat te veranderen.</p>

          <h2>1. Geen duidelijke boodschap: "Wat, voor wie, met welk resultaat"</h2>
          <p>Een gebruiker komt op je website en moet binnen 3-5 seconden drie dingen begrijpen:</p>
          <ul>
            <li>Wat doe je?</li>
            <li>Voor wie is het?</li>
            <li>Welk resultaat lever je?</li>
          </ul>
          <p>Als ze generieke slogans zien in de hero-sectie ("Welkom op onze website," "Complete IT-oplossingen") of een lijst met technologieën, kunnen ze het niet verbinden met hun probleem. Het resultaat? Ze vertrekken.</p>

          <h3>Hoe dit te verbeteren:</h3>
          <p>Bouw je kop met deze formule: "Ik help [specifieke klanten] [specifiek resultaat] bereiken met [specifiek type oplossingen]."</p>
          <p>Verduidelijk in de ondertitel hoe het resultaat er in de praktijk uitziet (meer leads, snellere service, minder chaos).</p>

          <h2>2. Gebrek aan vertrouwen: geen bewijs, alleen beloftes</h2>
          <p>Mensen geloven niet meer in slogans. Ze geloven in bewijs:</p>
          <ul>
            <li>Case studies met concrete resultaten</li>
            <li>Klantgetuigenissen met naam, functie en branche</li>
            <li>Logo's van bedrijven waarmee je hebt gewerkt</li>
            <li>Cijfers: "25+ projecten," "3+ jaar ervaring," "100% tevredenheid"</li>
          </ul>
          <p>In 2025-2026 zijn expertcontent en E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) een van de belangrijkste SEO- en vertrouwensfactoren.</p>

          <h2>3. Zwakke CTA's en moeilijk contact</h2>
          <p>Een veelgemaakte fout: contactformulier verstopt onderaan de pagina zonder duidelijke informatie over "wat er gebeurt nadat je het verstuurt."</p>
          <p>Een goede website in 2026 heeft:</p>
          <ul>
            <li>Zichtbare CTA-knoppen op meerdere plaatsen ("Plan een gesprek," "Vraag een offerte aan," "Bel")</li>
            <li>Kort, eenvoudig formulier (naam, e-mail, projectbeschrijving, optioneel budgetrange)</li>
            <li>Informatie over wanneer je een reactie kunt verwachten ("Ik reageer binnen 1-2 werkdagen")</li>
          </ul>

          <h2>4. De website is gewoon... traag</h2>
          <p>Google communiceert al jaren duidelijk dat Core Web Vitals – de echte gebruikerservaring gerelateerd aan laden, interactiviteit en visuele stabiliteit – belangrijk zijn voor zowel UX als zoekzichtbaarheid.</p>
          <p>Als je site 4-5 seconden nodig heeft om te laden en content "springt" tijdens het laden, verlaten gebruikers het onmiddellijk. Zelfs de meest gepolijste tekst helpt dan niet.</p>

          <h3>Wat je kunt doen met je developer:</h3>
          <ul>
            <li>Afbeeldingen optimaliseren (next-gen formaten, compressie)</li>
            <li>Lazy loading inschakelen voor afbeeldingen en secties buiten het scherm</li>
            <li>CSS en JS vereenvoudigen (ongebruikte bibliotheken verwijderen)</li>
            <li>Cache en CDN gebruiken</li>
          </ul>

          <h2>5. Geen WCAG 2.2 compliance en mobiele aanpassing</h2>
          <p>Sinds 2023 is WCAG 2.2 de officiële standaard – de nieuwe versie van toegankelijkheidsrichtlijnen die 9 extra criteria toevoegt over klikbare elementgrootte, toetsenbordnavigatie en eenvoudige authenticatie.</p>
          <p>In de praktijk:</p>
          <ul>
            <li>Te kleine knoppen op mobiel</li>
            <li>Slecht tekstcontrast</li>
            <li>Ontbrekende focusstatussen voor actieve elementen</li>
            <li>Formulieren onvriendelijk voor gebruikers met cognitieve moeilijkheden</li>
          </ul>
          <p>Dit is niet langer alleen een "esthetische kwestie" maar een juridisch en zakelijk risico (afgewezen gebruikers).</p>

          <h2>6. Geen consistent verhaal en proces</h2>
          <p>Wanneer een gebruiker door de pagina scrollt, moet hij voelen dat iemand hem begeleidt:</p>
          <ul>
            <li>Wie je bent en wat je doet (hero)</li>
            <li>Voor wie het is (doelgroepaanpassing)</li>
            <li>Welke problemen je oplost (diensten, cases)</li>
            <li>Hoe je werkt (proces)</li>
            <li>Hoeveel het kost (minstens prijsranges)</li>
            <li>Wat nu te doen (contact / consultatie)</li>
          </ul>
          <p>Als secties willekeurig zijn en het verhaal onderbroken wordt, raakt de gebruiker verdwaald. Een goede website is eigenlijk een goed gestructureerd verkoopgesprek, alleen in digitale vorm.</p>

          <h2>7. Samenvatting: website als tool, niet als catalogus</h2>
          <p>Als je wilt dat je website echt voor je bedrijf gaat werken:</p>
          <ul>
            <li>Duidelijke boodschap – specifiek: wat, voor wie, met welk effect</li>
            <li>Voeg bewijs toe – projecten, getuigenissen, cijfers, eigen producten</li>
            <li>Maak contact makkelijk – sterke CTA's, eenvoudig formulier, duidelijke verwachtingen</li>
            <li>Zorg voor performance – Core Web Vitals, lichtgewicht resources</li>
            <li>Verenig UX en toegankelijkheid – WCAG 2.2 in plaats van "het komt wel goed"</li>
          </ul>
          <p>Dit is de aanpak die ik volg in projecten gecreëerd onder het TomaszChromy.com merk – de website behandelend als onderdeel van het verkoopproces, niet als een digitaal visitekaartje dat iedereen een week na lancering vergeet.</p>
        `,
      },
      "core-web-vitals-2026": {
        title: "Core Web Vitals in 2026 – wat bedrijfseigenaren moeten weten (zonder technisch jargon)",
        category: "Prestaties",
        date: "1 januari 2026",
        readTime: "9 min lezen",
        excerpt: "Core Web Vitals klinkt als een term uit een developerpresentatie, maar de effecten zijn zeer zakelijk: laadtijd, paginareactie en element 'springen.'",
        content: `
          <p class="text-xl text-cool-200 mb-8">Core Web Vitals klinkt als een term uit een developerpresentatie, maar de effecten zijn zeer zakelijk: het gaat om laadtijd, paginareactie op klikken en "springende" elementen. Als deze parameters slecht zijn, verlies je klanten voordat ze je aanbod lezen.</p>

          <p>Hieronder leg ik uit wat Core Web Vitals zijn, hoe ze SEO en conversie beïnvloeden, en welke beslissingen je als bedrijfseigenaar kunt nemen zonder programmeur te zijn.</p>

          <h2>1. Wat zijn Core Web Vitals?</h2>
          <p>Google introduceerde drie metrics onder de gemeenschappelijke naam Core Web Vitals die echte gebruikerservaring meten:</p>
          <ul>
            <li><strong>LCP (Largest Contentful Paint)</strong> – hoe snel de hoofdcontent zichtbaar wordt</li>
            <li><strong>INP (Interaction to Next Paint)</strong> – hoe snel de pagina reageert op eerste interactie (bijv. klik)</li>
            <li><strong>CLS (Cumulative Layout Shift)</strong> – hoeveel de layout "springt" tijdens laden</li>
          </ul>
          <p>Voor bedrijven betekent dit een eenvoudige vraag: Kan de gebruiker de pagina zien en gebruiken zonder gefrustreerd te raken?</p>
          <p>Google stelt openlijk dat goede Core Web Vitals een element zijn van goed beoordeelde "paginakwaliteit" in zoekresultaten.</p>

          <h2>2. Hoe slechte Core Web Vitals conversie doden</h2>
          <p>Stel je voor dat je verkeer van advertenties naar een landingspagina stuurt. Je betaalt voor elke klik. De gebruiker:</p>
          <ul>
            <li>Wacht meerdere seconden op laden</li>
            <li>Ziet plotseling een cookiebanner boven de knop verschijnen en alles verschuift naar beneden</li>
            <li>Klikt op het formulier, maar de pagina reageert pas na een moment</li>
            <li>Iets springt weer, en deel van de content laadt na 2 seconden</li>
          </ul>
          <p>Dit is een klassiek voorbeeld van slechte Core Web Vitals – en de reden waarom steeds meer campagnes in teleurstelling eindigen.</p>
          <p>Vanuit dataperspectief:</p>
          <ul>
            <li>Bouncepercentage stijgt</li>
            <li>Tijd op pagina daalt</li>
            <li>Aantal verzonden formulieren / CTA-klikken daalt</li>
          </ul>

          <h2>3. Wat je als bedrijfseigenaar kunt doen (zonder in code te duiken)</h2>
          <p>Je hoeft niet te weten hoe een bundler, lazy loading of font preloading werkt. Maar je kunt:</p>

          <h3>De juiste vragen stellen aan je contractor:</h3>
          <ul>
            <li>Wordt de website geoptimaliseerd voor Core Web Vitals?</li>
            <li>Controleren we resultaten in Google-tools (Lighthouse, PageSpeed Insights, Search Console)?</li>
            <li>Hoe monitoren we prestaties na lancering?</li>
          </ul>

          <h3>Het definiëren als contractvereiste:</h3>
          <p>Bijv. "De website moet minstens 'Good' status bereiken in Core Web Vitals voor 75% van mobiele gebruikers volgens Search Console."</p>

          <h3>Afzien van "zware" oplossingen:</h3>
          <ul>
            <li>Overmatige effecten, animaties, "zwevende" plugins zoals chat</li>
            <li>Grote, niet-geoptimaliseerde stockfoto's</li>
            <li>10 verschillende fonts van externe servers</li>
          </ul>
          <p>Goed gekozen technologie (bijv. Next.js + verstandige benadering van afbeeldingen en cache) plus gezond verstand geeft zeer goede resultaten met redelijke inspanning.</p>

          <h2>4. Wat je developer zou moeten doen</h2>
          <p>Vanaf de technische kant is de lijst langer, maar kan samengevat worden:</p>
          <ul>
            <li>Moderne afbeeldingsformaten gebruiken (AVIF, WebP)</li>
            <li>Lazy loading toepassen voor afbeeldingen en secties buiten het eerste scherm</li>
            <li>JS en CSS code minimaliseren en splitsen</li>
            <li>CDN en HTTP cache gebruiken</li>
            <li>Blokkerende scripts vermijden (bijv. slecht geïmplementeerde tracking)</li>
          </ul>
          <p>In projecten die ik creëer onder het TomaszChromy.com merk, behandel ik dit als standaard, niet als "extra optie" – omdat het onderdeel is van productkwaliteit, geen gadget.</p>

          <h2>5. Hoe Core Web Vitals te monitoren na lancering</h2>
          <p>Prestaties zijn geen eenmalige actie. Zelfs als alles groen is bij de start, na verloop van tijd:</p>
          <ul>
            <li>Worden nieuwe scripts toegevoegd (bijv. marketing, chat)</li>
            <li>Groeit het aantal afbeeldingen</li>
            <li>Verandert hosting</li>
          </ul>
          <p>Daarom is het de moeite waard om:</p>
          <ul>
            <li>Regelmatig het Core Web Vitals rapport in Google Search Console te controleren</li>
            <li>Een keer per kwartaal een korte "performance review" te doen – vooral als de website veel wordt ontwikkeld</li>
          </ul>
          <p>Een goede praktijk bij langdurige samenwerking is dit op te nemen als retainer-element: elke maand/kwartaal controleren we prestaties en verbeteren wat nodig is.</p>

          <h2>6. Samenvatting</h2>
          <p>Core Web Vitals zijn geen "Google-gril" of een onderwerp alleen voor programmeurs. Het is een zeer praktische indicator of je website snel, responsief en stabiel is – dus of het mensen niet ontmoedigt voordat ze het aanbod zien.</p>
          <p>Als je investeert in verkeer (SEO, advertenties, social media), behandel prestaties als onderdeel van klantacquisitiekosten. Want elke seconde vertraging is leads die je simpelweg nooit zult zien.</p>
        `,
      },
      "wcag-accessibility-2026": {
        title: "WCAG 2.2 en toegankelijkheid in 2026 – verplichting, geen 'leuke extra'",
        category: "Toegankelijkheid",
        date: "28 december 2025",
        readTime: "8 min lezen",
        excerpt: "Website-toegankelijkheid werd jarenlang behandeld als 'nice to have.' Sinds WCAG 2.2 een officiële W3C-standaard werd, praten we over een echte zakelijke verplichting.",
        content: `
          <p class="text-xl text-cool-200 mb-8">Website-toegankelijkheid werd jarenlang behandeld als "nice to have." Sinds WCAG 2.2 een officiële W3C-standaard werd en steeds vaker verschijnt in wettelijke vereisten en aanbestedingen, praten we over een echte zakelijke verplichting, niet alleen voor publieke administratie.</p>

          <p>In deze tekst leg ik uit wat WCAG 2.2 praktisch betekent voor een bedrijfseigenaar en hoe je het onderwerp benadert bij het ontwerpen of moderniseren van een website/applicatie.</p>

          <h2>1. Wat is WCAG 2.2 in een paar zinnen</h2>
          <p>WCAG (Web Content Accessibility Guidelines) is een set richtlijnen ontworpen om gelijk gebruik van websites en applicaties te garanderen voor mensen:</p>
          <ul>
            <li>Met visuele of gehoorproblemen</li>
            <li>Met cognitieve moeilijkheden</li>
            <li>Die toetsenbord gebruiken in plaats van muis</li>
            <li>Die schermlezers gebruiken</li>
          </ul>
          <p>Versie 2.2 voegt negen nieuwe criteria toe waaronder minimumgrootte voor aanraakelementen, gemak van authenticatie, focusstabiliteit en interactie-eenvoud op mobiele apparaten.</p>

          <h2>2. Waarom bedrijven zich hiermee moeten bezighouden</h2>
          <p>Er zijn drie redenen:</p>

          <h3>Juridisch risico</h3>
          <p>In veel landen (vooral EU) groeien wettelijke vereisten voor website-toegankelijkheid ook in de private sector (banken, e-commerce, massdiensten).</p>

          <h3>Bredere klantenbasis</h3>
          <p>Mensen met een handicap zijn een echt deel van de markt. Een ontoegankelijke website betekent dat ze simpelweg je aanbod niet kunnen gebruiken.</p>

          <h3>Betere UX voor iedereen</h3>
          <p>Veel toegankelijkheidsprincipes (contrast, leesbare typografie, logische navigatie) verbeteren comfort voor alle gebruikers, niet alleen die met formele beperkingen.</p>

          <p>Daarnaast waardeert Google steeds meer "page experience" en content-toegankelijkheid als element van paginakwaliteit.</p>

          <h2>3. Belangrijkste WCAG 2.2 gebieden vanuit het perspectief van een website-eigenaar</h2>
          <p>In plaats van in criterianummers te duiken, laten we dit zakelijk bekijken.</p>

          <h3>a) Leesbaarheid en contrast</h3>
          <ul>
            <li>Gepaste lettergrootte (min. 16px op web)</li>
            <li>Voldoende kleurcontrast (minimum 4.5:1 voor normale tekst)</li>
            <li>Font dat makkelijk te lezen is (zonder decoratieve "trucs")</li>
          </ul>

          <h3>b) Klikbare elementgrootte</h3>
          <p>Knoppen en links moeten een minimumgrootte van 24×24 px hebben (idealiter 44×44 px op mobiel). Dit is belangrijk voor mensen met motorische beperkingen en iedereen die een telefoon onderweg gebruikt.</p>

          <h3>c) Toetsenbordnavigatie</h3>
          <p>Elk element op de pagina (menu's, knoppen, formulieren) moet toegankelijk zijn zonder muis. Focusstatussen moeten zichtbaar zijn – de gebruiker moet zien waar hij is.</p>

          <h3>d) Formulieren en authenticatie</h3>
          <p>Formulieren moeten eenvoudig zijn, met duidelijke foutmeldingen, zonder gebruikers te dwingen codes te onthouden of complexe operaties uit te voeren.</p>

          <h3>e) Contentalternatieven</h3>
          <p>Afbeeldingen moeten alt-beschrijvingen hebben, video's ondertiteling. Dit helpt ook SEO.</p>

          <h2>4. Hoe toegankelijkheid praktisch te benaderen</h2>

          <h3>Als je een nieuwe website maakt:</h3>
          <p>Eis WCAG 2.2 compliance op AA-niveau (standaard voor de meeste commerciële websites) als onderdeel van de specificatie.</p>

          <h3>Als je een bestaande website hebt:</h3>
          <p>Bestel een toegankelijkheidsaudit. Het kan handmatig of met geautomatiseerde tools (zoals axe, WAVE), maar een uitgebreide beoordeling vereist expertkennis.</p>

          <h3>Maak het onderdeel van het proces:</h3>
          <p>Toegankelijkheid is niet iets dat je aan het eind toevoegt – het wordt vanaf het begin ontworpen. Kies een contractor die dit begrijpt.</p>

          <h2>5. Wat ik toepas in mijn projecten</h2>
          <p>Op tomaszchromy.com en vergelijkbare projecten pas ik toe:</p>
          <ul>
            <li>Minimum klikbare elementgrootte</li>
            <li>Duidelijke focus- en hoverstatussen</li>
            <li>Duidelijke koppenstructuur</li>
            <li>Logische tabulatievolgorde</li>
            <li>Gepast contrast en lettergroottes</li>
            <li>Semantische HTML (koppen, lijsten, secties)</li>
          </ul>
          <p>Dit verhoogt de kans dat de gebruiker het hele traject voltooit in plaats van gefrustreerd te raken.</p>

          <h2>6. Samenvatting</h2>
          <p>WCAG 2.2 is geen onderwerp "voor programmeurs" of "voor de publieke sector." Het is een zakelijke standaard die invloed heeft op:</p>
          <ul>
            <li>Juridisch risico (en dit groeit)</li>
            <li>Marktbereik (mensen met een handicap zijn ook klanten)</li>
            <li>Algemene UX (toegankelijkheid = goed ontwerp voor iedereen)</li>
          </ul>
          <p>Als je een nieuwe website plant of een bestaande moderniseert, neem WCAG 2.2 op in de vereisten vanaf het begin. Het is goedkoper dan later repareren – en het laat zien dat je om al je klanten geeft, niet alleen de "ideale" ones.</p>
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

