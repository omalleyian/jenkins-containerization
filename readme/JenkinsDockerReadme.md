# Overview

MASSIVELY SIMPLIFIED

# Setup

## Download Jenkins

Note that this is the actual download link, the DL link on the website redirects to this.

`curl http://ftp-chi.osuosl.org/pub/jenkins/war-stable/2.204.5/jenkins.war -o jenkins.war`

## Download Packages

This could be rolled into the Dockerfile. The image builds a lot faster when you do this, though.

```bash
mkdir packages
# start up vanilla version of docker image we are basing our image on, note that
#   we are running this command from the working directory where packages dir was
#   created
docker run -it -v "$(pwd)"/packages:/packages centos:centos7.7.1908 bash
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
RUN rpm -Uvh install /packages/*.rpm
RUN yum install git -y

RUN mkdir /opt/jenkins
COPY jenkins.war /opt/jenkins/jenkins.war
CMD ["/usr/bin/java", "-jar", "/opt/jenkins/jenkins.war"]
```

## Build

Build with a tag (not this one over and over) against current directory Dockerfile

Copy the Dockerfile-centos to Dockerfile-centos7.

Edit the first line in the file `FROM centos` to specify a centos7 tag.

Build with this command:  
`docker build -t jenkins:centos7 -f Dockerfile-centos7 .`

# Run

Example command:  
`docker run --name myjenkins -p 8080:8080 -p 50000:50000 jenkins:centos7`
