# Use a slim version of Node for a smaller, faster container
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy dependency files first (optimizes build caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of your application code
COPY . .

# Match the port in your index.js
EXPOSE 8080

# Start the server
CMD ["node", "index.js"]
