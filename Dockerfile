FROM node as builder
WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN npm install
RUN npm run build
FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
