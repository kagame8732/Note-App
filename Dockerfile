FROM node:17-alpine3.12 as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM nginx:stable-alpine
COPY  --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]





