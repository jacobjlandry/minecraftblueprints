FROM node:20-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install && \
    npm install -g vite@latest

# Copy the rest of the application
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# The command will be specified in docker-compose.yml 