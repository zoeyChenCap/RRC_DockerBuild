# React Component Library with Build Checks - Assignment 13

This project is an extension of Assignment 12. It adds code quality checks into the build process of a React-based component library using Prettier, ESLint, and unit testing. The checks are enforced both locally via Git pre-commit hooks using Husky and in CI/CD pipelines via GitHub Actions. The component library is containerized and runs on Docker at `localhost:8018`.

---

## Project Structure
```bash
RRC_DockerBuild/
├── .github/
│   └── workflows/
│       └── ci.yml         # GitHub Actions CI pipeline (全局CI配置)
└── Assignment13/
    └── Chen_Zoey_ui_garden_build_checks/
        ├── .husky/                # Husky pre-commit hook
        ├── .eslintrc / eslint.config.js # ESLint config
        ├── .prettierrc            # Prettier config
        ├── Dockerfile
        ├── README.md
        ├── package.json
        ├── public/
        └── src/
            └── components/
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
Only check out the Assignment13 folder
```bash
git sparse-checkout set Assignment13
```
#### Check out the main branch
```bash
git checkout main
```
### 2. Install dependencies
Make sure you are in the right directory and then install the dependencies.
The right directory should be like "C:\Users\Owner\RRC_DockerBuild\Assignment13\Chen_Zoey_ui_garden_build_checks"
```bash
cd Assignment13/Chen_Zoey_ui_garden_build_checks
```
You should be in the "Chen_Zoey_ui_garden_build_checks" then execute the following instruction.
```bash
npm install
```
### 3. Install Husky
```bash
npm run prepare
```

## Pre-commit Code Quality Checks
This project uses Husky and lint-staged to enforce the following checks before each commit:
- ESLint (npm run lint)
- Prettier (npm run format)
- Unit tests (npm test)

How to trigger:
Try to commit code using:
```bash
git add .
git commit -m "Your commit message"
```
If any linting error, formatting issue, or test failure exists, the commit will be blocked until they are resolved.

## GitHub Actions CI/CD
GitHub Actions is configured in .github/workflows/ci.yml. It performs the same checks as the local environment on every push or pull request to the main branch:
- Install dependencies
- Run ESLint
- Run Prettier
- Run unit tests
How to trigger:
Push to GitHub:
```bash
git push origin main
```
Then visit the Actions tab on the GitHub repository to view the CI result.

## Docker Build & Run
### Build the Docker image
```bash
docker build -t chen_zoey_coding_assignment13 .
```
### Run the container
```bash
docker run -d -p 8018:8018 --name chen_zoey_coding_assignment13 chen_zoey_coding_assignment13
```
Now you can visit my demo page at: http://localhost:8018