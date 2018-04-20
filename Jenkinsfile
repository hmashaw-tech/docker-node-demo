node {

    def commit_id

    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"                        
        commit_id = readFile('.git/commit-id').trim()
    }

    stage('Test') {
      def myTestContainer = docker.image('node:alpine')
      myTestContainer.pull()
      myTestContainer.inside {
          sh 'npm install'
          sh 'npm test'
      }
   }

    stage('Docker build/push') {
        docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
            def app = docker.build("markshaw/docker-node-demo:${commit_id}", '.').push()
        }
    }
   
}
