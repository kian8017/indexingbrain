#! /bin/sh

sDb="$1"
fileDump="$2"

mongodump --db "$sDb"
tar c dump/ |gzip >"$fileDump"