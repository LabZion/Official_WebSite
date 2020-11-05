#! groovy

pipeline {
    agent {
        kubernetes {
            defaultContainer 'jnlp-docker'
            yamlFile 'jnlp.yaml'
        }
    }

    triggers {
        GenericTrigger(
            genericVariables: [
              [key: 'ref', value: '$.ref'],
              [key: 'repositoryURL', value: '$.repositoryURL'],
              [key: 'branch', value: '$.branch']
            ],
            token: 'official-website' ,
            causeString: '$ref' ,
            printContributedVariables: true,
            printPostContent: true
        )
    }

    stages {
        stage('Release Docker Image') {
            steps {
                sh """
                auto/ecr-login
                auto/release
                """
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'github-app-weijilab', usernameVariable: 'GH_APPID', passwordVariable: 'GH_TOKEN']]) {
                    sh "auto/github-ops ${GH_TOKEN}"
                }
            }
        }

//        stage('update Docker Image Tag') {
//            steps {
//
//                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'aws-service-account', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
//                    sh """
//                    auto/ecr-login ${USERNAME} ${PASSWORD}
//                    auto/github-ops ${GITHUB_TOKEN}
//                    """
//                }
//
//            }
//        }

    }
}
