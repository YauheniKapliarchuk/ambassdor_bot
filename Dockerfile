FROM node:10-alpine

WORKDIR /data/app
ADD . /data/app

RUN \
    apk add --no-cache --virtual=build-dependencies git && \
    npm install --production && \
    npm run build && \
    npm cache clean --force && \
    apk del --no-cache build-dependencies

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]
