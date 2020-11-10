#!/bin/sh -xe

cd $(dirname $0)/..

. ./auto/set-env-vars

mkdir -p ~/.docker
cat > ~/.docker/config.json <<EOF
    { "credsStore": "ecr-login" }
EOF

/kaniko/crane push image.tar ${DOCKER_IMAGE}:${TAG}
/kaniko/crane push image.tar ${DOCKER_IMAGE}:latest
