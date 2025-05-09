
FROM --platform=linux/amd64 node:20

WORKDIR /usr/src/app

ADD . /usr/src/app

# Install Google Chrome Stable and fonts
RUN apt-get update && apt-get install curl gnupg -y \
    && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install google-chrome-stable -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

RUN yarn install
RUN yarn run build
RUN yarn config set user 0
RUN yarn config set unsafe-perm true
# Set time zone
ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# prod
# env
ENV ENV=prod
EXPOSE 3000
EXPOSE 9253

CMD [ "yarn", "run", "start:prod" ]

