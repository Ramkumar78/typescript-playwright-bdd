# AutoTrader Automation Framework

This framework is designed for automated testing of the [AutoTrader UK](https://www.autotrader.co.uk/) website, ensuring its core functionalities perform as expected. It utilizes a Behavior-Driven Development (BDD) approach with Cucumber, allowing for clear and collaborative test scenario definitions. Under the hood, Playwright is employed for robust and reliable browser automation, enabling comprehensive interaction with web elements.

Key capabilities of this framework include:
- Navigating to specific pages within the AutoTrader UK site.
- Interacting with web elements, such as handling cookie consent pop-ups.
- Searching for cars based on various criteria (e.g., postcode, make, maximum price).
- Applying filters to refine search queries.
- Verifying that search results accurately reflect the applied filters and criteria.

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
npm install
```

### Install Playwright Browsers
```bash
npx playwright install
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
- Creates `reports` and `screenshots` directories if they don't exist.
- Runs Cucumber tests and generates `reports/cucumber-report.json`.
- Screenshots are saved in `screenshots/` only on failures.
- Automatically generates the HTML report (`reports/cucumber-report.html`) upon successful test completion.

### Generate HTML Report
```bash
npm run report
```
- Converts `reports/cucumber-report.json` to `cucumber-report.html` in `reports/`.
- Note: This step is now automatically executed after `npm test` completes successfully. You can run this command manually if you need to regenerate the report without re-running the tests.
