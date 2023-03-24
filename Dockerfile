FROM node:14.21.3-slim as build-env
WORKDIR /app
COPY . /app/
RUN yarn && yarn build


FROM rapidfort/nginx-official:1.22.1-alpine-perl
COPY --from=build-env /app/build /usr/share/nginx/html/

CMD nginx -g 'daemon off;'
