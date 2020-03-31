
pipeline {
    environment {
        JBOSS_HOME = '/opt/jboss-eap'
        CLIENT_WORKSPACE = "${WORKSPACE}"
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
                // sh 'sudo /opt/jboss-eap/bin/./jboss-cli.sh -c --commands="deploy /home/jenkins/workspace/client_master/build/monster-slayer.war --force"'
            }
        }
    }
}
