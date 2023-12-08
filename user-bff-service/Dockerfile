# Use an official Node.js runtime as a parent image
FROM --platform=linux/amd64 node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# This will require DOPPLER_TOKEN as env variable in runtime for Doppler Authentication
RUN apt-get update && apt-get install -y apt-transport-https ca-certificates curl gnupg && \
  curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | gpg --dearmor -o /usr/share/keyrings/doppler-archive-keyring.gpg && \
  echo "deb [signed-by=/usr/share/keyrings/doppler-archive-keyring.gpg] https://packages.doppler.com/public/cli/deb/debian any-version main" | tee /etc/apt/sources.list.d/doppler-cli.list && \
  apt-get update && \
  apt-get -y install doppler

# Copy package.json, yarn.lock, and .yarnrc files to the working directory
COPY package.json yarn.lock ./

# Install app dependencies using Yarn
RUN yarn install

# Install typescript and ts-node globally
RUN yarn global add typescript ts-node

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
ARG PORT=5001
EXPOSE ${PORT}

# Start the application using nodemon and dynamically set the port
CMD ["sh", "-c", "yarn start --port ${PORT}"]
