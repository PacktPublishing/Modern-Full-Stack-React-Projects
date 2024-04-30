# Modern Full-Stack React Projects / Chapter 5

_Deploying the Application with Docker and CI/CD_

## Requirements

Please install the following, if you do not already have them installed:

- Node.js v20.10.0
- Git v2.43.0
- Visual Studio Code v1.84.2

The versions listed above are the ones used in the book. While installing a newer version should not be an issue, please note that certain steps might work differently on a newer version. If you are having an issue with the code and steps provided in this book, please try using the mentioned versions.

## Preparing the backend

Before running the frontend, please make sure to prepare and start the backend by following the instructions in the [`backend/README.md`](backend/README.md) file.

## Install

If you cloned the full repository for the book, Husky may not find the `.git` directory when running `npm install`. In that case, just run `git init` in the root of the corresponding chapter folder.

```bash
git init
npm install
```

## Start

To start the app in development mode, run the following command:

```bash
npm run dev
```

## Using Docker Compose

To run a database service, the backend and the frontend in Docker Compose, execute the following command:

```bash
docker compose up
```

## Building the Docker image

To build the Docker image for the frontend, run the following command:

```bash
docker build -t blog-frontend .
```

Then, you can start a new container, as follows:

```bash
docker run -it -p 3000:80 blog-frontend
```
