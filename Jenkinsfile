
pipeline {
    environment {
        JBOSS_HOME = '/opt/jboss-eap' 
    }
    agent { label 'app-server' }
    stages {
        stage('Git Pull') {
            steps{
                sh 'printenv'
                git branch: "${BRANCH_NAME}",
                    url: 'https://github.com/esmithdev8/jenkins-containerization.git'
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
        stage('Deploy to Jboss') {
            steps {
                echo 'Deploying to JBOSS'
                sh 'npm run deploy'
            }
        }
    }
}
