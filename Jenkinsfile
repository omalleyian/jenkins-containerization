
pipeline {
    agent { label 'app-server' }
    environment {
        jbossHome = '/opt/jboss-eap/bin'
        projectDirectory = '/home/jenkins/workspace/client_master/build'
    }
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
                sh "sudo ${JBOSS_HOME}/./jboss-cli.sh -c --commands=\"deploy ${env.projectDirectory}/monster-slayer.war --force\""
            }
        }
    }
}
