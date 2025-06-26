# Use official Node.js LTS base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the backend code
COPY . .

# Expose API port
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]

