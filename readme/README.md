# jenkins-containerization

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Docker Command for starting Jenkins server
```
docker run -it -v /var/run/docker.sock:/var/run/docker.sock -p 8080:8080/tcp jenkins_0.1:latest <java -jar /opt/jenkins/jenkins.war>
```

### Jenkins install commands from inside container
```
mkdir /opt/jenkins
curl http://ftp-chi.osuosl.org/pub/jenkins/war-stable/2.204.5/jenkins.war -o /opt/jenkins/jenkins.war
java -jar /opt/jenkins/jenkins.war
```
