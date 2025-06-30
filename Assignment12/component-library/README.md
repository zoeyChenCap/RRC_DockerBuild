# React Component Library - Assignment 12

This project is a UI Component Library built with **React**, **TypeScript**, **Styled-Components**, and **Storybook**. It is created as part of Assignment 12 for the Web Systems Build and Testing course.

## ✨ Project Features

- 12 reusable UI components (Button, Label, Text, Table, Dropdown, RadioButton, Img, HeroImage, Card, etc.)
- Storybook integration with controls and responsive views
- Each component has:
  - Type definitions (`.types.tsx`)
  - Unit tests (`.test.tsx`)
  - Storybook stories (`.stories.tsx`)
  - Index export file
- Styled using `styled-components`
- All components support `disabled` states with visual change and test coverage

## 🏗️ Project Structure

component-library/
├── src/
│ └── components/
│ └── Button/
│ ├── Button.tsx
│ ├── Button.types.tsx
│ ├── Button.test.tsx
│ ├── Button.stories.tsx
│ └── index.ts
│ └── ...
├── Dockerfile
├── README.md
└── ...

---

## Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/component-library.git
cd component-library
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run Storybook
```bash
npm run storybook
```
This will open the component library on: http://localhost:8083

## Run Unit Tests
```bash
npm test
```
### All components include at least 2 unit tests:
#### Component is visible
#### Background color changes in disabled state

## Run with Docker
### Docker Build
```bash
docker build -t chen_zoey_coding_assignment12 .
```
### Docker Run
```bash
docker run -d -p 8083:8083 --name chen_zoey_coding_assignment12 chen_zoey_coding_assignment12
```
This will serve the production build of Storybook at http://localhost:8083

