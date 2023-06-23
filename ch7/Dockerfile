FROM node:18
ARG VITE_BACKEND_URL="http://localhost:3001/api/v1"
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build:client
ENV VITE_BACKEND_URL="http://host.docker.internal:3001/api/v1"
RUN npm run build:server

CMD ["npm", "start"]