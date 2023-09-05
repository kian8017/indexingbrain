#! /bin/bash

fileThis=$(realpath "$0")
dirDev=$(dirname "$fileThis")


docker ps |grep -q ibdev
bExists="$?"

sAction="$1"

if [ "$sAction" == "c" ]; then
	if [ "$bExists" -eq 0 ]; then
		docker exec -it ibdev ash
	else
		docker run -dit --rm \
			-v $(readlink -f $SSH_AUTH_SOCK):/ssh-agent -e SSH_AUTH_SOCK=/ssh-agent \
			-v /var/run/docker.sock:/var/run/docker.sock \
			-p 3001:3001 \
			--name ibdev \
			ibdev ash
		docker exec -it ibdev ash
	fi
elif [ "$sAction" == "q" ]; then
	docker stop ibdev
	docker rm ibdev
elif [ "$sAction" == "b" ]; then
	cd "$dirDev"
	earthly +dev
else
	echo "unknown action: '$sAction'"
	exit 1
fi
