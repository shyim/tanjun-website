# Version Management

Every time when you deploy, Tanjun will build a docker image, push it to the repository and roll it out. 
The previous versions will be kept, so you can do a rollback.

By default, it will keep 5 versions, you can configure it in your config:

```yaml
app:
   #....
keep_versions: 5
```

## List all versions

You can list with `tanjun version list` command all existing versions. Aliases are versions which share the same code, but were used in different deployments.

## Rollback

To roll back to a specific version you can use `tanjun deploy --rollback` command.

It will roll back to the previous version.

## Specify exact version

You can specify an exact version to deploy with `--version` option like: `tanjun deploy --version=<name>`.

This is useful when you want to deploy a specific version, but not necessarily the latest one or previous one. You can find the name in the list command.

