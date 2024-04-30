# Modern Full-Stack React Projects / Chapter 19

_Deploying a Next.js App_

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

Please install the following, if you do not already have them installed:

- Node.js v20.10.0
- Git v2.43.0
- Visual Studio Code v1.84.2

The versions listed above are the ones used in the book. While installing a newer version should not be an issue, please note that certain steps might work differently on a newer version. If you are having an issue with the code and steps provided in this book, please try using the mentioned versions.

## Install

To install the dependencies:

```bash
npm install
```

## Start

To start the app in development mode, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy via Docker

To deploy our app via Docker, we first need to build the Docker image by running the following command:

```bash
docker build \
  -t blog-nextjs \
  --build-arg "DATABASE_URL=mongodb://host.docker.internal:27017/blog" \
  --build-arg "JWT_SECRET=replace-with-random-secret" \
  --build-arg "BASE_URL=http://localhost:3000" \
  .
```

Now, we can start a new container, as follows:

```bash
docker run \
  -d \
  --name blog-app \
  -p 3000:3000 \
  -e "DATABASE_URL=mongodb://host.docker.internal:27017/blog" \
  -e "JWT_SECRET=replace-with-random-secret" \
  -e "BASE_URL=http://localhost:3000" \
  --restart unless-stopped \
  blog-nextjs
```