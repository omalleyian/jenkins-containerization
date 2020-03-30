
pipeline {
    agent { label 'app-server' }
    stages {
        stage ('Starting JBOSS') {
            steps {
                script {
                    def isRunning = sh(script: 'sudo systemctl is-active jboss-eap-rhel', returnStdout: true)
                    if (!isRunning) {
                        sh 'sudo systemctl status jboss-eap-rhel'
                    }
                }
            }
        }
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
    }
    post {
        success {
            echo 'Deploying to JBOSS'
            sh 'sudo mv /jenkins/workspace/client_master/build/monster-slayer.war /opt/jboss-eap/standalone/deployments'
        }
    }
}
