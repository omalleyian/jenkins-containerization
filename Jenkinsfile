
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
        stage('Deploy to Jboss') {
            steps {
                echo 'Deploying to JBOSS'
                sh 'sudo mv /home/jenkins/workspace/client_master/build/monster-slayer.war /opt/jboss-eap/standalone/deployments'
            }
        }
    }
}
