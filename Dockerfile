FROM jenkins:centos7
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/ref/plugins.txt
RUN mkdir -p /var/jenkins_home/casc_configs
COPY jenkins.yaml /var/jenkins_home/casc_configs/jenkins.yaml
ENV CASC_JENKINS_CONFIG /var/jenkins_home/casc_configs/jenkins.yaml 
