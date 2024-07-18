# Vercel Clone

A Vercel clone project that provides deployment management, real-time updates, and scalable infrastructure using AWS, Docker, Redis, and S3.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview

This project is a clone of Vercel, built to manage deployments, provide real-time updates, and ensure scalable infrastructure. It uses a combination of AWS services, Docker containers, Redis for caching, and S3 for storage.

## Architecture

![Architecture Diagram Example](https://camo.githubusercontent.com/cc06d9bab953db6a4ea85319c52585f45d415820f502e1b619905a08b68b4a0b/68747470733a2f2f692e696d6775722e636f6d2f7237515558715a2e706e67)

## Features

- **Deployment Management**: Easily deploy applications with a single click.
- **Real-time Updates**: Get real-time status updates of your deployments.
- **Scalable Infrastructure**: Automatically scale your applications based on demand.
- **AWS Integration**: Leverage AWS services for robust and reliable infrastructure.
- **Docker Containers**: Use Docker for containerization and easy deployment.
- **Redis Caching**: Improve performance with Redis caching.
- **S3 Storage**: Store and manage application assets in S3.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Containerization**: Docker
- **Cache**: Redis
- **Storage**: AWS S3
- **Deployment**: AWS ECS (Elastic Container Service)

## Setup

### Prerequisites

- Node.js and npm
- Docker
- AWS CLI
- Redis
- MongoDB (or your chosen database)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/kathan-shah1893/vercel-clone.git
   cd vercel-clone
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure AWS credentials and other environment variables in a `.env` file:
   ```env
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   AWS_REGION=your-region
   ```

4. Start the development server:
   ```sh
   npm start
   ```

5. Run the Docker container:
   ```sh
   docker-compose up --build
   ```

## Usage

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Start the React app:
   ```sh
   npm start
   ```

### Backend

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Start the Express server:
   ```sh
   npm start
   ```

### Deployment

Deploy the application to AWS ECS using the provided scripts and configurations.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.