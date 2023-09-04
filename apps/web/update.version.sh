#! /bin/sh

sVersion="$1"

if [ "$sVersion" == "" ]; then
  exec 1>&2
  echo "usage: update.version.sh <commit.hash.of.version>"
  exit 1
fi

fileThis=$(realpath "$0")
dirWeb=$(dirname "$fileThis")

fileVersion="$dirWeb/src/version.js"

echo "export const version = '$sVersion';" >"$fileVersion"