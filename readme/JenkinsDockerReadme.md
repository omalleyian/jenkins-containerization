# Run

Typical usage of our image will simply be this command. The details of what the command does are listed at the end of this doc.

```dockerfile
docker run --name jenkinscasc \
  -v /bin/docker:/bin/docker \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /root/.ssh/:/jenkins/.ssh \
  -p 8080:8080/tcp \
  -p 5000:5000 \
  jenkinscasc:v1
```

# Images Breakdown

- Basics
  - Flow of images OS > Basic > CASC
  - Seperated out to keep changes to any one single image minimal

## OS Image

- Used to update the version of operating system we are using
- Keeps OS updates seperate from software or package updates

## Basic Image

- When building titled as basicjenkins:version tag. Example" `basicjenkins:v1`
- Docker image that is being built by our team. It is a fork off the jenkins docker project
- Jenkins docker project is being built with Centos 7 instead of Debian
- When building containers, you should use this image as the base for building new images
- Uses the OS image as its base, pulls that image in and builds off it

### Setup

1. Fork the primary Jenkins docker repo at https://github.com/jenkinsci/docker and clone it.
2. Copy the Dockerfile-centos to Dockerfile-centos7.
3. Edit the first line in the file with a valid centos7 tag. Example: `FROM centos:centos7.7.1908`
4. Find the line defining the version of Jenkins to install and set it to the current latest LTS version by changing the version number and the sha256 checksum
    - Current LTS version identifier can be found [here](https://jenkins.io/download/)
    - sha256 is [here](https://updates.jenkins-ci.org/download/war/)
5. Build a centos7 image
    1. Build with this command: `docker build -t jenkins:centos7 -f Dockerfile-centos7 .`
    2. Additional notes
        1. An example of this change to the Dockerfile and changes needed to build with RHEL7 (UBI) are [here](https://github.com/nafhn/docker/)
        2. the tag specifies the build name and version > `name:tag`.
        3. at this point, we have a basic Jenkins image that could be run with this command `docker run --name myjenkins -p 8080:8080 -p 50000:50000 jenkins:centos7`. However, we are going to make additions to this image.

## CASC Image

- When building titled as jenkinscasc:version tag. Example" `jenkinscasc:v1`
- Image being used to store every iteration of the Jenkins Configuration as Code (CASC)
- Each time a change is made to this project the version will be incremented
- Only "good" versions should be tagged, meaning no development tags, and only "good" versions, with tags, should be pushed into our image registry
- Change log needs to be updated with each change if a version is being incremented

### Building and Running a Jenkins Container

1. Go to repository that has Dockerfile for CASC
2. Build new image for that repository: `docker build -t jenkinscasc:v1 .`
3. Run the container with the following command: `docker run --name jenkinscasc -v /bin/docker:/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -v /root/.ssh/:/jenkins/.ssh -p 8080:8080/tcp -p 50000:50000 jenkinscasc:v1`

#### NOTES ABOUT THE RUN COMMAND

- `-v` is used to specify voluems that are mounted from the host. Docker is mounted so that jenkins can create sibling containers
- `-p` flag is used to map ports from the container to the host, the port will still need to be exposed to the host from inside the dockerfile
