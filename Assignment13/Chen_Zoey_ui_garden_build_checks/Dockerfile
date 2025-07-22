# Use an official Node.js image as the build stage
FROM node:18-alpine

# Set working directory
WORKDIR /Chen_Zoey_ui_garden_build_checks

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

RUN npm run build

RUN npm install -g serve
EXPOSE 8018

CMD ["serve", "-s", "build", "-l", "8018"]
