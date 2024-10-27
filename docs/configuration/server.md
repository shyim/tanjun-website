# Server Configuration

In the server part of the configuration you can configure the server credentials.

```yaml
server:
    address: <ip>
    username: <username>
    port: <port>
```

The server will be accessed with SSH, and it's required that your local SSH key is set up on the server.

## Testing

For local testing purposes, when you set `address` to `127.0.0.1` it will use the local Docker Daemon without doing SSH.
