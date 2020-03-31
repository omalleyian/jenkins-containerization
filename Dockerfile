FROM jenkins:centos7
USER root
COPY plugins.txt /tmp/plugins.txt
RUN /usr/local/bin/install-plugins.sh < /tmp/plugins.txt
RUN mkdir -p /var/jenkins_home/casc_configs
COPY jenkins.yaml /var/jenkins_home/casc_configs/jenkins.yaml
ENV CASC_JENKINS_CONFIG /var/jenkins_home/casc_configs/jenkins.yaml
RUN yum install zip -y
