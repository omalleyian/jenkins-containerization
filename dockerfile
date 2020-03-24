FROM centos:centos7.7.1908

# normal updates and docker 
USER root
RUN yum update -y
RUN yum install docker wget -y
RUN systemctl enable docker && systemctl start docker

# Jenknins requires java to run
RUN yum install java-1.8.0-openjdk -y

# install jenkins
RUN wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo
RUN rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
RUN yum install jenkins -y
RUN systemctl enable jenkins && systemctl start jenkins
RUN usermod -aG docker jenkins

# configure the firewall
RUN firewall-cmd --permanent --new-service=jenkins
RUN firewall-cmd --permanent --service=jenkins --set-short="Jenkins Service Ports"
RUN firewall-cmd --permanent --service=jenkins --set-description="Jenkins service RUN firewalld port exceptions"
RUN firewall-cmd --permanent --service=jenkins --add-port=8080/tcp
RUN firewall-cmd --permanent --add-service=jenkins
RUN firewall-cmd --zone=public --add-service=http --permanent
RUN firewall-cmd --reload