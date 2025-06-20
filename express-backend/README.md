# Express Backend Project

This is a simple Express backend project that serves static information through an API endpoint.

## Project Structure

```
express-backend
├── src
│   ├── app.js          # Entry point of the application
│   ├── routes
│   │   └── info.js     # Defines the /api/info route
│   └── controllers
│       └── infoController.js # Handles the logic for the /api/info route
├── package.json        # NPM configuration file
└── README.md           # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To start the server, use the following command:

```
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoint

- **GET /api/info**: Returns static information.

## License

This project is licensed under the MIT License.