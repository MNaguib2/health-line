# Step 1: Use Node.js base image to build Angular app
FROM node:22.9.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the app source code
COPY . .

# Build the Angular app
RUN npm run build

# Step 2: Use Nginx to serve the Angular app
FROM nginx:alpine

# Copy the build output to Nginx
COPY --from=build /app/dist/health-line/browser /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
