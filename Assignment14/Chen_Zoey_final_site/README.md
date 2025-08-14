# Chen Zoey — Assignment 14: Portfolio Site

This portfolio site showcases my course work and was built with React, TypeScript, and Styled Components. The site demonstrates my skills in component-based architecture and modern web development practices.

---

## **Quick Start**

### **Clone Repository (Assignment14 Only)**

Since this project is part of a larger repository, you can clone only the Assignment14 directory using Git sparse checkout:

```bash
# 1. Clone the repository with sparse checkout
git clone --filter=blob:none --sparse https://github.com/zoeyChenCap/RRC_DockerBuild.git
cd RRC_DockerBuild

# 2. Set sparse checkout to only download Assignment14
git sparse-checkout set Assignment14

# 3. Navigate to the project directory
cd Assignment14/Chen_Zoey_final_site

# 4. Build and run with Docker
docker build -t chen_zoey_coding_assignment14 .
docker run -d -p 5575:80 --name chen_zoey_coding_assignment14 chen_zoey_coding_assignment14
```

### **Alternative: Clone Entire Repository**

If you prefer to clone the complete repository:

```bash
# Clone the complete repository
git clone https://github.com/zoeyChenCap/RRC_DockerBuild.git
cd RRC_DockerBuild/Assignment14/Chen_Zoey_final_site

# Build and run
docker build -t chen_zoey_coding_assignment14 .
docker run -d -p 5575:80 --name chen_zoey_coding_assignment14 chen_zoey_coding_assignment14
```

### **Repository Structure**
```
RRC_DockerBuild/
├── Assignment11/
├── Assignment12/
├── Assignment13/
└── Assignment14/
    └── Chen_Zoey_final_site/  ← This portfolio project
        ├── src/
        ├── public/
        ├── Dockerfile
        └── package.json
```

### **Prerequisites**
- Node.js (v16 or higher)
- npm (v8 or higher)
- Docker Desktop
- Git (for sparse checkout feature)

---

## **Features**

- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Component Library**: Built using custom React components (Button, Card, HeroImage, etc.)
- **Interactive Elements**: Project filtering, sliding navigation, and search functionality
- **Modern Tech Stack**: React 19, TypeScript, Styled Components
- **Docker Integration**: Production-ready containerization

---

## **Portfolio Sections**

1. **Hero Section**: Personal introduction with background image
2. **About Me**: Education, location, and interests
3. **My Work**: Interactive project showcase with sliding navigation (3 projects visible at once)
4. **Skills & Expertise**: 4-column layout showcasing programming languages, frameworks, tools, and databases
5. **Learning Resources**: Curated list of development resources
6. **Developer Setup**: VS Code configuration, terminal setup, and editor preferences
7. **Contact**: Professional contact information and social links

---

## **Run Locally (Development)**

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## **Run Locally (Production Build)**

1. **Install dependencies**:
```bash
npm ci
```

2. **Build for production**:
```bash
npm run build
```

3. **Preview production build**:
```bash
npx serve -s build -l 5575
```
Open [http://localhost:5575](http://localhost:5575) to view in browser.

---

## **Docker (Production)**

1. **Build Docker image**:
```bash
docker build -t chen_zoey_coding_assignment14 .
```

2. **Run container**:
```bash
docker run -d -p 5575:80 --name chen_zoey_coding_assignment14 chen_zoey_coding_assignment14
```

3. **Access the site**:
Open [http://localhost:5575](http://localhost:5575) in your browser.

---

## **Docker Management**

- **Stop container**: `docker stop chen_zoey_coding_assignment14`
- **Remove container**: `docker rm chen_zoey_coding_assignment14`
- **View logs**: `docker logs chen_zoey_coding_assignment14`
- **List containers**: `docker ps -a`

---

## **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── Button/         # Button component with variants
│   ├── Card/           # Card component for content display
│   ├── HeroImage/      # Hero section with background image
│   ├── Img/            # Image component
│   ├── Label/          # Form and content labels
│   └── Text/           # Text input component
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

---

## **Technologies Used**

- **Frontend**: React 19, TypeScript, Styled Components
- **Build Tool**: Create React App
- **Containerization**: Docker
- **Web Server**: Nginx (production)
- **Package Manager**: npm

---

## **Customization**

The portfolio content can be easily customized by modifying the data objects in `App.tsx`:
- `works` array: Project information and links
- `skills` object: Technical skills and expertise
- `resources` array: Learning resources
- `developerSetup` object: Development environment preferences

---

## **License**

This project is created for educational purposes as part of the RRC Polytech Web Development Program.

---

**Author**: Zoey Chen  
**Course**: System Build and Testing  
**Institution**: RRC Polytech  
**Year**: 2025
