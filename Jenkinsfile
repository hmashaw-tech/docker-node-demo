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
                script { commit_id = readFile('.git/commit-id').trim() }
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


        stage('Docker build/push') {

            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        def appImage = docker.build("markshaw/docker-node-demo:${commit_id}", '.')
                        appImage.push()
                        appImage.push('latest')
                    }
                }
            }

        }

    }

}
