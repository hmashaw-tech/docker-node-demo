/**
 * 
 */

pipeline {

    agent any

    environment {
        msg = 'Hello World!'
    }

    stages {

        stage('Prep') {
            steps {
                sh "git rev-parse --short HEAD > .git/commit-id"                        
                commit_id = readFile('.git/commit-id').trim()
            } 
        }
        

        stage('Test in Docker') {
            
            agent {
                docker { image 'node:alpine' }
            }

            steps {
                withEnv(['HOME=.']) {
                    sh 'npm install'
                    sh 'npm test'
                    junit "**/reports/*.xml"
                }
            }

        }


        stage('Deploy') {
            steps {sh 'echo Deploy Demo'}
        }

    }

}
