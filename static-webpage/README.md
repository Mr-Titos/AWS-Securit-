# static-webpage/README.md
# Static Webpage Project

This project is a static webpage that retrieves and displays information from the `/api/info` route of an Express backend.

## Project Structure

```
static-webpage
├── public
│   ├── index.html      # Main HTML document for the static webpage
│   ├── script.js       # JavaScript code to fetch and display data
│   └── style.css       # CSS styles for the static webpage
└── README.md           # Project documentation
```

## Installation

To set up the project, ensure you have a web server running that can serve the static files. You can use any static file server or host it on a platform that supports static sites.

## Usage

1. Start your Express backend server to ensure the `/api/info` endpoint is available.
2. Open `public/index.html` in a web browser to view the static webpage.

## API Endpoint

The static webpage retrieves data from the following API endpoint:

- **GET /api/info**: Returns static information in JSON format.

## License

This project is licensed under the MIT License.