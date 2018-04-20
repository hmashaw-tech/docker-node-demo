/**
 * 
 */

pipeline {

    agent any

    environment {
        msg = 'Hello World!'
    }

    stages {

        stage('Hello World') {

            steps {
                sh 'echo $msg'
            }

        }

        stage('Build') {
            steps {sh 'echo Build Demo'} 
        }

        stage('Test') {
            steps {sh 'echo Test Demo'}
        }

        stage('Deploy') {
            steps {sh 'echo Deploy Demo'}
        }

    }

}
