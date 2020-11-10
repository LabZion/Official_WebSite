#!/bin/sh -xe

cd $(dirname $0)/..

. ./auto/set-env-vars

/kaniko/crane push image.tar ${DOCKER_IMAGE}:${TAG}
/kaniko/crane push image.tar ${DOCKER_IMAGE}:latest
