# RUN useradd -u 1001 appuser
# RUN chown -R appuser /run.sh
# USER appuser

FROM node:16-alpine

#set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY ./ /app

RUN npm install

#start app
CMD ["npm","run", "start"]
