# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install app dependencies
RUN npm i

# Bundle your app's source code inside the Docker image
COPY . .

# Expose the port on which your app runs
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]