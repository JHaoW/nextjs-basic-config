FROM node:22.19.0-alpine
WORKDIR /app
ENV NODE_ENV=production

# 复制依赖（deploy 产物）
COPY deploy/node_modules ./node_modules
COPY deploy/package.json ./package.json

# 复制 Next standalone 运行文件
COPY .next/standalone/server.js ./server.js
COPY .next/standalone/.next ./.next
COPY .next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
