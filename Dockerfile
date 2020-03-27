# Standard centos image
FROM centos:centos7.7.1908

USER root

# Grab packages this container would need and place them in mounted volume to save space
#   and then install them
ADD linuxpackages /linuxpackages
RUN rpm -Uvh /linuxpackages/*.rpm

# drop the Jenkins war file in a reasonable location and set it as the default command
RUN mkdir /opt/jenkins
COPY linuxpackages/jenkins.war /opt/jenkins/jenkins.war
CMD ["/usr/bin/java", "-jar", "/opt/jenkins/jenkins.war"]
