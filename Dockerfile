FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# The command will be specified in docker-compose.yml 