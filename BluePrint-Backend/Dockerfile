# Dockerfile (backend)
FROM node:20-alpine

WORKDIR /app

RUN mkdir -p /app/.next/cache && chmod -R 777 /app/.next/cache

# Copy package files
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Expose port
EXPOSE 5050

# Start app
CMD ["node", "server.js"]