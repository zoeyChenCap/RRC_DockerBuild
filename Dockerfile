# Use Node.js 14 Alpine as the base image
FROM node:14-alpine

# Set environment variables
ENV PORT=7775

# Create and set the working directory
WORKDIR /chen_zoey_site

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 7775

# Start the application
CMD ["npm", "start"]