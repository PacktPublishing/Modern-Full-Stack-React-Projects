# Modern Full-Stack React Projects / Chapter 11 / Backend

_Building a Backend With a GraphQL API_

## Requirements

Please install the following, if you do not already have them installed:

- Node.js v20.10.0
- Git v2.43.0
- Visual Studio Code v1.84.2
- Docker v24.0.6
- Docker Desktop v4.25.2
- MongoDB Shell v2.1.0

The versions listed above are the ones used in the book. While installing a newer version should not be an issue, please note that certain steps might work differently on a newer version. If you are having an issue with the code and steps provided in this book, please try using the mentioned versions.

## Install

To install the dependencies, run:

```bash
npm install
```

## Start

First, make sure that the `mongo` Docker container is running.

To run the backend in dev mode, run the following command:

```bash
npm run dev
```

For production mode, run:

```bash
npm start
```

To exit the web server, press the `Ctrl+C` key combination.

## Tests

To run the tests, execute the following command:

```bash
npm test
```

## Building the Docker image

To build the Docker image for the backend, run the following command:

```bash
docker build -t blog-backend .
```

Then, you can start a new container, as follows:

```bash
docker run -it -e PORT=3001 -e DATABASE_URL=mongodb://host.docker.internal:27017/blog -p 3001:3001 blog-backend
```

Please note that this requires a MongoDB container to be running on port 27017!
