# 🛡️ Neetu Sahu | Database, Backend Developer & ML Enthusiast Portfolio

A premium, interactive, and high-performance developer portfolio website designed with a dark theme. Built using modern frontend technologies to showcase backend engineering, research papers, projects, and verified credentials.

🌐 **Live Demo:** [portfolio-alpha-ochre-ejeqekgnuj.vercel.app]

---

## 🚀 Key Features

* **⚡ Cyberpunk & Glassmorphic Design:** Harmonious dark color palette with custom animated backlights, glowing borders, and glassmorphism styling.
* **🖱️ Cursor-Following Backlights:** Fluid cursor-spotlight effect that moves dynamically behind glass cards and sections.
* **🧠 Interactive SVG Tech Mindmap:** An animated, responsive network nodes mindmap mapping core skills using SVG `<animateMotion>` pulsing tech links and interactive tooltips.
* **✨ Smooth Micro-Animations:** Elegant card hover-lift animations (`translateY(-6px)`) powered by Framer Motion, matching sheen swept reflections.
* **📄 Research & Credentials Hub:** Dedicated sections showcasing downloadable research papers (PDF format) and interactive preview modals for certifications.
* **✉️ Fully Functional Contact form:** Integrates seamlessly with Web3Forms to deliver inquiries straight to the inbox.
* **📱 Responsive Layout:** Perfectly optimized across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Badges

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62B)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ⚙️ Installation & Setup

Follow these steps to run the portfolio locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Copy the `.env.example` file to create a new `.env` file:
```bash
cp .env.example .env
```
Open `.env` and add your **Web3Forms Access Key** (Get a free key at [Web3Forms](https://web3forms.com/)):
```env
VITE_WEB3FORMS_ACCESS_KEY="your-access-key-here"
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to see the live site.

### 5. Build for Production
To build the static application files for production deployment:
```bash
npm run build
```
This generates optimized static files inside the `dist` directory.

---

## 📂 Project Structure

```
├── public/                # Static assets (images, certificates, pdfs)
├── src/
│   ├── components/        # Reusable UI component modules
│   │   ├── About.tsx      # SVG mindmap & pillars of focus
│   │   ├── Projects.tsx   # Project cards & Framer Motion lift
│   │   ├── Certifications.tsx
│   │   └── ...
│   ├── data.ts            # Central data configuration (Update content here!)
│   ├── index.css          # Custom typography, backlights, and animations
│   ├── main.tsx
│   └── App.tsx
├── tailwind.config.ts     # Tailwind customized styling configurations
├── vite.config.ts         # Vite server settings
└── tsconfig.json          # TypeScript setups
```

---

## ⚙️ Customization Guide

- **Profile Content:** You can customize all texts, links, social icons, projects, and certifications by editing [src/data.ts](file:///c:/Users/NEETU%20SAHU/Desktop/Portfolio/src/data.ts).
- **Certificates:** Place certificate images inside the `public/certs` directory and map them in `data.ts`.
- **Research Papers:** Save research PDF files under the `public/papers` directory.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
