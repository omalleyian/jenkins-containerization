FROM centos:centos7.7.1908
# normal updates and docker
USER root
# commenting out updates
# RUN yum update -y
# Jenknins requires java to run
RUN yum install java-1.8.0-openjdk -y
# install jenkins
RUN mkdir /opt/jenkins
RUN curl http://ftp-chi.osuosl.org/pub/jenkins/war-stable/2.204.5/jenkins.war -o /opt/jenkins/jenkins.war
