FROM node:22.19.0-alpine

WORKDIR /app
COPY .next/standalone ./
COPY .next/static ./.next/static
# COPY .next/server ./.next/server

EXPOSE 3000
CMD ["node", "server.js"]
