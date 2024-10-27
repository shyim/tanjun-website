# Application Configuration

This page lists various configuration options for the application in the `.tanjun.yml`

::: info
You can use `tanjun deploy --version=current` to deploy only the configuration change to not always build the docker image and push it.
:::

## Environment Variables

```yaml
app:
  env:
    <name>:
      value: '<value>'
```

## Secrets

### Generated secrets

It's possible to let Tanjun generate a secret for you. This is useful if you just need a random length key and the content doesn't matter.

```yaml
app:
    initial_secrets:
        <name>:
            expr: 'randomString(32)'
```

Right now `randomString(length)` is the only supported expression.

### Custom set secrets

You can use `tanjun secret set [name] [value]` to add a custom secret to your application. This will be saved on the Server and don't need to be checked in with Git.

### Secrets from local environment variables

You can use local environment variables and use them in tanjun.

This example would use `FOO` env from local and expose also `FOO` in the container.

```yaml
  secrets:
    from_env:
      FOO: ~
```

You can also specify the target name for the secret:

```yaml
  secrets:
    from_env:
      FOO: APP_FOO
```

In this way `APP_FOO` will be available in the container, with the value of `FOO` from local.

### 1Password Secrets

You can use also 1Password to expose them as environment variables in Tanjun.

```yaml
app:
    secrets:
        onepassword: 
        items:
            - name: <item-name>
              vault: <vault-name>
```

It exposes all fields of the Item as environment variable. With `omit_fields` property you can ignore fields, and with `remap_fields` you can rename 1Password fields to your own names.

## Mounts

With mounts, you can add a volume to your application. That folder will be writable for your application and survive between multiple deployments.

```yaml
app:
  mounts:
    <mount-name>:
      path: <path>
```

The path can be relative to your application or absolute. 

## Workers

With workers, you can run side application using the same application base. This is mostly intended for queue workers or other long-running side-tasks.

```yaml
app:
  workers:
    <worker-name>:
      command: '<command to run in cotainer>'
      replicas: 1 # How many proceses should run at same point
```

## Cronjobs

Cronjobs are similar to workers, but these are executed at specific time.

```yaml
app:
  cronjobs:
    - schedule: '<crontab syntax>'
      command: '<command>'
```

## Deploy Hooks

`deploy` hook is executed while the old and new app version exists as same time to run tasks like migrations. If that hook fails, the deployment will fail and continue run the old application.

The `post_deploy` hook is there, to run code after the critical deployment part has been executed. Like things to clean up stuff, trigger jobs for the queue.

```yaml
app:
  hooks:
    deploy: |
      echo "deploy"
    post_deploy: |
      echo "post_deploy"
```

