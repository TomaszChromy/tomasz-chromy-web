import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";
import { Button } from "../components/ui/Button";
import { Icon } from "../components/ui/Icon";
import { Helmet } from "react-helmet-async";

type ServiceKey = "websites" | "apps" | "ecommerce" | "uiux";

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-blue/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent-cyan/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-cool-400" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" className="hover:text-accent-blue transition-colors" itemProp="item">
                  <span itemProp="name">{t.nav.home}</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/#services" className="hover:text-accent-blue transition-colors" itemProp="item">
                  <span itemProp="name">{t.nav.services}</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-white" itemProp="name">{service.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-6">
                {service.label}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-cool-300 mb-8 leading-relaxed">
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
              <div className={`w-full aspect-square rounded-3xl bg-gradient-to-br ${service.gradient} opacity-20`} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cool-50 text-center mb-12">
            {t.servicePage.whatYouGet}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature: { title: string; desc: string }, index: number) => (
              <div key={index} className="p-6 rounded-2xl bg-navy-800 border border-cool-500/10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4`}>
                  <Icon name="check" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-cool-100 mb-2">{feature.title}</h3>
                <p className="text-sm text-cool-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cool-50 text-center mb-12">
            {t.servicePage.howItWorks}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step: { title: string; desc: string }, index: number) => (
              <div key={index} className="relative p-6 rounded-2xl bg-white border border-cool-500/10 shadow-card">
                <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-cool-100 mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-cool-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
            {t.servicePage.ctaTitle}
          </h2>
          <p className="text-lg text-cool-300 mb-8">
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

