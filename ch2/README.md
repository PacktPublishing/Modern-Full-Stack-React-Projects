# Modern Full-Stack React Projects / Chapter 2

_Getting to Know Node.js and MongoDB_

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

If you cloned the full repository for the book, Husky may not find the `.git` directory when running `npm install`. In that case, just run `git init` in the root of the corresponding chapter folder.

```bash
git init
npm install
```

## Start

To run the backend scripts, run the respective files using node, as follows:

```bash
node backend/helloworld.js
node backend/files.js
node backend/simpleweb.js
node backend/webfiles.js
node backend/mongodbweb.js
```

For those scripts that start a web server, you can exit them by pressing the `Ctrl+C` key combination.
