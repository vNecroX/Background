/   /   /   /   PUSH A DOCKER IMAGE TO DOCKER HUB   /   /   /   /

1. docker login
    If you don't have a Docker image: docker build -t YOUR_USERNAME/YOUR_DOCKERIMAGENAME .
2. docker push YOUR_USERNAME/YOUR_DOCKERIMAGENAME

For me it is necrox/redis-web:latest