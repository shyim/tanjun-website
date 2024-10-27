# Service Configuration

Mostly your application needs a Database or other 3rd party things. Therefore, the services are existing.

Tanjun supports following services:

- Memcached
- MySQL
- Open Search
- Postgres
- RabbitMQ
- Valkey


```yaml
services:
    <name>:
        type: <type>
        settings:
```

Use autocomplete in your IDE to see all available types and settings.

## MySQL example

```yaml
services:
  database:
    type: mysql:8.0
    settings:
      sql_mode: 'error_for_division_by_zero'
```

## Accessing the Service from your Application

Typically, you want to expose the connection information of your service to your application using environment variables.

For that we can add a new environment variable to our application:

```yaml
app:
    env:
        DATABASE_URL:
            expr: 'service.database.url'
```

::: info
The part "database" comes from the service name defined in the `services` part.
:::

You can also craft 3rd party connection strings using the following syntax:

```yaml
app:
    env:
        DATABASE_URL:
            expr: '"mysql://" + service.database.host'
```

See below for all available variables for each service.

## Available variables

### Memcached

- `host` - The host to reach Memcached
- `port` - The port to reach Memcached
- `url` - The URL to reach Memcached (example: `memcached://host:11211`)

### MySQL

 - `host` - The host to reach the database
 - `port` - The port to reach the database
 - `username` - The username to connect with
 - `password` - The password to connect with
 - `database` - The name of the database to use
 - `url` - The URL to reach the database (example: `mysql://user:pass@host:3306/db`)
 - `go` - The Go driver connection string (example: `user:pass@tcp(host:port)/db?charset=utf8&parseTime=True`)

 ### OpenSearch

 - `host` - The host to reach the database
 - `port` - The port to reach the database
 - `url` - The URL to reach the database (example: `http://host:9200`)

### PostgreSQL

- `host` - The host to reach the database
- `port` - The port to reach the database
- `username` - The username to connect with
- `password` - The password to connect with
- `database` - The name of the database to use
- `url` - The URL to reach the database (example: `postgres://user:pass@host:5432/db?sslmode=disable`)
- `go`  - The Go driver connection string (example: `user:pass@tcp(host:port)/db?sslmode=disable`)

### RabbitMQ

- `host` - The host to reach the database
- `port` - The port to reach the database
- `username` - The username to connect with
- `password` - The password to connect with
- `url` - The URL to reach the database (example: `amqp://user:pass@host:5672/db`)

### Valkey

- `host` - The host to reach the database
- `port` - The port to reach the database
- `url` - The URL to reach the database (example: `valkey://user:pass@host:8081/db`)
