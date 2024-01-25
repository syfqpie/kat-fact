FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG env
RUN npm run ng build -- --prod

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
RUN apk add nano
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]