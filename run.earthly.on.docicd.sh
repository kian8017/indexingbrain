#! /bin/bash

# requires docker login on docicd

docker run \
	-t \
	-v /var/run/docker.sock:/var/run/docker.sock \
	-v /root/.docker:/root/.docker \
	-e NO_BUILDKIT=1 \
	-e EARTHLY_PUSH=1 \
	earthly/earthly:v0.7.17 github.com/kian8017/indexingbrain+publish --PAYLOAD_ADDRESS=https://admin.indexing-brain.org --VERSION=test-dockerized-1
