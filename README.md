# Easy Headless

Easy Headless is a web application based on a microfrontends architecture and developed with NextJS.
## Requirements

- Node.js v18.15.0
-

## Installation

To install the application dependencies, run the following command:

```
npm install
```

## Development mode

To run the application in development mode, run the following command:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

## Building

To build the application for production deployment, run the following command:

```
npm run build
```

This command will create an `out` folder that will contain the compiled version of the application.

## Production mode

To run the application in production mode, run the following command:

```
npm start
```

## Build and run production mode

To run the application in production mode, run the following command:

```
npm start:prod
```

## Module Federation plugin

Easy Headless is the host application where the rest of the applications will reside, which will be called remotely through the Module Federation plugin for NextJS.

For more information about using the Module Federation plugin, please refer to the official NextJS documentation.
