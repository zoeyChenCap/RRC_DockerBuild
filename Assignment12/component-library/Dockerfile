# Use an official Node.js image as the build stage
FROM node:18-alpine

# Set working directory
WORKDIR /Chen_Zoey_ui_garden

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

RUN npm run build

EXPOSE 8083

CMD ["npx", "serve", "-s", "build", "-l", "8083"]
