
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
        stage('Build Services') {
            steps {
                echo 'Building all necessary services.'
            }
        }
        stage('Build Client') {
            steps {
                sh 'npm i'
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
