
pipeline {
    agent any
    stages {
        stage('Build Services') {
            steps {
                echo 'Building all necessary services.'
            }
        }
        stage('Build Client') {
            steps {
                echo 'Building client.'
                sh 'npm install'
            }
        }
    }
}