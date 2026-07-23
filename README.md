<div align="center">

<!-- Hero Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,19,24&height=220&section=header&text=Al%20Sami&fontSize=72&fontAlignY=38&animation=fadeIn&fontColor=ffffff&desc=Software%20%26%20Machine%20Learning%20Engineer&descAlignY=60&descSize=20" width="100%"/>

<!-- Badges Row -->
<p>
  <img src="https://img.shields.io/badge/Status-Live%20%26%20Running-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Status"/>
  <img src="https://img.shields.io/badge/Built%20With-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge&logo=gitbook&logoColor=white" alt="License"/>
  <img src="https://img.shields.io/badge/Source-By%20Request%20Only-orange?style=for-the-badge&logo=github&logoColor=white" alt="Source"/>
</p>

<p>
  <a href="https://al-sami-2005.github.io/portfolio/" target="_blank">
    <img src="https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Now-2c6975?style=for-the-badge" alt="Live Demo"/>
  </a>
  <a href="mailto:alsami1070@gmail.com?subject=[Source Code Request] Portfolio">
    <img src="https://img.shields.io/badge/📬%20Request%20Source-alsami1070@gmail.com-68b2a0?style=for-the-badge" alt="Contact"/>
  </a>
</p>

---

<br/>

> **⚠️ This repository does not include the full source code.**  
> The live demo is publicly available. To request access to the source code, see [§ Request Source Code](#-request-the-source-code) below.

<br/>

</div>

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Admin Panel](#-admin-panel)
- [Project Architecture](#-project-architecture)
- [Request Source Code](#-request-the-source-code)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

---

## 🧭 About the Project

A **fully interactive, production-grade personal portfolio** designed and built from scratch — no templates, no themes. Every pixel, animation, and interaction was handcrafted to create a premium, memorable experience.

The portfolio features a **built-in Admin Panel** protected behind session authentication — allowing every text, link, image, and section to be edited live from the browser without touching a single line of code. All changes persist via `localStorage` and are exportable as JSON.

This project was built to demonstrate:
- Modern frontend architecture at scale
- Attention to design detail and micro-animations
- Real-world admin tooling integrated into a static site

---

## 🌐 Live Demo

<div align="center">

| Environment | URL |
|---|---|
| 🌍 **Live Portfolio** | [https://al-sami-2005.github.io/portfolio/](https://al-sami-2005.github.io/portfolio/) |
| 🔐 **Admin Panel** | [https://al-sami-2005.github.io/portfolio/admin](https://al-sami-2005.github.io/portfolio/admin) |

> **Admin Demo Password:** `demo123`  
> *(This is a read-only preview. Changes do not persist on the hosted demo.)*

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design & UI
- ✅ Dual **dark / light** theme with smooth toggle
- ✅ Animated **particle canvas** background
- ✅ **Typewriter** role cycling animation
- ✅ **Cursor aurora** glow + sparkle trail
- ✅ **Scroll-driven** progress bar
- ✅ Concentric ring + floating shape hero
- ✅ Scroll reveal animations on all sections
- ✅ Glassmorphism cards and surfaces
- ✅ Premium teal + midnight color palette

</td>
<td width="50%">

### ⚡ Functionality
- ✅ Fully **data-driven** via `SiteDataContext`
- ✅ Built-in **Admin Panel** (10 section editors)
- ✅ Session-based **admin authentication**
- ✅ **localStorage** persistence for all edits
- ✅ **JSON export / import** backup system
- ✅ **Reset to defaults** one-click
- ✅ **CV download** floating button
- ✅ Smooth **anchor navigation**
- ✅ Fully **responsive** (mobile, tablet, desktop)

</td>
</tr>
</table>

---

## 🛠 Tech Stack

<div align="center">

| Category | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Routing** | React Router DOM v7 |
| **Icons** | React Icons + Lucide React |
| **Styling** | Vanilla CSS (design tokens, custom props) |
| **Typography** | Inter + JetBrains Mono (Google Fonts) |
| **State** | React Context API + `localStorage` |
| **Animations** | Pure CSS keyframes + JS |
| **Deployment** | GitHub Pages |
| **Language** | JavaScript (ESM) |

</div>

---

## 🔐 Admin Panel

The portfolio ships with a **fully integrated admin panel** at `/admin`. Every section of the site is editable through a dedicated editor — no database required.

| Editor | What It Controls |
|---|---|
| **Hero Editor** | Name, photo, roles, stats, CTA buttons, nav pills |
| **About Editor** | Bio paragraphs, photo, badge, stats |
| **Experience Editor** | Job titles, companies, dates, bullet points, tech tags |
| **Education Editor** | Degrees, schools, years, badges, featured flags |
| **Skills Editor** | Skill names, icons, proficiency percentages |
| **Projects Editor** | Project cards, descriptions, tech tags, links |
| **Publications Editor** | Papers, authors, venues, abstracts, BibTeX |
| **Footer Editor** | Contact email, phones, socials, copyright text |
| **Header Editor** | Logo, nav links, CTA text |
| **Settings Editor** | Admin password, CV URL, JSON export/import, factory reset |

---

## 🏗 Project Architecture

```
portfolio/
├── src/
│   ├── components/          # All portfolio sections
│   │   ├── Hero.jsx         # Hero with typewriter + animations
│   │   ├── About.jsx        # About section
│   │   ├── Experience.jsx   # Work history timeline
│   │   ├── Education.jsx    # Academic journey
│   │   ├── Skills.jsx       # Animated skill bars
│   │   ├── Projects.jsx     # Project cards
│   │   ├── Publications.jsx # Research papers + BibTeX
│   │   ├── Footer.jsx       # Contact + social links
│   │   ├── Header.jsx       # Sticky nav + theme toggle
│   │   ├── ParticleCanvas.jsx
│   │   └── CvDownload.jsx
│   │
│   ├── admin/               # Admin panel (auth-gated)
│   │   ├── AdminPanel.jsx   # Shell + tab routing
│   │   ├── AdminLogin.jsx   # Password gate
│   │   ├── admin.css        # Admin-specific styles
│   │   └── editors/         # 10 section editors
│   │
│   ├── context/
│   │   ├── SiteDataContext.jsx  # Global data + localStorage
│   │   └── ThemeContext.jsx     # Dark/light theme
│   │
│   ├── data/
│   │   └── siteData.js      # Default content (single source of truth)
│   │
│   ├── index.css            # Full design system (1600+ lines)
│   ├── App.jsx              # Router + providers
│   └── main.jsx             # Entry point
│
├── public/                  # Static assets
├── .github/                 # Issue templates + workflows
├── LICENSE                  # Proprietary license
└── README.md
```

---

## 📬 Request the Source Code

> This project is **proprietary software**. The source code is not publicly licensed.

If you're interested in:

- 🔑 **Licensing** this portfolio for personal or commercial use
- 🎨 **Commissioning** a custom portfolio built for you
- 📚 **Educational access** to study the codebase
- 🤝 **Collaboration** on a project

**Contact me directly:**

<div align="center">

| Method | Details |
|---|---|
| 📧 **Email** | [alsami1070@gmail.com](mailto:alsami1070@gmail.com?subject=[Source%20Code%20Request]%20Portfolio) |
| 💼 **LinkedIn** | [linkedin.com/in/al-sami](https://www.linkedin.com/in/al-sami/) |
| 🐦 **Twitter/X** | [@AlSami](https://twitter.com/AlSami) |
| 🐙 **GitHub** | [Open an Issue](https://github.com/al-sami-2005/portfolio/issues/new/choose) |

> **Email subject line:** `[Source Code Request] Portfolio`  
> All requests are reviewed personally. Please include your intended use case.

</div>

---

## 🤝 Contributing

While the source code is not open-source, contributions to the **documentation**, **bug reports on the live demo**, and **feature suggestions** are welcome.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

**You can contribute by:**
- 🐛 [Reporting bugs](https://github.com/al-sami-2005/portfolio/issues/new?template=bug_report.md) in the live demo
- 💡 [Suggesting features](https://github.com/al-sami-2005/portfolio/issues/new?template=feature_request.md)
- 📖 Improving this README or documentation
- ⭐ Starring this repository to show support

---

## 📞 Contact

<div align="center">

| | |
|---|---|
| **Al Sami** | Software & Machine Learning Engineer |
| 📍 | United Kingdom |
| 🌐 | [alsami.site](https://al-sami-2005.github.io/portfolio/) |
| 📧 | [alsami1070@gmail.com](mailto:alsami1070@gmail.com) |
| 💼 | [LinkedIn](https://www.linkedin.com/in/al-sami/) |
| 🐙 | [GitHub](https://github.com/al-sami-2005) |

</div>

---

## 📄 License

```
Copyright (c) 2025 Al Sami. All Rights Reserved.

This software is proprietary. Viewing the live demo is permitted.
The source code may not be copied, modified, distributed, or used
without explicit written permission from the copyright owner.

See LICENSE for full terms.
```

For licensing inquiries: [alsami1070@gmail.com](mailto:alsami1070@gmail.com?subject=[License%20Inquiry]%20Portfolio)

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,19,24&height=100&section=footer" width="100%"/>

<p>
  <sub>Designed & Built with ❤️ by <strong>Al Sami</strong> · React + Vite · © 2025</sub>
</p>

<p>
  <a href="https://al-sami-2005.github.io/portfolio/">🌐 Live Demo</a> · 
  <a href="mailto:alsami1070@gmail.com?subject=[Source Code Request] Portfolio">📬 Request Source</a> · 
  <a href="https://github.com/al-sami-2005/portfolio/issues">🐛 Report Bug</a> · 
  <a href="https://github.com/al-sami-2005/portfolio/issues">💡 Request Feature</a>
</p>

⭐ **Star this repo** if you found it inspiring!

</div>
