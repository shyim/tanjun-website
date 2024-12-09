# Commands

Here is an overview of all Tanjun commands.

## tanjun init

This creates a new `.tanjun.yml` file in the current directory and asks you some questions.

## tanjun setup

This command installs Kamal Deploy and Valley as Database on the server.

## tanjun deploy

This command deploys your code to the server.

## tanjun shell

### Flags

- `--service <name>` - This will show you the logs of your service, instead of the app

This opens a shell in the remote server, so you can run commands there.

## tanjun logs

### Flags

- `--service <name>` - This will show you the logs of your service, instead of the app
- `--follow` - This will follow the logs

This shows all logs from your application.

## tanjun forward

This will forward an externally open port to your localhost.

Example: `tanjun forward database 3306`, this will forward the port 3306 on your local machine to the database server.

## tajun secret list

This shows all secrets in your application.

## tanjun secret add [name] [value]

This adds a new secret to your application.

## tanjun secret del [name]

This deletes a secret from your application.

## tanjun service ls

This shows all running services on the server.

## tanjun service rm [name]

This allows to remove a service from the server. Services are not automatically removed, you have to do it manually to prevent data lost.

## tanjun cronjob ls

This shows all cronjobs of the project and when the next execution is

## tanjun cronjob history [name]

This shows the history of a cronjob executions and if they failed.

## tanjun cronjob logs [id]

This shows the logs of a cronjob execution. The ID can be found in the history command.

## tanjun cronjob run [name]

This runs a specified cronjob manually.
