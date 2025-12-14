# Tomasz Chromy - Portfolio Website

> **Profesjonalna strona portfolio freelance web developera** - Responsywna, wielojęzyczna strona z animacjami i optymalizacją SEO

Nowoczesna strona portfolio zbudowana w React 18 z Vite, TypeScript i TailwindCSS. Strona oferuje pełną obsługę wielojęzyczności (Polski/Angielski/Holenderski), płynne animacje oraz optymalizację pod kątem wyszukiwarek.

## 👨‍💻 Autor i Twórca

**Tomasz Chromy** - jedyny twórca i pomysłodawca
- 🌐 Strona: [tomaszchromy.com](https://tomaszchromy.com)
- 📧 Email: tomasz.chromy@outlook.com
- 💻 GitHub: [github.com/TomaszChromy](https://github.com/TomaszChromy)
- 📘 Facebook: [facebook.com/tomasz.foreveryoung](https://facebook.com/tomasz.foreveryoung)
- 💼 LinkedIn: [linkedin.com/in/tomaszchromy](https://linkedin.com/in/tomaszchromy)

**Copyright © 2024-2025 Tomasz Chromy. Wszelkie prawa zastrzeżone.**

## 🌟 Główne Funkcje

### 🌍 Wielojęzyczność (i18n)
- **Polski** - język domyślny
- **English** - pełne tłumaczenie
- **Nederlands** - pełne tłumaczenie
- **Przełącznik języka** w nagłówku
- **Automatyczne wykrywanie** języka przeglądarki

### 🎨 Nowoczesny Design
- **Apple-inspired** - minimalistyczny design
- **Gradienty** - płynne przejścia kolorów
- **Glassmorphism** - efekty szkła
- **Responsywność** - pełna obsługa mobile/tablet/desktop

### ⚡ Animacje
- **Tailwind transitions** - płynne animacje
- **Hover effects** - interaktywne efekty najechania
- **Scroll animations** - animacje przy przewijaniu

### 📱 Sekcje Strony
- **Hero** - sekcja powitalna z CTA
- **About** - o autorze ze statystykami
- **Services** - karty usług z linkami
- **Portfolio** - realizacje projektów (case studies)
- **Blog/Wiedza** - artykuły eksperckie (500+ słów)
- **Contact** - formularz kontaktowy z walidacją
- **Partners** - partnerzy (TomSoft, FusionFinance)

### 📝 Landing Pages
- **Strony usług** - 4 usługi × 3 języki = 12 stron
- **Strony artykułów** - 4 artykuły × 3 języki = 12 stron
- **Breadcrumb navigation** z mikroformatami

### 📊 SEO i Analityka
- **Meta tags** - optymalizacja SEO
- **JSON-LD** - Schema.org structured data
- **Open Graph** - podgląd w social media
- **Sitemap** - 25 URL-ów

## 🛠️ Technologie

### Frontend
| Technologia | Wersja | Opis |
|-------------|--------|------|
| [React](https://react.dev/) | 18.3 | Biblioteka UI |
| [Vite](https://vitejs.dev/) | 5.4 | Szybki bundler z HMR |
| [TypeScript](https://www.typescriptlang.org/) | 5.6 | Typowany JavaScript |
| [TailwindCSS](https://tailwindcss.com/) | 3.4 | Utility-first CSS |
| [React Router](https://reactrouter.com/) | 6.28 | Client-side routing |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | 2.0 | Dynamiczne meta tagi |

### Narzędzia
- **ESLint** - linting kodu
- **PostCSS** - przetwarzanie CSS

## 📋 Wymagania Systemowe

### Minimalne
- **Node.js**: 18.0+
- **RAM**: 1GB
- **Dysk**: 500MB wolnego miejsca
- **Przeglądarka**: Chrome 90+, Firefox 88+, Safari 14+

### Zalecane
- **Node.js**: 20.0+
- **RAM**: 2GB+
- **Dysk**: 1GB+ (z cache)

## 🚀 Instalacja

### 1. Sklonuj repozytorium
```bash
git clone https://github.com/TomaszChromy/tomasz-chromy-web.git
cd tomasz-chromy-web
```

### 2. Zainstaluj zależności
```bash
npm install
```

### 3. Uruchom serwer deweloperski
```bash
npm run dev
```

Strona będzie dostępna pod adresem: **http://localhost:5173**

## 🔧 Dostępne Skrypty

```bash
npm run dev      # Serwer deweloperski
npm run build    # Build produkcyjny
npm run preview  # Podgląd produkcji
npm run lint     # Sprawdzanie kodu
```

## 📁 Struktura Projektu

```
tomasz-chromy-web/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/              # Obrazy i zasoby
│   ├── components/
│   │   ├── ui/              # Button, Icon, Badge
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Layout.tsx
│   │   └── SEOHead.tsx
│   ├── i18n/
│   │   ├── index.tsx        # Provider i hook
│   │   └── translations.ts  # Teksty PL/EN/NL
│   ├── pages/
│   │   ├── ArticlePage.tsx
│   │   └── ServicePage.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.cjs
├── vite.config.ts
├── LICENSE
└── ROADMAP.md
```

## 🚀 Deploy

### Tradycyjny hosting (nazwa.pl, home.pl)
```bash
npm run build
# Wgraj zawartość folderu 'dist' przez FTP
```

### Vercel (zalecane)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Wgraj folder 'dist' do Netlify
```

## 📞 Kontakt i Wsparcie

**Tomasz Chromy** - Autor i Twórca
- 🌐 Strona: [tomaszchromy.com](https://tomaszchromy.com)
- 📧 Email: tomasz.chromy@outlook.com
- 💻 GitHub: [github.com/TomaszChromy](https://github.com/TomaszChromy)

## ⚖️ Licencja i Prawa Autorskie

**Copyright © 2024-2025 Tomasz Chromy. Wszelkie prawa zastrzeżone.**

Ten projekt jest licencjonowany na warunkach [LICENSE](LICENSE).

### Dozwolone:
- ✅ Przeglądanie kodu źródłowego
- ✅ Uczenie się z kodu
- ✅ Tworzenie forków do celów edukacyjnych
- ✅ Modyfikacja i dystrybucja (z zachowaniem licencji)

---

**POWERED BY [TOMASZ CHROMY](https://tomaszchromy.com)**

*Tomasz Chromy - Portfolio Website z React i Vite*

