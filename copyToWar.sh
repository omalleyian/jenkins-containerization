#!/usr/bin/env bash

# Get the public path defined in the vue config file - war will be named the same.
ROOT_CONTEXT="/"
PUBLIC_PATH=$(awk '/publicPath/ {gsub("\"","",$2); print $2}' ./vue.config.js)
WAR_NAME="$(basename "$PUBLIC_PATH")"

# If public path is not set, it defaults to '/' and the war will be named after the parent directory
if [ -z "$PUBLIC_PATH" ]; then
    echo "publicPath not defined in vue.config.js. Defaulting to:"

    PUBLIC_PATH="$ROOT_CONTEXT"
    WAR_NAME="$(basename "$PWD")"
fi

echo "PUBLIC_PATH = $PUBLIC_PATH"
echo "WAR_NAME = $WAR_NAME"
echo

# Check for build folder and create if missing
if [ ! -d "./build" ]; then
    echo "Creating build folder"
    mkdir "./build"
fi

# Replace the root context of the jboss-web file to match that of the vue config
echo "Replacing jboss-web root context with $PUBLIC_PATH"
sed -i -e "s|<context-root>.*<\/context-root>|<context-root>${PUBLIC_PATH}<\/context-root>|" ./WEB-INF/jboss-web.xml

# Clean up old war
echo "Cleaning up old war file"
rm -rf build/$WAR_NAME.war

echo
# Hop into the dist and package it up
if [ -d "./dist" ]; then
    echo "Hopping in to dist folder"
    pushd ./dist

    echo "Zipping dist files"
    zip -r9 ../build/$WAR_NAME.war ./*

    echo "Hopping out of dist folder"
    echo

    popd
else
    echo "No dist folder found"
fi

# Add the JBOSS WEB-INF stuff
echo "Adding WEB-INF folder to war archive"
zip -ur9 ./build/$WAR_NAME.war ./WEB-INF