#! /bin/sh

dirSave="$1"
fileDest="$2"

tar -cv "$dirSave" |gzip >"$fileDest"