#Creates a layer from node:alpine image.
FROM node:18-alpine

#Creates directories
RUN mkdir -p /app

#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /app

##Copy new files or directories into the filesystem of the container
COPY . /app

#Execute commands in a new layer on top of the current image and commit the results
RUN yarn install

#Allows you to configure a container that will run as an executable
ENTRYPOINT ["yarn", "dev:local"]
