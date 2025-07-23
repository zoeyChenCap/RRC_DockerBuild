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

> **Important:**
> To ensure that Husky, ESLint, Prettier, and unit tests run automatically on commit, you **must clone the entire `RRC_DockerBuild` repository**, not just the `Assignment13` subfolder. This is because the Git repository and Husky hooks are configured at the root level. If you only download the subfolder, you will not get the Git hooks or the full developer workflow.
>
> **Why?**
> - The `.git` directory (which enables Git and hooks) and the `.husky` folder (which contains the pre-commit hooks) are located in the root of `RRC_DockerBuild`.
> - Husky hooks are only triggered if you are working inside the full repository. If you only download a subfolder, you will not have the necessary Git configuration for hooks, and code quality checks will not run automatically on commit.
> - This setup ensures that every contributor has the same code quality checks and pre-commit workflow.

### 1. Clone the repository

Clone the entire repository:

```bash
git clone https://github.com/zoeyChenCap/RRC_DockerBuild.git
cd RRC_DockerBuild
```

If you want to save space, you can delete or ignore the `Assignment11` and `Assignment12` folders after cloning.

### 2. Install dependencies

Make sure you are in the right directory and then install the dependencies.
The right directory should be like `.../RRC_DockerBuild/Assignment13/Chen_Zoey_ui_garden_build_checks`

```bash
cd Assignment13/Chen_Zoey_ui_garden_build_checks
```

You should be in the `Chen_Zoey_ui_garden_build_checks` folder, then execute the following instruction.

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