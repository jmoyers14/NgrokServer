# Webhook Test Server

A simple Express server for testing webhooks locally using ngrok tunneling. This server provides endpoints to test both GET and POST requests and automatically logs all incoming webhook data to the console.

## Installation

```bash
yarn install
```

## Usage

Start the server with ngrok tunneling:
```bash
yarn start:ngrok
```

Once running, you'll see two URLs in the console:
- Your local server URL (typically http://localhost:3030)
- Your ngrok tunnel URL (https://xxxx-xx-xx-xxx-xx.ngrok-free.app)

### Testing the Webhook

Send a test POST request using curl:
```bash
curl -X POST https://your-ngrok-url -H "Content-Type: application/json" -d '{"message": "Hello Webhooks!"}'
```

The server will log the received webhook data to the console and return a JSON response confirming receipt.

## Features

- Automatic ngrok tunnel creation
- JSON body parsing
- Request logging
- Response confirmation
