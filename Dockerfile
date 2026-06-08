# Build stage
FROM docker.io/library/node:22-alpine AS build
WORKDIR /app

RUN npm install -g npm@11.16.0

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime stage
FROM docker.io/library/node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

COPY --from=build /app/.output ./.output

EXPOSE 8080

CMD ["node", ".output/server/index.mjs"]