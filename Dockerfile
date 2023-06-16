FROM node:18.13.0-alpine3.16

# expect a build-time variable
# ARG DATABASE_URL
# # use the value to set the ENV var default
# ENV DATABASE_URL=$DATABASE_URL

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package.json /app
COPY prisma ./prisma/

# copy source code to /app/src folder
COPY . /app

RUN npm install

# Generate prisma
RUN npx prisma db push --schema="./prisma/schema.prisma"
RUN npx prisma generate --schema="./prisma/schema.prisma"

EXPOSE 4020

CMD [ "npm", "run", "start:dev" ]
