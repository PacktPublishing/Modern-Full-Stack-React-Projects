FROM node:20 AS base

FROM base AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install sharp
COPY . .
ARG DATABASE_URL
ARG JWT_SECRET
ARG BASE_URL
RUN npm run build

FROM base AS final
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=build /app/public ./public
RUN mkdir -p .next
RUN chown nextjs:nodejs .next
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV NODE_ENV production
USER nextjs
CMD ["node", "server.js"]
