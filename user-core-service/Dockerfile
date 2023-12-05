# Use an official Node.js runtime as a parent image
FROM --platform=linux/amd64 node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json, yarn.lock, and .yarnrc files to the working directory
COPY package.json yarn.lock ./

# Install app dependencies using Yarn
RUN yarn install

# Install typescript and ts-node globally
RUN yarn global add typescript ts-node

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN yarn build

# Expose the port the app runs on
ARG PORT=5001
EXPOSE ${PORT}

# Start the application using nodemon and dynamically set the port
CMD ["sh", "-c", "yarn start --port ${PORT}"]
