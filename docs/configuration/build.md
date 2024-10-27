# Build Configuration

This page contains all build configuration for the docker image.

## Remote Build

By default, it will build the image locally and push it to the registry. You can also use the same remote server to build the image. In this case the image won't be pushed to the registry.

```yaml
build:
    remote_build: true
```

## Labels

Set image labels

```yaml
build:
    labels:
        <label>: <value>
```

## Build Args

Set build args

```yaml
build:
    build_args:
        <arg>: <value>
```

## Forward SSH Agent

If you want to access private SSH Git repositories, you can forward the SSH.

```yaml
build:
    passthroughs_ssh_socket: true
```

## Secrets

You can pass secrets to the build process. To use them in your Dockerfile, you have to use `RUN --mount=type=secret,id=<name>,target=/run/secrets/<name>` and then access the secret with `$<name>`.

See here for all complete usage: https://docs.docker.com/build/building/secrets/#target

### Secrets from Environment Variables

```yaml
build:
    secrets:
        from_env:
            MY_SECRET_KEY: ~
```

In this way we use `MY_SECRET_KEY` from localhost and make it available in the build process with the same name.

You can remap the name by specifying 2nd argument:

```yaml
build:
    secrets:
        from_env:
            MY_SECRET_KEY: INSIDE_BUILD_ENV_NAME
```

### Stored Secrets

You can also use stored secrets set by `tanjun secret set` inside the build process.

```yaml
build:
    secrets:
        from_stored:
            MY_SECRET_KEY: ~
```

In this way we use `MY_SECRET_KEY` from localhost and make it available in the build process with the same name. 

You can remap the name by specifying 2nd argument:

```yaml
build:
    secrets:
        from_stored:
            MY_SECRET_KEY: INSIDE_BUILD_ENV_NAME
```

### 1Password secrets

You can use also 1Password secrets inside docker image.

```yaml
build:
    secrets:
        onepassword: 
        items:
            - name: <item-name>
              vault: <vault-name>
```

It exposes all fields of the Item as environment variable. With `omit_fields` property you can ignore fields, and with `remap_fields` you can rename 1Password fields to your own names.