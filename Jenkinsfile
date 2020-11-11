#! groovy

pipeline {
    agent {
        kubernetes {
            defaultContainer 'kaniko-crane'
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

    environment {
        GITHASH = GIT_COMMIT.take(7)
    }

    stages {
        stage('Build Docker Image') {
            steps {
                container('kaniko-crane') {
                    sh 'auto/kaniko-build.sh'
                }
            }
        }

        stage('Scan Docker Image') {
            steps {
                container('trivy') {
                    sh "auto/trivy.sh"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                container('kaniko-crane') {
                    sh 'auto/kaniko-push.sh'
                }
            }
        }

        stage('Update Image Tag in Github') {
            steps {
                container('gitops') {
                    withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'github-app-weijilab', usernameVariable: 'GH_APPID', passwordVariable: 'GH_TOKEN']]) {
                        sh "auto/github-ops ${GH_TOKEN}"
                    }
                }
            }
        }
    }
}
