# Installation

Tanjun provides various ways to install the CLI.


## Homebrew (macOS)

```sh
brew install shyim/tap/tanjun
```

## Debian / Ubuntu / Fedora / CentOS / Alpine

Install first the Repository

```sh
curl -1sLf \
  'https://dl.cloudsmith.io/public/tanjun/stable/setup.alpine.sh' \
  | sudo -E bash
```

Then install the CLI with the package manager:

```sh
# APT
apt install tanjun

# DNF
dnf install tanjun

# APK
apk add tanjun
```

## Using go

```sh
go install github.com/shyim/tanjun
```

## Manually download the binary

You can still go to the [Releases](https://github.com/shyim/tanjun/releases/) and download the prebuilt binary
