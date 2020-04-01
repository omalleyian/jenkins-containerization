
pipeline {
    agent { label 'app-server' }
    environment {
        JBOSS_HOME = '/opt/jboss-eap' 
    }
    stages {
        stage('Git Pull') {
            steps{
                sh 'printenv'
                git branch: "${BRANCH_NAME}",
                    url: "${GIT_URL}"
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing all dependencies.'
                sh 'npm i'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build Client') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to JBOSS') {
            steps {
                echo 'Deploying to JBOSS'
                sh 'npm run deploy'
            }
        }
    }
}
