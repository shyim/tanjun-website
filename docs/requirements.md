# Requirements

## Local (the deploying machine)

- The CLI, refer to the [Installation](./install.md) to how to install it.
- Docker to build the image locally

::: info
If you set `remote_build` to `true` in the `.tanjun.yml` file, you don't need Docker installed locally. But the Server will have additional load to build the image.
:::

## Server

- Docker installed
- Port: 80, 443 free and open
- Your domain pointing to the server

## Recommendations to configure on Server

### SSH Server

Allow only SSH key authentication, disable password authentication.

`/etc/ssh/sshd_config`: 
```diff
-#PasswordAuthentication yes
+PasswordAuthentication no
```

Reload SSH Server config: `systemctl reload sshd`

### Enable Firewall

```bash
apt-get install -y ufw
ufw allow ssh
ufw allow http
ufw allow https
ufw enable
```

### Enable Docker Live Restore

This makes sure that your docker containers still running when you perform a Docker Update on the server.

`/etc/docker/daemon.json`:
```json
{
  "live-restore": true
}
```

and then restart Docker: `systemctl restart docker`

