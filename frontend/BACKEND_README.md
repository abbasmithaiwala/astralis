# Astralis Full Stack Setup

This project consists of a React frontend and Express backend. Follow these instructions to set up both parts of the application.

## Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Create a `.env` file in the server directory with the following content:
   ```
   PORT=5000
   NODE_ENV=development
   API_KEY=your_api_key_here
   ```

4. Run the backend in development mode:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

   The server will be available at http://localhost:5000.

## Frontend Setup

1. From the project root, install dependencies (if not already done):
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

2. Create a `.env.local` file in the project root with the following content:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

3. Run the frontend in development mode:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

   The frontend will be available at http://localhost:5173 (or another port if 5173 is in use).

## Testing the Integration

1. Make sure both the backend and frontend are running.
2. Navigate to the Examples page: http://localhost:5173/examples
3. You should see the Examples interface where you can:
   - View existing examples
   - Add new examples
   - Delete examples

## API Endpoints

The backend provides the following API endpoints:

- `GET /health`: Server health check
- `GET /api`: API info
- `GET /api/examples`: Get all examples
- `GET /api/examples/:id`: Get example by ID
- `POST /api/examples`: Create a new example
- `PUT /api/examples/:id`: Update an example
- `DELETE /api/examples/:id`: Delete an example

## Development Workflow

1. Start both the backend and frontend servers.
2. Make changes to the backend code in the `server` directory.
3. Make changes to the frontend code in the `src` directory.
4. The development servers will automatically reload when you save changes.

## Building for Production

### Backend

```
cd server
npm run build
npm start
```

### Frontend

```
npm run build
```

The frontend build will be created in the `dist` directory, which can be served by any static file server. 