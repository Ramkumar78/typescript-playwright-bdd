# AutoTrader Automation Framework

A TypeScript-based Playwright automation framework with Cucumber BDD for testing car searches on [AutoTrader UK](https://www.autotrader.co.uk/).

## Prerequisites
- **Node.js**: v16 or later (includes npm). Download from [nodejs.org](https://nodejs.org/).
- **IDE**: WebStorm or IntelliJ IDEA with TypeScript plugin (optional).
- **PowerShell**: For running commands on Windows.
- **Jenkins**: For CI/CD integration (optional).

## Project Structure
```
autotrader-automation/
├── features/                   # Cucumber feature files
│   └── car_search.feature
├── src/                        # Source code
│   ├── pages/                 # Page Object Model
│   │   └── home.page.ts
│   ├── steps/                 # Cucumber step definitions
│   │   └── car_search.steps.ts
│   ├── utils/                 # Configuration
│   │   └── config.ts
│   └── playwright.config.ts   # Playwright configuration
├── reports/                    # Test reports
│   ├── cucumber-report.json
│   └── cucumber-report.html
├── screenshots/                # Failure screenshots
├── cucumber-report.js          # HTML report generator
├── eslint.config.mjs           # ESLint configuration
├── Jenkinsfile                 # Jenkins pipeline
├── package.json                # npm configuration
├── tsconfig.json               # TypeScript configuration
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## Setup

### Clone the Repository
```bash
git clone <repository-url>
cd autotrader-automation
```

### Install Dependencies
```bash
cd ..\Automation repo\typescript\autotrader-automation
npm install -D @playwright/test @cucumber/cucumber typescript ts-node @types/node @cucumber/pretty-formatter playwright cucumber-html-reporter eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Install Playwright Browsers
```bash
npx playwright install
```

### Create Folders (if not already present)
```bash
mkdir reports
mkdir screenshots
```

## Running Tests Locally

### Lint Code
```bash
npm run lint
```
To fix issues:
```bash
npm run lint -- --fix
```

### Execute Tests
```bash
npm test
```
- Runs Cucumber tests and generates `reports/cucumber-report.json`.
- Screenshots are saved in `screenshots/` only on failures.

### Generate HTML Report
```bash
npm run report
```
- Converts `cucumber-report.json` to `cucumber-report.html` in `reports/`.
