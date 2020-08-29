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
        stage('Test stage') {
            steps {
                 echo 'Hello Jenkins'
            }
        }
    }
}
