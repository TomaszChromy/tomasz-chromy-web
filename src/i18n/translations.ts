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
      // Project 1
      project1Tag: 'Strategy & System',
      project1Title: 'Automation system for software house',
      project1Desc: 'Comprehensive project management system with API integrations and automated reporting.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Team efficiency',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Report time',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Premium products online store',
      project2Desc: 'Modern e-commerce store with conversion optimization and advanced analytics.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Conversion',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Load time',
      // Project 3
      project3Tag: 'Landing & Growth',
      project3Title: 'Landing page for SaaS campaign',
      project3Desc: 'High-converting landing page with A/B testing and full analytics.',
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
      formFullName: 'Full name *',
      formFullNamePlaceholder: 'John Smith',
      formEmail: 'Email *',
      formEmailPlaceholder: 'john@company.com',
      formCompany: 'Company (optional)',
      formCompanyPlaceholder: 'Company name',
      formProject: 'Tell me about your project *',
      formProjectPlaceholder: 'Briefly describe what you need...',
      formSubmit: 'Send Message',
      formSending: 'Sending...',
      formSuccess: 'Your email client should open with a prepared message.',
      formError: 'Something went wrong. Please contact me directly via email.',
      responseTime: 'I usually respond within 1-2 business days.',
      scheduleCall: 'Prefer to talk?',
      scheduleFree: 'Free 15 min consultation',
      scheduleDesc: "Schedule a short video call where we'll discuss your project.",
      scheduleBtn: 'Schedule a Call',
    },
    
    // Footer
    footer: {
      cta: "Let's build something great",
      ctaSubtitle: "Ready to start your next project? I'd love to hear from you.",
      ctaBtn: 'Get in touch',
      navigation: 'Navigation',
      connect: 'Connect',
      rights: 'All rights reserved.',
      disclaimer: 'This website was created for training purposes only and does not constitute a commercial offer.',
      bio: "Full-stack developer passionate about creating beautiful, functional web experiences. Let's turn your ideas into reality.",
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
      label: 'Blog',
      title: 'Latest articles',
      subtitle: 'Insights on web development, design, and technology',
      readMore: 'Read article',
      article1Title: '5 things that make a small business website actually work',
      article1Excerpt: 'When you build a business website, design is important – but clarity is critical. A clear message, visible contact options and fast loading speed are much more valuable than complicated animations.',
      category1: 'Web Design',
      readTime1: '5 min read',
      article2Title: 'Basics of technical SEO for small e-commerce stores',
      article2Excerpt: 'Technical SEO does not have to be scary. For small online stores it usually means a few focused steps: using clean URLs, optimising page speed and making sure search engines can index your products.',
      category2: 'SEO',
      readTime2: '7 min read',
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
      // Project 1
      project1Tag: 'Strategia i System',
      project1Title: 'System automatyzacji dla software house',
      project1Desc: 'Kompleksowy system zarządzania projektami z integracją API i automatycznym raportowaniem.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Efektywność zespołu',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Czas raportów',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Sklep internetowy premium',
      project2Desc: 'Nowoczesny sklep e-commerce z optymalizacją konwersji i zaawansowaną analityką.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Konwersja',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Czas ładowania',
      // Project 3
      project3Tag: 'Landing i Wzrost',
      project3Title: 'Landing page dla kampanii SaaS',
      project3Desc: 'Wysoko konwertujący landing page z testami A/B i pełną analityką.',
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
      formFullName: 'Imię i nazwisko *',
      formFullNamePlaceholder: 'Jan Kowalski',
      formEmail: 'Email *',
      formEmailPlaceholder: 'jan@firma.pl',
      formCompany: 'Firma (opcjonalnie)',
      formCompanyPlaceholder: 'Nazwa firmy',
      formProject: 'Opowiedz o projekcie *',
      formProjectPlaceholder: 'Krótko opisz czego potrzebujesz...',
      formSubmit: 'Wyślij wiadomość',
      formSending: 'Wysyłanie...',
      formSuccess: 'Twój klient email powinien otworzyć się z przygotowaną wiadomością.',
      formError: 'Coś poszło nie tak. Skontaktuj się ze mną bezpośrednio przez email.',
      responseTime: 'Zwykle odpowiadam w ciągu 1-2 dni roboczych.',
      scheduleCall: 'Wolisz porozmawiać?',
      scheduleFree: 'Bezpłatna 15 min konsultacja',
      scheduleDesc: 'Umów krótką rozmowę wideo, podczas której omówimy Twój projekt.',
      scheduleBtn: 'Umów rozmowę',
    },

    // Footer
    footer: {
      cta: 'Zbudujmy razem coś wielkiego',
      ctaSubtitle: 'Gotowy na kolejny projekt? Chętnie o nim posłucham.',
      ctaBtn: 'Skontaktuj się',
      navigation: 'Nawigacja',
      connect: 'Social media',
      rights: 'Wszelkie prawa zastrzeżone.',
      disclaimer: 'Ta strona została stworzona wyłącznie w celach szkoleniowych i nie stanowi oferty handlowej.',
      bio: 'Full-stack developer z pasją do tworzenia pięknych, funkcjonalnych stron internetowych. Zamieńmy Twoje pomysły w rzeczywistość.',
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
      label: 'Blog',
      title: 'Najnowsze artykuły',
      subtitle: 'Spostrzeżenia o web developmencie, designie i technologii',
      readMore: 'Czytaj artykuł',
      article1Title: '5 rzeczy, które sprawiają, że strona małej firmy naprawdę działa',
      article1Excerpt: 'Budując stronę firmową, design jest ważny – ale klarowność jest kluczowa. Jasny przekaz, widoczne opcje kontaktu i szybkie ładowanie są znacznie cenniejsze niż skomplikowane animacje.',
      category1: 'Web Design',
      readTime1: '5 min czytania',
      article2Title: 'Podstawy technicznego SEO dla małych sklepów e-commerce',
      article2Excerpt: 'Techniczne SEO nie musi być straszne. Dla małych sklepów internetowych zwykle oznacza kilka skoncentrowanych kroków: używanie czystych URL-i, optymalizację szybkości strony i upewnienie się, że wyszukiwarki mogą indeksować Twoje produkty.',
      category2: 'SEO',
      readTime2: '7 min czytania',
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
      // Project 1
      project1Tag: 'Strategie & Systeem',
      project1Title: 'Automatiseringssysteem voor software house',
      project1Desc: 'Uitgebreid projectmanagementsysteem met API-integraties en geautomatiseerde rapportage.',
      project1Metric1Value: '+40%',
      project1Metric1Label: 'Teamefficiëntie',
      project1Metric2Value: '-60%',
      project1Metric2Label: 'Rapporttijd',
      // Project 2
      project2Tag: 'E-commerce',
      project2Title: 'Premium producten online winkel',
      project2Desc: 'Moderne e-commerce winkel met conversie-optimalisatie en geavanceerde analytics.',
      project2Metric1Value: '+85%',
      project2Metric1Label: 'Conversie',
      project2Metric2Value: '2.1s',
      project2Metric2Label: 'Laadtijd',
      // Project 3
      project3Tag: 'Landing & Groei',
      project3Title: 'Landing page voor SaaS-campagne',
      project3Desc: 'Hoog converterende landingspagina met A/B-testen en volledige analytics.',
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
      formFullName: 'Volledige naam *',
      formFullNamePlaceholder: 'Jan de Vries',
      formEmail: 'E-mail *',
      formEmailPlaceholder: 'jan@bedrijf.nl',
      formCompany: 'Bedrijf (optioneel)',
      formCompanyPlaceholder: 'Bedrijfsnaam',
      formProject: 'Vertel over je project *',
      formProjectPlaceholder: 'Beschrijf kort wat je nodig hebt...',
      formSubmit: 'Verstuur bericht',
      formSending: 'Versturen...',
      formSuccess: 'Je e-mailprogramma zou moeten openen met een voorbereid bericht.',
      formError: 'Er ging iets mis. Neem direct contact op via e-mail.',
      responseTime: 'Ik reageer meestal binnen 1-2 werkdagen.',
      scheduleCall: 'Liever praten?',
      scheduleFree: 'Gratis 15 min consultatie',
      scheduleDesc: 'Plan een kort videogesprek waarin we je project bespreken.',
      scheduleBtn: 'Plan een gesprek',
    },

    // Footer
    footer: {
      cta: 'Laten we iets geweldigs bouwen',
      ctaSubtitle: 'Klaar om je volgende project te starten? Ik hoor graag van je.',
      ctaBtn: 'Neem contact op',
      navigation: 'Navigatie',
      connect: 'Volg mij',
      rights: 'Alle rechten voorbehouden.',
      disclaimer: 'Deze website is uitsluitend gemaakt voor trainingsdoeleinden en vormt geen commercieel aanbod.',
      bio: 'Full-stack developer met passie voor het creëren van mooie, functionele webervaringen. Laten we jouw ideeën werkelijkheid maken.',
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
      label: 'Blog',
      title: 'Laatste artikelen',
      subtitle: 'Inzichten over webontwikkeling, design en technologie',
      readMore: 'Lees artikel',
      article1Title: '5 dingen die een website voor kleine bedrijven echt laten werken',
      article1Excerpt: 'Bij het bouwen van een bedrijfswebsite is design belangrijk – maar duidelijkheid is cruciaal. Een heldere boodschap, zichtbare contactopties en snelle laadtijd zijn veel waardevoller dan ingewikkelde animaties.',
      category1: 'Webdesign',
      readTime1: '5 min lezen',
      article2Title: 'Basis van technische SEO voor kleine e-commerce winkels',
      article2Excerpt: 'Technische SEO hoeft niet eng te zijn. Voor kleine webshops betekent het meestal een paar gerichte stappen: schone URLs gebruiken, paginasnelheid optimaliseren en zorgen dat zoekmachines je producten kunnen indexeren.',
      category2: 'SEO',
      readTime2: '7 min lezen',
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

