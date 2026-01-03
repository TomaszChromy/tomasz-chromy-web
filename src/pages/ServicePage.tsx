import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";
import { Button } from "../components/ui/Button";
import { Icon } from "../components/ui/Icon";
import { Helmet } from "react-helmet-async";

// Service images
import websitesImg from "../assets/images-optimized/strony-internetowe.webp";
import appsImg from "../assets/images-optimized/aplikacje-webowe.webp";
import ecommerceImg from "../assets/images-optimized/sklepy-internetowe.webp";
import uiuxImg from "../assets/images-optimized/ui-ux.webp";

type ServiceKey = "websites" | "apps" | "ecommerce" | "uiux";

// Map service keys to images
const serviceImages: Record<ServiceKey, string> = {
  websites: websitesImg,
  apps: appsImg,
  ecommerce: ecommerceImg,
  uiux: uiuxImg,
};

// Alt texts for service images (multilingual)
const serviceImageAlts: Record<ServiceKey, Record<string, string>> = {
  websites: {
    pl: 'Fotorealistyczna ilustracja 3D: monitor i smartfon z ikonami analityki, bezpieczeństwa i SEO w pastelowym niebieskim stylu.',
    en: 'Photorealistic 3D illustration: monitor and smartphone with analytics, security and SEO icons in pastel blue style.',
    nl: 'Fotorealistische 3D-illustratie: monitor en smartphone met analytics-, beveiligings- en SEO-iconen in pastelblauw stijl.',
  },
  uiux: {
    pl: 'Fotorealistyczna ilustracja 3D: elementy interfejsu i komponenty UI w pastelowej palecie, symbolizujące projektowanie UX.',
    en: 'Photorealistic 3D illustration: interface elements and UI components in pastel palette, symbolizing UX design.',
    nl: 'Fotorealistische 3D-illustratie: interface-elementen en UI-componenten in pastelpalet, symboliserend voor UX-ontwerp.',
  },
  apps: {
    pl: 'Fotorealistyczna ilustracja 3D: modułowy dashboard i połączone bloki symbolizujące skalowalną aplikację webową.',
    en: 'Photorealistic 3D illustration: modular dashboard and connected blocks symbolizing scalable web application.',
    nl: 'Fotorealistische 3D-illustratie: modulair dashboard en verbonden blokken die een schaalbare webapplicatie symboliseren.',
  },
  ecommerce: {
    pl: 'Fotorealistyczna ilustracja 3D: e-commerce z koszykiem, paczkami i symbolami płatności oraz dostawy w pastelowej zieleni.',
    en: 'Photorealistic 3D illustration: e-commerce with cart, packages and payment/delivery symbols in pastel green.',
    nl: 'Fotorealistische 3D-illustratie: e-commerce met winkelwagen, pakketten en betalings-/bezorgingssymbolen in pastelgroen.',
  },
};

const ServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const { t, language } = useLanguage();
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Map slugs to service keys
  const slugToKey: Record<string, ServiceKey> = {
    "strony-internetowe": "websites",
    "websites": "websites",
    "aplikacje-webowe": "apps",
    "web-applications": "apps",
    "webapplicaties": "apps",
    "ecommerce": "ecommerce",
    "sklepy-internetowe": "ecommerce",
    "webshops": "ecommerce",
    "ui-ux": "uiux",
    "ui-ux-design": "uiux",
  };

  const serviceKey = slugToKey[serviceSlug || ""] || "websites";
  const service = t.servicePage?.[serviceKey];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cool-50 mb-4">404</h1>
          <p className="text-cool-400 mb-8">Service not found</p>
          <Link to="/" className="text-accent-blue hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = `https://tomaszchromy.com${location.pathname}`;

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t.nav.home,
        "item": "https://tomaszchromy.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t.nav.services,
        "item": "https://tomaszchromy.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title
      }
    ]
  };

  // Schema.org Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Person",
      "name": "Tomasz Chromy",
      "url": "https://tomaszchromy.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    },
    "url": currentUrl
  };

  return (
    <>
      <Helmet>
        <title>{service.title} | Tomasz Chromy</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero Section - LIGHT background with DARK text */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" className="text-slate-500 hover:text-accent-blue transition-colors" itemProp="item">
                  <span itemProp="name">{t.nav.home}</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/#services" className="text-slate-500 hover:text-accent-blue transition-colors" itemProp="item">
                  <span itemProp="name">{t.nav.services}</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-slate-800 font-medium" itemProp="name">{service.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-6">
                {service.label}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button as="a" href="#contact" variant="primary">
                  {t.servicePage.cta}
                </Button>
                <Button as={Link} to="/#portfolio" variant="secondary">
                  {t.servicePage.ctaSecondary}
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-20 blur-2xl`} />
                <img
                  src={serviceImages[serviceKey]}
                  alt={serviceImageAlts[serviceKey][language] || service.title}
                  className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 text-center mb-12">
            {t.servicePage.whatYouGet}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature: { title: string; desc: string }, index: number) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4`}>
                  <Icon name="check" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 text-center mb-12">
            {t.servicePage.howItWorks}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step: { title: string; desc: string }, index: number) => (
              <div key={index} className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-sm font-bold shadow-md`}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {service.technologies && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-800 text-center mb-10">
              {t.servicePage.techStack}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:scale-105 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faq && (
        <section className="py-20 bg-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 text-center mb-12">
              {t.servicePage.faqTitle}
            </h2>
            <div className="space-y-4">
              {service.faq.map((item: { q: string; a: string }, index: number) => (
                <details
                  key={index}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-semibold text-slate-800 list-none [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <Icon
                      name="chevronDown"
                      size={20}
                      className="text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    />
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - light background with dark text */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-6">
            {t.servicePage.ctaTitle}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t.servicePage.ctaSubtitle}
          </p>
          <Button as="a" href="#contact" variant="primary" size="lg">
            {t.servicePage.cta}
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicePage;

