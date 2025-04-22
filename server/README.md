# Astralis Server

Express backend for the Astralis React application.

## Setup

1. Clone the repository
2. Navigate to the server directory:
   ```
   cd server
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
4. Create a `.env` file based on the `env.example` file:
   ```
   cp env.example .env
   ```
5. Update the `.env` file with your configuration

## Development

To run the server in development mode:

```
npm run dev
```

or

```
yarn dev
```

The server will be available at http://localhost:5000.

## API Endpoints

- `GET /health`: Server health check
- `GET /api`: API info
- `GET /api/examples`: Get all examples
- `GET /api/examples/:id`: Get example by ID
- `POST /api/examples`: Create a new example
- `PUT /api/examples/:id`: Update an example
- `DELETE /api/examples/:id`: Delete an example

## Securing the API

This API uses a simple API key authentication. To access protected endpoints, include the `x-api-key` header in your requests:

```
x-api-key: your_api_key_here
```

## Building for Production

To build the server for production:

```
npm run build
```

or

```
yarn build
```

This will compile the TypeScript code to JavaScript in the `dist` folder.

To start the production server:

```
npm start
```

or

```
yarn start
``` 