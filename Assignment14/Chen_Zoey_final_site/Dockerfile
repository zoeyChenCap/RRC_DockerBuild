#Stage 1: Build
# Use an official Node.js image as the build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /Chen_Zoey_ui_final_site

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy all source code
COPY . .

RUN npm run build

#Stage 2: Serve
FROM nginx:stable-alpine
LABEL maintainer="Zoey Chen"

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html
COPY --from=build /Chen_Zoey_ui_final_site/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
