
pipeline {
    agent { label 'app-server' }
    stages {
        stage('Git Pull') {
            steps{
                git 'https://github.com/esmithdev8/jenkins-containerization.git'
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
                sh 'sudo ${JBOSS_HOME}/./jboss-cli.sh -c --commands="deploy ${PROJECT_DIR}/monster-slayer.war --force"'
            }
        }
    }
}
