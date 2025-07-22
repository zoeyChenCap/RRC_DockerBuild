# React Component Library with Build Checks - Assignment 13

This project is a UI Component Library built with **React**, **TypeScript**, **Styled-Components**, and **Storybook**. It is created as part of Assignment 12 for the Web Systems Build and Testing course.

## Project Features

- 12 reusable UI components (Button, Label, Text, Table, Dropdown, RadioButton, Img, HeroImage, Card, etc.)
- Storybook integration with controls and responsive views
- Each component has:
  - Type definitions (`.types.tsx`)
  - Unit tests (`.test.tsx`)
  - Storybook stories (`.stories.tsx`)
  - Index export file
- Styled using `styled-components`
- All components support `disabled` states with visual change and test coverage

## Project Structure

```text
component-library/
├── src/
│   └── components/
│       └── Button/
│           ├── Button.tsx
│           ├── Button.types.tsx
│           ├── Button.test.tsx
│           ├── Button.stories.tsx
│           └── index.ts
│       └── ...
├── Dockerfile
├── README.md
└── ...
```

## Getting Started Locally

### 1. Clone the repository

#### Clone the repository without checking out all files
Creates a shallow clone and skips downloading the full file contents.
```bash
git clone --filter=blob:none --no-checkout https://github.com/zoeyChenCap/RRC_DockerBuild.git
cd RRC_DockerBuild
```
#### Initialize sparse-checkout in "cone" mode
This tells Git you want to selectively check out directories.
```bash
git sparse-checkout init --cone
```
#### Set the target folder you want to check out
Only check out the Assignment12 folder
```bash
git sparse-checkout set Assignment12
```
#### Check out the main branch
```bash
git checkout main
```
### 2. Install dependencies
Make sure you are in the right directory and then install the dependencies.
The right directory should be like "C:\Users\Owner\RRC_DockerBuild\Assignment12\component-library"
```bash
cd Assignment12/component-library
```
You should be in the "component-library" then execute the following instruction.
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
Now you can review my demo page for component library
