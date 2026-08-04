# Persona - The Personality Grooming Club 🌟

> **SOIT RGPV's premier personality grooming community** where confidence meets communication, and learning transforms into leadership.

![Persona Brand Banner](src/assets/icons/persona-logo.png)

---

## 🚀 Overview

**Persona** is a modern, responsive web platform built for the student community at **SOIT RGPV, Bhopal**. The platform highlights upcoming grooming summits, workshops, alumni interaction sessions, and flagship club events such as *Vichaar Sangam* and *Speak Off*.

Built with **React 19**, **Vite**, and **Tailwind CSS v4**, the application delivers a glassmorphic aesthetic featuring smooth animations, gradient borders, custom typography, and modular UI components.

---

## ✨ Key Features

- **🌟 Modular Event Slider (`EventSlider`)**:
  - **Resilient Image Handling**: Integrated `EventImage` sub-component featuring loading skeletons, automated `onError` SVG fallback placeholders, and per-event focal point positioning (`imagePosition` & `objectFit`).
  - **Dynamic Metadata Display**: Renders dynamic event headings (`EventDetails`), descriptions, date badges, and action buttons.
  - **Flexible Controls**: Smooth dot pagination and keyboard/mouse arrow navigation (`EventSliderControls`) with auto-play capabilities.
- **⏳ Interactive Timeline (`VerticalTimeline`)**:
  - Vertical milestone timeline for historical and upcoming club events with year badges and custom media cards.
- **👥 Team & Leadership Showcase**:
  - Interactive leadership cards (`MembersCard`) highlighting Club Leads and Executive Coordinators with custom frame themes.
- **🎨 Glassmorphic Dark UI Design**:
  - Deep space purple theme (`#161028`, `#261B40`, `#9B5DE8`, `#5F43B2`) with custom gradient borders, League Spartan typography, and micro-interactions.
- **📱 Fully Responsive**:
  - Optimized layouts for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Linting & Quality** | ESLint 10 |

---

## 📂 Directory Structure

```text
persona/
├── public/
├── src/
│   ├── assets/              # Brand logos, icons, event illustrations, team media
│   │   └── icons/
│   │       └── TeamImages/
│   ├── components/
│   │   ├── common/          # Reusable UI primitives (Button, Logo, Title, MembersCard)
│   │   │   ├── Events/      # Event specific components (VerticalTimeline, Tag)
│   │   │   └── EventSlider/ # Modular EventSlider sub-components
│   │   │       ├── EventImage.jsx
│   │   │       ├── EventDetails.jsx
│   │   │       ├── EventSlideCard.jsx
│   │   │       └── EventSliderControls.jsx
│   │   ├── Home/            # Home-page specific sections (TeamSection, EventHome)
│   │   └── layout/          # MainLayout, Navbar, Footer
│   ├── data/                # Static data arrays (eventsData.js, teamData.js)
│   ├── pages/               # Page components (Home.jsx, Event.jsx)
│   ├── styles/              # Global styles and Tailwind configuration
│   ├── App.jsx              # Main App entry with Routing
│   └── main.jsx             # React DOM root render
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nikhilm7315/persona.git
   cd persona
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

- **`npm run dev`**: Launches the Vite development server with HMR.
- **`npm run build`**: Builds the production bundle in the `dist` directory.
- **`npm run preview`**: Previews the built production site locally.
- **`npm run lint`**: Runs ESLint across all components to ensure code quality.

---

## 🧱 Component Usage Example

### Using `EventSlider`

```jsx
import EventSlider from './components/common/EventSlider'

function CustomPage() {
  return (
    <div className="py-12">
      <EventSlider autoPlay={true} autoPlayInterval={6000} />
    </div>
  )
}
```

### Using Sub-components Modularly

```jsx
import { EventImage, EventDetails } from './components/common/EventSlider'

function SingleEventCard({ event }) {
  return (
    <div className="flex flex-col md:flex-row bg-[#261B40] rounded-3xl overflow-hidden">
      <EventImage
        src={event.image}
        alt={event.title}
        imagePosition="center top"
        objectFit="cover"
      />
      <EventDetails
        title={event.title}
        description={event.description}
        date={event.date}
        buttonText="View Event Details"
      />
    </div>
  )
}
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to suggest an enhancement or report an issue:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
