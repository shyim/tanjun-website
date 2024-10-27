# Deploying a Hello World Application

This guide will walk you through deploying a simple Hello World application using Tanjun to a VPS.

## Prerequisites

- A VPS reachable with SSH Key Authentication

## Create a new Tanjun project

Create a new empty folder and create a `index.js` file in it.

```js
const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hello, World!\n');
    response.end();

}).listen(3000);
```

This is our Node.js Hello World application. It listens on port 3000 and returns a simple text response.

To deploy it we need to create a new Tanjun project using the following command:

```bash
tanjun init
```

This will ask you a few questions about your project and create a new project directory with the necessary files.

## Prepare your VPS for deployment

Next, you will need to prepare your VPS for deployment. You can do this by running the following commands:

```bash
tanjun setup
```

This will check if Docker is installed, when not it will install it for you. It will also deploy a new Docker Container with listing to Port 80 and 443 to the VPS.

### Deploy your application

Now that your VPS is ready, you can deploy your application by running the following command:

```bash
tanjun deploy
```

This will automatically discover that the Project is using Node.js and build a proper Docker Image for it. It will then deploy the Docker Image to your VPS and start it and your application will be live at the given URL.


