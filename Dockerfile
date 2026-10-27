# Multi-stage Docker build for Syntellum Web Application

# Stage 1: Build the React + Vite application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci || npm install

# Copy source code and config files
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Serve the application with Nginx Alpine
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Health check to ensure Nginx is healthy
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
