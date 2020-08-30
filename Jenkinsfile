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
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId:'aws-service-account', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh """
                    sleep 20m
                    auto/ecr-login ${USERNAME} ${PASSWORD}
                    auto/release
                    """
                }
            }
        }
    }
}
