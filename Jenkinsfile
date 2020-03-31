
pipeline {
    agent { label 'app-server' }
    environment {
        jbossHome = '/opt/jboss-eap/bin'
        projectDirectory = '/home/jenkins/workspace/client_master/build'
        gitRepository = 'https://github.com/esmithdev8/jenkins-containerization.git'
    }
    stages {
        stage('Git Pull') {
            steps{
                git "${env.gitRepository}"
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
        stage('End-to-end Testing') {
            steps {
                sh 'npm run testAll'
            }
        }
        stage('Deploy to JBOSS') {
            steps {
                echo 'Deploying to JBOSS'
                sh "sudo ${env.jbossHome}/./jboss-cli.sh -c --commands=\"deploy ${env.projectDirectory}/monster-slayer.war --force\""
            }
        }
    }
}
