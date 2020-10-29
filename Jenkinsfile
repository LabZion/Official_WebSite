#! groovy

pipeline {
    agent {
        kubernetes {
            label 'jnlp-slave'
            defaultContainer 'jnlp-container'
            yamlFile 'jnlp.yaml'
        }
    }

    environment {
        GITHUB_TOKEN = credentials('github_token')
    }

    triggers {
        GenericTrigger(causeString: 'Generic Cause',
                genericVariables: [
                        [defaultValue: '', key: 'branch', regexpFilter: '^(refs/heads/master)', value: '$.ref'],
                        [defaultValue: '', key: 'repository', regexpFilter: '', value: '$.repository.full_name'],
                ],
                printPostContent: true,
                token: 'offical-website'
        )
    }

    stages {
        stage('Release Docker Image') {
            steps {

                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'aws-service-account', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh """
                    auto/ecr-login ${USERNAME} ${PASSWORD}
                    auto/release
                    auto/github-ops ${GITHUB_TOKEN}
                    """
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
