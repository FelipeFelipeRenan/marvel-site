FROM node:14.18.1-alpine AS build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install  

#RUN npm cache clean --force

RUN npm install react-scripts@4.0.3 -g 

COPY . /app

RUN npm run build



FROM nginx:1.21.4-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]