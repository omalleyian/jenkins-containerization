# Contents

- [Contents](#contents)
- [Overview](#overview)
- [Setup](#setup)
  - [Download Jenkins](#download-jenkins)
  - [Download Packages](#download-packages)
- [Create and Run Image](#create-and-run-image)
  - [Dockerfile](#dockerfile)
  - [Build](#build)
  - [Run Container](#run-container)

# Overview

Setup, build, and deploy of Docker Jenkins container.

# Setup

## Download Jenkins

Note that this is the actual download link, the DL link on the website redirects to this.

`curl http://ftp-chi.osuosl.org/pub/jenkins/war-stable/2.204.5/jenkins.war -o jenkins.war`

## Download Packages

This could be rolled into the Dockerfile. The image builds a lot faster when you do this, though.

```bash
mkdir packages
# start up vanilla version of docker image we are basing our image one
docker run -it -v /path/to/your/workingdir/packages:/packages centos:centos7.7.1908 bash
# The below command is run inside the container shell that just started
yum install --downloadonly --downloaddir=/packages java-1.8.0-openjdk
```

Now: all packages needed for Java and Jenkins to build the image are in your working directory

# Create and Run Image

## Dockerfile

The Dockerfile will look like this

```dockerfile
FROM centos:centos7.7.1908

USER root

ADD packages /packages
RUN yum install /packages/*.rpm -y

RUN mkdir /opt/jenkins
COPY jenkins.war /opt/jenkins/jenkins.war
CMD ["/usr/bin/java", "-jar", "/opt/jenkins/jenkins.war"]
```

## Build

Build with a tag (not this one over and over) against current directory Dockerfile

`docker build -t jenkins:latest .`

## Run Container

Run the container. Note the options for two bind mount "volumes" and a port

`docker run -d -v /bin/docker:/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -p 8080:8080/tcp jenkins:latest`

