# Proxy Configuration

With Proxy we mean the entry point of your application.

```yaml
proxy:
    host: <hostname>
```

At this host, you will be able to access your application.

For SSL you can just add this to your config:

```yaml{3}
proxy:
    host: <hostname>
    ssl: true
```

### Connection to your Application

By default, it uses the first TCP exposed port of your build docker image. If that is wrong you can configure a specific port in the config.

```yaml
proxy:
    //...
    app_port: 5000
```

### Health Check

The proxy server is performing health checks against your application if it is running to serve traffic.

You can configure the health check:

```yaml
proxy:
    //...
    healthcheck:
        interval: 1 # in seconds
        timeout: 5 # in seconds
        path: '/health'
```

So every second with a timeout of 5 seconds it will try to access `/health` on your application. If the response is 200, then the proxy server will serve traffic. Once the app is up, the proxy will stop hitting the health check endpoint.

### Buffering

Whether to buffer request and response bodies in the proxy.

By default, buffering is enabled with a max request body size of 1GB and no limit for response size.

You can also set the memory limit for buffering, which defaults to 1MB; anything larger than that is written to disk.

```yaml
proxy:
    //...
    buffering:
        requests: true
        responses: true
        max_request_body: 40_000_000
        max_response_body: 0
        memory: 2_000_000
```

### Response Timeout

You can set additionally a response timeout for the proxy. This is useful if you want to prevent your application from taking too long to respond and thus causing the proxy to hang indefinitely.

```yaml
proxy:
    //...
    response_timeout: 30
```

This is set to 30 seconds in default.
