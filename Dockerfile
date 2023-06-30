# Etapa de construcción
FROM node:lts-alpine as builder

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]