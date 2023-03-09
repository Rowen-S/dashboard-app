FROM node:14.21.3-slim as build-env
WORKDIR /app
COPY . /app/
RUN yarn && yarn build


FROM harbor.hub.hashkey.com/middleware/nginx:hashkey-1.12.1
COPY --from=build-env /app/build /usr/share/nginx/html/

USER nginx

EXPOSE 80

CMD nginx -g 'daemon off;'
