FROM node:alpine

WORKDIR /app 

COPY package.json ./

RUN npm install 

COPY ./ ./

CMD ["npm","start"]

# docker build -t tag/posts

#docker run with_id/tagname

#docker run -it [image/tag] [with custom command]

#

