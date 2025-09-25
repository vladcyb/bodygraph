FROM node:5.12.0

ENV NPM_VERSION=4.6.1 \
    NPM_CONFIG_LOGLEVEL=warn \
    NPM_CONFIG_PRODUCTION=false

WORKDIR /app

# ставим npm@4 через tarball
ADD https://registry.npmjs.org/npm/-/npm-${NPM_VERSION}.tgz /tmp/npm.tgz

RUN set -eux; \
  cd /usr/local/lib/node_modules; \
  rm -rf npm; \
  tar -xzf /tmp/npm.tgz -C /tmp; \
  mv /tmp/package npm; \
  rm -f /tmp/npm.tgz; \
  ln -sf /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm; \
  ln -sf /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npx; \
  node -v; npm -v

# копируем только package.json
COPY package.json ./

RUN npm install

COPY src ./src

COPY dist ./dist

COPY webpack.config.js ./

EXPOSE 8080

CMD ["npm","start"]
