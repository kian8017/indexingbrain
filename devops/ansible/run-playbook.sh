#! /bin/bash

fileThis=$(realpath $0)

sScriptName=$(basename "$fileThis")

if [ "$#" -lt 1 ]; then
  exec 1>&2
  echo "usage: $sScriptName <ansible.playbook> [...ansible.playbook]"
  exit 1
fi

dirAnsible=$(dirname "$fileThis")

fileInventory="$dirAnsible/hosts.yml"

if [ ! -f "$fileInventory" ]; then
  exec 1>&2
  echo "error: '$fileInventory' doesn't exist"
  echo "error:"
  echo "error: please try rerunning the terraform configuration with 'terraform apply' to generate the correct 'hosts.yml'"
  exit 1
fi

ansible-playbook --inventory="$fileInventory" "$@"
