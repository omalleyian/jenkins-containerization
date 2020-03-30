#!/usr/bin/env bash

# Get the public path defined in the vue config file - war will be named the same.
ROOT_CONTEXT="/"
PUBLIC_PATH=$(awk '/publicPath/ {gsub("\"","",$2); print $2}' ./vue.config.js)
WAR_NAME="$(basename "$PUBLIC_PATH")"

# If public path is not set, it defaults to '/' and the war will be named after the parent directory
if [ -z "$PUBLIC_PATH" ]; then
    PUBLIC_PATH="$ROOT_CONTEXT"
    WAR_NAME="$(basename "$PWD")"
fi

# Replace the root context of the jboss-web file to match that of the vue config
sed -i -e "s|<context-root>.*<\/context-root>|<context-root>${PUBLIC_PATH}<\/context-root>|" ./WEB-INF/jboss-web.xml

# Clean up old war
rm -rf build/$WAR_NAME.war

# Hop into the dist and package it up
pushd ./dist
zip -r9 ../build/$WAR_NAME.war ./*
popd

# Add the JBOSS WEB-INF stuff
zip -ur9 ./build/$WAR_NAME.war ./WEB-INF