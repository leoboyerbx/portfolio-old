FROM node:lts

# ENV CI=true
ENV PORT=3000

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile --prod
COPY app.js /app/
COPY public /app/public
COPY server /app/server
COPY views /app/views

CMD ["node", "app.js"]
