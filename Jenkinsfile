#! groovy

pipeline {
    agent {
        kubernetes {
            label 'jnlp-slave'
            defaultContainer 'jnlp-container'
            yamlFile 'jnlp.yaml'
        }
    }

    stages {
        stage('Release Docker Image') {
            steps {
                 sh 'auto/release'
            }
        }
    }
}