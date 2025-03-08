
---

### `Jenkinsfile`
Create a `Jenkinsfile` in `E:\Automation repo\typescript\autotrader-automation` with this content:

```groovy
pipeline {
    agent any

    tools {
        nodejs 'Node16' // Name of Node.js installation in Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: '<repository-url>' // Replace with your Git repo URL
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install -D @playwright/test @cucumber/cucumber typescript ts-node @types/node @cucumber/pretty-formatter playwright cucumber-html-reporter eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin'
                sh 'npx playwright install' // Install Playwright browsers
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test' // Generates cucumber-report.json
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npm run report' // Generates cucumber-report.html
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'reports',
                    reportFiles: 'cucumber-report.html',
                    reportName: 'Cucumber HTML Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'screenshots/*.png', allowEmptyArchive: true // Archive screenshots if any
        }
        failure {
            echo 'Tests failed. Check screenshots and report for details.'
        }
        success {
            echo 'Tests passed successfully!'
        }
    }
}