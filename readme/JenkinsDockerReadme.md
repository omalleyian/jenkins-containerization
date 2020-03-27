# Overview

MASSIVELY SIMPLIFIED

# Setup

Fork the primary Jenkins docker repo at https://github.com/jenkinsci/docker and clone it.

Copy the Dockerfile-centos to Dockerfile-centos7.

Edit the first line in the file `FROM centos` to specify a centos7 tag.

Build with this command:  
`docker build -t jenkins:centos7 -f Dockerfile-centos7 .`

# Run

Example command:  
`docker run --name myjenkins -p 8080:8080 -p 50000:50000 jenkins:centos7`
