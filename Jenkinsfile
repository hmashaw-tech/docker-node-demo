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
            steps {
                def myTestContainer = docker.image('node:alpine')
                myTestContainer.pull()
                myTestContainer.inside {
                    withEnv(['HOME=.']) {
                        sh 'npm install'
                        sh 'npm test'
                        junit "**/reports/*.xml"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {sh 'echo Deploy Demo'}
        }

    }

}
