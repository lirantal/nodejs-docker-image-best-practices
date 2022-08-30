## Docker image build


How to build this Dockerfile project:

```sh
DOCKER_BUILDKIT=1 docker build . -t nodejs-tutorial --build-arg NPM_TOKEN=1234 --secret id=npmrc,src=.npmrc
```
